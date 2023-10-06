import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import ContactModal from "../Modal/ContactModal.jsx";
import GroupCreateModal from "../Modal/groupCreateModal.jsx";

export default function ChatSideBar({
                                        homeResponse,
                                        socketClose,
                                        contactsList,
                                        homeSocket,
                                        connectChatSocket
                                    }) {
    const [isLoading, setIsLoading] = useState(true)
    const [userList, setUserList] = useState(null)
    const [favouriteList, setFavouriteList] = useState(null)
    const [channelList, setChannelList] = useState(null)
    const [activeChat, setActiveChat] = useState(null)
    const handleClickSendMessage = useCallback((command, data) => homeSocket({'command': command, 'to': data}), [])


    useEffect(() => {
        if (homeResponse && homeResponse.notification) {
            console.log(homeResponse)
            if (homeResponse.private) {
                const foundInList1 = userList.find(item => item.user2.id === homeResponse.user)
                if (foundInList1) {
                    const updatedList = userList.map(item => {
                        if (item.user2.id === homeResponse.user) {
                            return {...item, "unread": homeResponse.count}
                        }
                        return item
                    })
                    setUserList(updatedList)
                }
                const foundInList2 = favouriteList.find(item => item.user2.id === homeResponse.user)
                if (foundInList2) {
                    const updatedList = favouriteList.map(item => {
                        if (item.user2.id === homeResponse.user) {
                            return {...item, unread: homeResponse.count}
                        }
                        return item
                    })
                    setFavouriteList(updatedList)
                }
            } else {
                const updatedList = [...channelList]
                const targetItem = updatedList.find(item => item.id === homeResponse.user);
                if (targetItem) {
                    targetItem.unread = homeResponse.count;
                    const updatedItem = {
                        ...targetItem,
                        "unread": homeResponse.count
                    }

                    const index = updatedList.indexOf(targetItem);
                    updatedList[index] = updatedItem;
                    setChannelList(updatedList);
                }
            }
        }
        if (homeResponse && homeResponse.channel_created) {
            if (homeResponse.private) setUserList((prevState) => [...prevState, homeResponse.room])
            else setChannelList((prevState) => [...prevState, homeResponse.room])
        }
    }, [homeResponse]);
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_API}api/all-room/.`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                }
            }).then(response => {
            setUserList(response.data["usersList"])
            setFavouriteList(response.data["favourite_users"])
            setChannelList(response.data["channelList"])
            setIsLoading(false)
        })
    }, []);
    if (isLoading) return <></>

    return <>
        {/* Start chats tab-pane */}
        <div
            className="tab-pane show active"
            id="pills-chat"
            role="tabpanel"
            aria-labelledby="pills-chat-tab"
        >
            {/* Start chats content */}
            <div>
                <div className="px-4 pt-4">
                    <div className="d-flex align-items-start">
                        <div className="flex-grow-1">
                            <h4 className="mb-4">Chats</h4>
                        </div>
                        <div className="flex-shrink-0">
                            <div
                                data-bs-toggle="tooltip"
                                data-bs-trigger="hover"
                                data-bs-placement="bottom"
                                title="Add Contact"
                            >
                                {/* Button trigger modal */}
                                <button
                                    type="button"
                                    className="btn btn-soft-primary btn-sm"
                                    data-bs-toggle="modal"
                                    data-bs-target="#addContact-exampleModal"
                                >
                                    <i className="bx bx-plus"/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <form>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control bg-light border-0 pe-0"
                                id="serachChatUser"
                                // onkeyup="searchUser()"
                                placeholder="Search here.."
                                aria-label="Example text with button addon"
                                aria-describedby="searchbtn-addon"
                                autoComplete="off"
                            />
                            <button
                                className="btn btn-light"
                                type="button"
                                id="searchbtn-addon"
                            >
                                <i className="bx bx-search align-middle"/>
                            </button>
                        </div>
                    </form>
                </div>

                {" "}
                {/* .p-4 */}
                <div className="chat-room-list" data-simplebar="">
                    {/* Start chat-message-list */}

                    {favouriteList === null && <>
                        <h5 className="mb-3 px-4 mt-4 font-size-11 text-muted text-uppercase">
                            Favourite
                        </h5>
                        <div className="chat-message-list">
                            <ul
                                className="list-unstyled chat-list chat-user-list"
                                id="favourite-users"
                            ></ul>
                        </div>
                    </>
                    }
                    {userList && <>
                        <div className="d-flex align-items-center px-4 mt-5 mb-2">
                            <div className="flex-grow-1">
                                <h4 className="mb-0 font-size-11 text-muted text-uppercase">
                                    Direct Messages
                                </h4>
                            </div>
                            <div className="flex-shrink-0">
                                <div
                                    data-bs-toggle="tooltip"
                                    data-bs-trigger="hover"
                                    data-bs-placement="bottom"
                                    title="New Message"
                                >
                                    {/* Button trigger modal */}
                                    <button
                                        type="button"
                                        className="btn btn-soft-primary btn-sm"
                                        data-bs-toggle="modal"
                                        data-bs-target=".contactModal"
                                    >
                                        <i className="bx bx-plus"/>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="chat-message-list">
                            <ul
                                className="list-unstyled chat-list chat-user-list"
                                id="usersList"
                            >
                                {userList.map((chats, key) => {
                                    const user2 = chats.user2;
                                    if (user2) {
                                        return (
                                            <li style={{cursor: "pointer"}} onClick={() => {
                                                socketClose();
                                                connectChatSocket("users", user2.id, user2);
                                                setActiveChat(user2.id);
                                                handleClickSendMessage("read_messages", user2.id);
                                                const updatedList = [...userList];
                                                updatedList[key].unread = 0;
                                                setUserList(updatedList)
                                            }}
                                                className={`users-chatlist chatlist2 ${activeChat === user2.id ? "active" : ""}`}
                                                id={user2.username} key={chats.id} data-name="usersList">
                                                <a className="unread-msg-user">
                                                    <div className="d-flex align-items-center">
                                                        <div
                                                            className="chat-user-img online align-self-center me-2 ms-0">
                                                            {user2.profile && user2.profile["avatar"] ? <><img
                                                                    src={user2.profile["avatar"]}
                                                                    className="rounded-circle avatar-xs"
                                                                    alt=""></img><span
                                                                    className="user-status"
                                                                    id={`status-${user2.username}`}></span> </> :
                                                                <div className="avatar-xs">
                                                    <span className="avatar-title rounded-circle bg-primary text-white">
                                                        <span
                                                            className="username">{user2.first_name[0]}{user2.last_name[0]}</span>
                                                        <span id={`status-${user2.username}`} className="user-status"/>
                                                    </span>
                                                                </div>
                                                            }
                                                        </div>
                                                        <div className="overflow-hidden">
                                                            <p className="text-truncate mb-0">{user2.first_name} {user2.last_name}</p>
                                                        </div>
                                                        <div className="ms-auto">
                                                    <span className="badge bg-dark-subtle text-reset rounded p-1"
                                                          id={`unread-${user2.username}`}>{chats.unread > 0 ? chats.unread : ""}</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        )
                                    }
                                })}
                            </ul>
                        </div>
                    </>
                    }
                    <div className="d-flex align-items-center px-4 mt-5 mb-2">
                        <div className="flex-grow-1">
                            <h4 className="mb-0 font-size-11 text-muted text-uppercase">
                                Channels
                            </h4>
                        </div>
                        <div className="flex-shrink-0">
                            <div
                                data-bs-toggle="tooltip"
                                data-bs-trigger="hover"
                                data-bs-placement="bottom"
                                title="Create group"
                            >
                                {/* Button trigger modal */}
                                <button
                                    type="button"
                                    className="btn btn-soft-primary btn-sm"
                                    data-bs-toggle="modal"
                                    data-bs-target="#addgroup-exampleModal"
                                >
                                    <i className="bx bx-plus"/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="chat-message-list">
                        <ul
                            className="list-unstyled chat-list chat-user-list mb-3"
                            id="channelList"
                        >
                            {channelList.map((channel, key) => {
                                return <li key={key} onClick={() => {
                                    socketClose();
                                    connectChatSocket("group", channel.id, channel)
                                    setActiveChat(channel.id);
                                    const updatedList = [...channelList];
                                    updatedList[key].unread = 0;
                                    setChannelList(updatedList)
                                }} data-name="channel" style={{cursor: "pointer"}}
                                           className={`${activeChat === channel.id ? "active" : ""}`}>
                                    <a className="unread-msg-user">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0 avatar-xs me-2">
                                                <span
                                                    className="avatar-title rounded-circle bg-soft-light text-dark">#</span>
                                            </div>
                                            <div className="flex-grow-1 overflow-hidden">
                                                <p className="text-truncate mb-0">{channel.name}</p>
                                            </div>
                                            <div>
                                                <div className="flex-shrink-0 ms-2"><span
                                                    className="badge bg-dark-subtle text-reset rounded p-1"
                                                >{channel.unread > 0 ? channel.unread : ""}</span></div>
                                            </div>
                                        </div>
                                    </a></li>
                            })}
                        </ul>
                    </div>
                    {/* End chat-message-list */}
                </div>
            </div>
            {/* Start chats content */}
            {/* Start add group Modal */}
            <GroupCreateModal contactsList={contactsList} handleClickSendMessage={handleClickSendMessage}/>
            {/* End add group Modal */}
        </div>
        {/* End chats tab-pane */}
        <ContactModal contactsList={contactsList} socketClose={socketClose} connectChatSocket={connectChatSocket}
                      setActiveChat={setActiveChat}/>

    </>

}