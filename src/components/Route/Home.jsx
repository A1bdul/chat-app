import Navbar from './Navbar.jsx'
import useWebSocket, {ReadyState} from "react-use-websocket";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import ContactModal from "../Modal/ContactModal.jsx";
import ChatContainer from '../Chats/chatContainer.jsx';

function Home() {
    const [user2, setUser2] = useState({})
    const [userInfo, setUserInfo] = useState({})
    const [chatMessages, getChatMessages] = useState([])
    const [currentChat, setCurrentChat] = useState(null)
    const [socket, getSocket] = useState(null)
    const messagesScrollRef = useRef(null)
    const SocketSend = async (type, info) => {
        if (type === "typing") {
            socket.send(JSON.stringify({
                command: 'typing'
            }))
        } else if (type === "chat") {
            socket.send(JSON.stringify(info))
        }
    }
    const socketClose = async(username) => {
        if (currentChat) {
            socket.close()
        }
    }
    const fetchData = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_API}user-api/.`,
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
        let url = `${import.meta.env.VITE_WEBSOCKET}${socketId}?token=${localStorage.getItem('access_token')}`,
            message_url = type === 'group' ? 'api/group-message/' + socketId : `api/room-messages/${socketId}`;

        setUser2(user2)
        setCurrentChat(type)
        const chatSocket = new WebSocket(url)
        getSocket(chatSocket)
        const requestMessage = await axios.get(`${import.meta.env.VITE_BACKEND_API}${message_url}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`
            }
        })
        console.log(requestMessage.data)
        getChatMessages(requestMessage["data"])

        chatSocket.onmessage = function (e) {
            const message = JSON.parse(e.data)
            if (message.command === "private_chat") {
                getChatMessages((prevState) => [...prevState, message])
            }
        }
    }


    const {readyState} = useWebSocket(`${import.meta.env.VITE_WEBSOCKET}ws/home/?token=${localStorage.getItem('access_token')}`,{
        onOpen: () => {
            console.log('Home connection is established !')
        },
        onMessage: (e) => {
            let notification = JSON.parse(e.data)
            if (user2 && user2 === notification.from){
                readyState({
                    messages_from: notification.from,
                    seen : true,
                    home: notification.from
                })
            }
        },
    })

    useEffect(() => {
        fetchData();
    }, []);

    const messagesEndRef = () => {
        messagesScrollRef.current.scrollIntoView({behavior: 'smooth'})
    }

    return <div className="layout-wrapper d-lg-flex overflow-hidden">
        <Navbar connectChatSocket={connectChatSocket} userInfo={userInfo} socketClose={socketClose} setUserInfo={setUserInfo} />
        <ChatContainer currentChat={currentChat} user2={user2} messages={chatMessages} messagesScrollRef={messagesScrollRef} messagesEndRef={messagesEndRef} socketSend={SocketSend} />
        <ContactModal />
    </div>
}

export default Home;
