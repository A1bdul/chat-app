import {useEffect, useCallback, useState} from "react";
import axios from "axios";

export default function ChatSideBar({userInfo, homeResponse, socketClose, homeSocket, connectChatSocket}) {
    const [isLoading, setIsLoading] = useState(true)
    const [userList, setUserList] = useState(null)
    const [favouriteList, setFavouriteList] = useState(null)
    const [channelList, setChannelList] = useState(null)
    const [activeChat, setActiveChat] = useState(null)

    const getChatRoom = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_API}api/all-room/.`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("access_token")}`
                    }
                })
            setUserList(response.data["usersList"])
            setFavouriteList(response.data["favourite_users"])
            setChannelList(response.data["channelList"])
            setIsLoading(false)
        } catch (e) {
            console.log(e)
        }
    }

    const handleClickSendMessage = useCallback((user) => homeSocket({'command': "messages_read", 'to': user}), [])
    useEffect(() => {
        console.log(homeResponse)
        if (homeResponse && homeResponse.notification) {
            const updatedList = [...userList]
            const targetItem = updatedList.find(item => item.user2.username === homeResponse.user);
            if (targetItem) {
                targetItem.unread = homeResponse.count;
                const updatedItem = {
                    ...targetItem,
                    "unread": homeResponse.count
                }

                const index = updatedList.indexOf(targetItem);
                updatedList[index] = updatedItem;
                setUserList(updatedList);
            }
            console.log(targetItem, updatedList)
        }
    }, [homeResponse]);
    useEffect(() => {
        getChatRoom()
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
                                    return (<li style={{cursor: "pointer"}} onClick={() => {
                                            socketClose(setActiveChat);
                                            connectChatSocket("users", user2.username, user2);
                                            setActiveChat(user2.username);
                                            handleClickSendMessage(user2.username);
                                            const updatedList = [...userList];
                                            updatedList[key].unread = 0;
                                            setUserList(updatedList)
                                        }}
                                                className={`users-chatlist chatlist2 ${activeChat === user2.username ? "active" : ""}`}
                                                id={user2.username} key={chats.id} data-name="usersList">
                                            <a className="unread-msg-user">
                                                <div className="d-flex align-items-center">
                                                    <div
                                                        className="chat-user-img online align-self-center me-2 ms-0">
                                                        {user2.profile["avatar"] ? <><img
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
                                return <li onClick={() => {
                                    connectChatSocket("group", channelList[key]["id"])

                                }} key={channel.id} data-name="channel" style={{cursor: "pointer"}}>
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
                                                    className="badge badge-soft-dark rounded p-1"
                                                    id={`unread-${channel.id}`}></span></div>
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
            <div
                className="modal fade"
                id="addgroup-exampleModal"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="addgroup-exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content modal-header-colored shadow-lg border-0">
                        <div className="modal-header">
                            <h5
                                className="modal-title text-white font-size-16"
                                id="addgroup-exampleModalLabel"
                            >
                                Create New Group
                            </h5>
                            <button
                                type="button"
                                className="btn-close btn-close-white"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body p-4">
                            <form>
                                <div className="mb-4">
                                    <label htmlFor="addgroupname-input" className="form-label">
                                        Group Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="addgroupname-input"
                                        placeholder="Enter Group Name"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label">Group Members</label>
                                    <div className="mb-3">
                                        <button
                                            className="btn btn-light btn-sm"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#groupmembercollapse"
                                            aria-expanded="false"
                                            aria-controls="groupmembercollapse"
                                        >
                                            Select Members
                                        </button>
                                    </div>
                                    <div className="collapse" id="groupmembercollapse">
                                        <div className="card border">
                                            <div className="card-header">
                                                <h5 className="font-size-15 mb-0">Contacts</h5>
                                            </div>
                                            <div className="card-body p-2">
                                                <div data-simplebar="" style={{maxHeight: 150}}>
                                                    <div>
                                                        <div className="contact-list-title">A</div>
                                                        <ul className="list-unstyled contact-list">
                                                            <li>
                                                                <div className="form-check">
                                                                    <input
                                                                        type="checkbox"
                                                                        className="form-check-input"
                                                                        id="memberCheck1"
                                                                        defaultChecked=""
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="memberCheck1"
                                                                    >
                                                                        Albert Rodarte
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="form-check">
                                                                    <input
                                                                        type="checkbox"
                                                                        className="form-check-input"
                                                                        id="memberCheck2"
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="memberCheck2"
                                                                    >
                                                                        Allison Etter
                                                                    </label>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <div className="contact-list-title">C</div>
                                                        <ul className="list-unstyled contact-list">
                                                            <li>
                                                                <div className="form-check">
                                                                    <input
                                                                        type="checkbox"
                                                                        className="form-check-input"
                                                                        id="memberCheck3"
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="memberCheck3"
                                                                    >
                                                                        Craig Smiley
                                                                    </label>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <div className="contact-list-title">D</div>
                                                        <ul className="list-unstyled contact-list">
                                                            <li>
                                                                <div className="form-check">
                                                                    <input
                                                                        type="checkbox"
                                                                        className="form-check-input"
                                                                        id="memberCheck4"
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="memberCheck4"
                                                                    >
                                                                        Daniel Clay
                                                                    </label>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <div className="contact-list-title">I</div>
                                                        <ul className="list-unstyled contact-list">
                                                            <li>
                                                                <div className="form-check">
                                                                    <input
                                                                        type="checkbox"
                                                                        className="form-check-input"
                                                                        id="memberCheck5"
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="memberCheck5"
                                                                    >
                                                                        Iris Wells
                                                                    </label>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <div className="contact-list-title">J</div>
                                                        <ul className="list-unstyled contact-list">
                                                            <li>
                                                                <div className="form-check">
                                                                    <input
                                                                        type="checkbox"
                                                                        className="form-check-input"
                                                                        id="memberCheck6"
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="memberCheck6"
                                                                    >
                                                                        Juan Flakes
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="form-check">
                                                                    <input
                                                                        type="checkbox"
                                                                        className="form-check-input"
                                                                        id="memberCheck7"
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="memberCheck7"
                                                                    >
                                                                        John Hall
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="form-check">
                                                                    <input
                                                                        type="checkbox"
                                                                        className="form-check-input"
                                                                        id="memberCheck8"
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="memberCheck8"
                                                                    >
                                                                        Joy Southern
                                                                    </label>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <div className="contact-list-title">M</div>
                                                        <ul className="list-unstyled contact-list">
                                                            <li>
                                                                <div className="form-check">
                                                                    <input
                                                                        type="checkbox"
                                                                        className="form-check-input"
                                                                        id="memberCheck9"
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="memberCheck9"
                                                                    >
                                                                        Michael Hinton
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="form-check">
                                                                    <input
                                                                        type="checkbox"
                                                                        className="form-check-input"
                                                                        id="memberCheck10"
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="memberCheck10"
                                                                    >
                                                                        Mary Farmer
                                                                    </label>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <div className="contact-list-title">P</div>
                                                        <ul className="list-unstyled contact-list">
                                                            <li>
                                                                <div className="form-check">
                                                                    <input
                                                                        type="checkbox"
                                                                        className="form-check-input"
                                                                        id="memberCheck11"
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="memberCheck11"
                                                                    >
                                                                        Phillis Griffin
                                                                    </label>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <div className="contact-list-title">R</div>
                                                        <ul className="list-unstyled contact-list">
                                                            <li>
                                                                <div className="form-check">
                                                                    <input
                                                                        type="checkbox"
                                                                        className="form-check-input"
                                                                        id="memberCheck12"
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="memberCheck12"
                                                                    >
                                                                        Rocky Jackson
                                                                    </label>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <div className="contact-list-title">S</div>
                                                        <ul className="list-unstyled contact-list">
                                                            <li>
                                                                <div className="form-check">
                                                                    <input
                                                                        type="checkbox"
                                                                        className="form-check-input"
                                                                        id="memberCheck13"
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="memberCheck13"
                                                                    >
                                                                        Simon Velez
                                                                    </label>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="addgroupdescription-input"
                                        className="form-label"
                                    >
                                        Description
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="addgroupdescription-input"
                                        rows={3}
                                        placeholder="Enter Description"
                                        defaultValue={""}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-link"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="button" className="btn btn-primary">
                                Create Groups
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* End add group Modal */}
        </div>
        {/* End chats tab-pane */}
    </>

}