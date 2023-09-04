import Navbar from './Navbar.jsx'
import { useEffect, useState } from "react";
import axios from "axios";
import ContactModal from "./Modal/ContactModal.jsx";
import ChatContainer from './Chats/chatContainer.jsx';

function Home() {
    const [user2, setUser2] = useState({})
    const [userInfo, setUserInfo] = useState({})
    const [chatMessages, getChatMessages] = useState([])
    const [currentChat, setCurrentChat] = useState(null)
    const [socket, getSocket] = useState(null)

    const SocketSend = async (type, info) => {
        if (type == "typing") {
            socket.send(JSON.stringify({
                command: 'typing'
            }))
        } else if (type == "chat") {
            console.log(info)
            socket.send(JSON.stringify(info))
        }
    }

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8000/user-api/.',
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("access_token")}`
                    }
                })
            setUserInfo(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    const connectChatSocket = async (type, socketId, user2) => {
        let url = `ws://localhost:8000/ws/${socketId}?token=${localStorage.getItem('access_token')}`,
            message_url = type === 'group' ? 'api/group-message/' + socketId : `api/room-messages/${socketId}`;


        setUser2(user2)
        setCurrentChat(type)
        const chatSocket = new WebSocket(url)
        getSocket(chatSocket)
        const requestMessage = await axios.get(`http://localhost:8000/${message_url}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`
            }
        })
        getChatMessages(requestMessage["data"])
        chatSocket.onopen = () => {
            console.log("Chat connection is established")

        }

        chatSocket.onmessage = function (e) {
            const message = JSON.parse(e.data)
            console.log(message)
            if (message.command == "private_chat") {
                getChatMessages((prevState) => [...prevState, message])
            }
        }
    }

    useEffect(() => {
        let socket = null;
        let reconnectInterval = null;
    
        const connectWebSocket = () => {
          socket = new WebSocket(`ws://localhost:8000/ws/home/?token=${localStorage.getItem('access_token')}`);
          
          // Connection opened
          socket.addEventListener('open', (event) => {
            console.log('WebSocket connection opened');
          });
    
          // Listen for messages
          socket.addEventListener('message', (event) => {
            let notify_message = JSON.parse(event.data)['payload']
            console.log(notify_message, user2)
        if (user2 && (notify_message.from === user2.username)) {
            notify_message['count'] = ''
        }
        (document.getElementById(`unread-${notify_message.from}`).innerText = notify_message.count)
          });
    
          // Connection closed
          socket.addEventListener('close', (event) => {
            console.log('WebSocket connection closed');
            // Try to reconnect
            reconnect();
          });
        };
    
        const reconnect = () => {
          if (!reconnectInterval) {
            reconnectInterval = setInterval(() => {
              console.log('Attempting to reconnect...');
              connectWebSocket();
            }, 3000); // Adjust the interval as needed
          }
        };
    
        // Start the initial WebSocket connection
        connectWebSocket();
    
        // Clean up the WebSocket connection and reconnect interval on component unmount
        return () => {
          if (socket) {
            socket.close();
            console.log('WebSocket connection closed');
          }
          if (reconnectInterval) {
            clearInterval(reconnectInterval);
            reconnectInterval = null;
            console.log('Reconnect interval cleared');
          }
        };
      }, []);
    
    

    useEffect(() => {
        fetchData();
    }, []);

    return <div className="layout-wrapper d-lg-flex overflow-hidden">
        <Navbar connectChatSocket={connectChatSocket} userInfo={userInfo} setUserInfo={setUserInfo} />
        <ChatContainer currentChat={currentChat} user2={user2} messages={chatMessages} socketSend={SocketSend} />
        <ContactModal />
    </div>
}

export default Home;
