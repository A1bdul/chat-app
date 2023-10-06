import Navbar from './Navbar.jsx'
import useWebSocket from "react-use-websocket";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import ChatContainer from '../Chats/chatContainer.jsx';
import Toast from "../App/Toast.jsx";

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

    const socketClose = async () => {
        if (currentChat) {
            getChatMessages([])
            socket.close()
            setCurrentChat(null)
        }
    }

    const connectChatSocket = async (type, socketId, user2) => {
        let url = `${import.meta.env.VITE_WEBSOCKET}${socketId}?token=${localStorage.getItem('access_token')}`;

        setUser2(user2)
        setCurrentChat(type)
        const chatSocket = new WebSocket(url)
        getSocket(chatSocket)
        chatSocket.onmessage = function (e) {
            const message = JSON.parse(e.data)
            if (message.command === "private_chat") {
                getChatMessages((prevState) => [...prevState, message])
            }
        }
    }


    const {
        sendJsonMessage,
        lastJsonMessage
    } = useWebSocket(`${import.meta.env.VITE_WEBSOCKET}home/?token=${localStorage.getItem('access_token')}`, {
        onOpen: () => {
            sendJsonMessage({'hello': "WORLD"})
        }, onMessage: event => {
            let data = JSON.parse(event.data)
            if (data["chat_messages"]) getChatMessages(data["payload"])
            if (data.read_messages) {
                const updatedList = chatMessages.map(item => {
                    return {...item, "read": true}
                })
                getChatMessages(updatedList)
            }
        },
        shouldReconnect: true,
        reconnectAttempts: 10
    })

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_API}user-api/.`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                }
            }).then(r => setUserInfo(r.data))
    }, []);

    const messagesEndRef = () => {
        messagesScrollRef.current.scrollIntoView({behavior: 'smooth'})
    }

    return <div className="layout-wrapper d-lg-flex">
        <Navbar connectChatSocket={connectChatSocket} homeSocket={sendJsonMessage} homeResponse={lastJsonMessage}
                userInfo={userInfo} socketClose={socketClose}
                setUserInfo={setUserInfo}/>
        <ChatContainer currentChat={currentChat} socketClose={socketClose} user2={user2} messages={chatMessages}
                       messagesScrollRef={messagesScrollRef} homeResponse={lastJsonMessage}
                       messagesEndRef={messagesEndRef} socketSend={SocketSend} userInfo={userInfo}/>
        <Toast homeResponse={lastJsonMessage}/>
    </div>
}

export default Home;
