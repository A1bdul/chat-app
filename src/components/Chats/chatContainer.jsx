import UserChat from "./userChat"
import GroupChat from "./groupChat"
import {useState} from "react"

export default function ChatContainer({
                                          currentChat,
                                          socketClose,
                                          user2,
                                          messages,
                                          socketSend,
                                          homeResponse,
                                          messagesScrollRef,
                                          messagesEndRef
                                      }) {
    const [messageText, setMessageText] = useState('')
    return <div
        className={`user-chat w-100 ${currentChat ? "user-chat-show" : ""}`}
        style={{
            backgroundImage:
                'url("http://localhost:8080/assets/images/bg-pattern/pattern-05.png")'
        }}
    >
        <div className="user-chat-overlay"></div>
        <div className="chat-content d-lg-flex">
            {/* start chat conversation section */}
            <div className="w-100  position-relative ">
                <div
                    id="empty-conversation"
                    className="position-relative"
                    style={{display: "block"}}
                >
                    {/* conversation user */}
                    {currentChat === "users" &&
                        <UserChat user2={user2} socketClose={socketClose} messagesScrollRef={messagesScrollRef}
                                  messagesEndRef={messagesEndRef}
                                  messages={messages}/>}
                    {currentChat === "group" && <GroupChat />}
                    {/* conversation group */}
                </div>
                {/* start chat input section */}
                <div style={{marginTop: 10}}
                     className={`position-relative ${currentChat === "group" || currentChat === "users" ? "show" : "d-none"}`}
                     id="chat-input-section"
                >
                    <div className="chat-input-section p-3 p-lg-4">
                        <form id="chatinput-form" encType="multipart/form-data" onSubmit={(e) => {
                            e.preventDefault()
                            const send_message = {
                                images: [],
                                files: [],
                                audio: [],
                                msg: messageText,
                            }
                            socketSend("chat", send_message)
                            setMessageText('')
                        }}>
                            <div className="row g-0 align-items-center">
                                <div className="file_Upload"/>
                                <div className="col-auto">
                                    <div className="chat-input-links me-md-2">
                                        <div
                                            className="links-list-item"
                                            data-bs-toggle="tooltip"
                                            data-bs-trigger="hover"
                                            data-bs-placement="top"
                                            title=""
                                            data-bs-original-title="More"
                                        >
                                            <button
                                                type="button"
                                                className="btn btn-link text-decoration-none btn-lg waves-effect"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#chatinputmorecollapse"
                                                aria-expanded="false"
                                                aria-controls="chatinputmorecollapse"
                                            >
                                                <i className="bx bx-dots-horizontal-rounded align-middle"/>
                                            </button>
                                        </div>
                                        <div
                                            className="links-list-item"
                                            data-bs-toggle="tooltip"
                                            data-bs-trigger="hover"
                                            data-bs-placement="top"
                                            title=""
                                            data-bs-original-title="Emoji"
                                        >
                                            <button
                                                type="button"
                                                className="btn btn-link text-decoration-none btn-lg waves-effect emoji-btn"
                                                id="emoji-btn"
                                            >
                                                <i className="bx bx-smile align-middle"/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="position-relative">
                                        <div className="chat-input-feedback">
                                            Please Enter a Message
                                        </div>
                                        <input
                                            autoComplete="off"
                                            type="text"
                                            className="form-control form-control-lg chat-input"
                                            autoFocus
                                            value={messageText}
                                            onChange={(e) => {
                                                setMessageText(e.target.value)
                                                socketSend("typing")

                                            }}
                                            id="chat-input"
                                            placeholder="Type your message..."
                                        />
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="chat-input-links ms-2 gap-md-1">
                                        <div
                                            className="links-list-item d-none d-sm-block"
                                            data-bs-container=".chat-input-links"
                                            data-bs-toggle="popover"
                                            data-bs-trigger="focus"
                                            data-bs-html="true"
                                            data-bs-placement="top"
                                            data-bs-content="<div class='loader-line'><div class='line'></div><div class='line'></div><div class='line'></div><div class='line'></div><div class='line'></div></div>"
                                            data-bs-original-title=""
                                            title=""
                                        >
                                            <button
                                                type="button"
                                                className="btn btn-link text-decoration-none btn-lg waves-effect"
                                                // onclick="audioPermission()"
                                            >
                                                <i className="bx bx-microphone align-middle"/>
                                            </button>
                                        </div>
                                        <div className="links-list-item">
                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-lg chat-send waves-effect waves-light"
                                                data-bs-toggle="collapse"
                                                data-bs-target=".chat-input-collapse1.show"
                                            >
                                                <i className="bx bxs-send align-middle" id="submit-btn"/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div
                            className="chat-input-collapse chat-input-collapse1 collapse"
                            id="chatinputmorecollapse"
                        >
                            <div className="card mb-0">
                                <div className="card-body py-3">
                                    {/* Swiper */}
                                    <div className="swiper chatinput-links">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <div className="text-center px-2 position-relative">
                                                    <div>
                                                        <input
                                                            id="attachedfile-input"
                                                            type="file"
                                                            className="d-none"
                                                            accept=".zip,.rar,.7zip,.pdf"
                                                            multiple=""
                                                        />
                                                        <label
                                                            htmlFor="attachedfile-input"
                                                            className="avatar-sm mx-auto stretched-link"
                                                        >
                              <span className="avatar-title font-size-18 bg-soft-primary text-primary rounded-circle">
                                <i className="bx bx-paperclip"/>
                              </span>
                                                        </label>
                                                    </div>
                                                    <h5 className="font-size-11 text-uppercase mt-3 mb-0 text-body text-truncate">
                                                        Attached
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="text-center px-2">
                                                    <div className="avatar-sm mx-auto">
                                                        <div
                                                            className="avatar-title font-size-18 bg-soft-primary text-primary rounded-circle">
                                                            <i className="bx bxs-camera"/>
                                                        </div>
                                                    </div>
                                                    <h5 className="font-size-11 text-uppercase text-truncate mt-3 mb-0">
                                                        <a
                                                            href="#"
                                                            className="text-body stretched-link"
                                                            // onclick="cameraPermission()"
                                                        >
                                                            Camera
                                                        </a>
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="text-center px-2 position-relative">
                                                    <div>
                                                        <input
                                                            id="galleryfile-input"
                                                            type="file"
                                                            className="d-none"
                                                            accept="image/png, image/gif, image/jpeg"
                                                            multiple=""
                                                        />
                                                        <label
                                                            htmlFor="galleryfile-input"
                                                            className="avatar-sm mx-auto stretched-link"
                                                        >
                              <span className="avatar-title font-size-18 bg-soft-primary text-primary rounded-circle">
                                <i className="bx bx-images"/>
                              </span>
                                                        </label>
                                                    </div>
                                                    <h5 className="font-size-11 text-uppercase text-truncate mt-3 mb-0">
                                                        Gallery
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="text-center px-2">
                                                    <div>
                                                        <input
                                                            id="audiofile-input"
                                                            type="file"
                                                            className="d-none"
                                                            accept="audio/*"
                                                            multiple=""
                                                        />
                                                        <label
                                                            htmlFor="audiofile-input"
                                                            className="avatar-sm mx-auto stretched-link"
                                                        >
                              <span className="avatar-title font-size-18 bg-soft-primary text-primary rounded-circle">
                                <i className="bx bx-headphone"/>
                              </span>
                                                        </label>
                                                    </div>
                                                    <h5 className="font-size-11 text-uppercase text-truncate mt-3 mb-0">
                                                        Audio
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="text-center px-2">
                                                    <div className="avatar-sm mx-auto">
                                                        <div
                                                            className="avatar-title font-size-18 bg-soft-primary text-primary rounded-circle">
                                                            <i className="bx bx-current-location"/>
                                                        </div>
                                                    </div>
                                                    <h5 className="font-size-11 text-uppercase text-truncate mt-3 mb-0">
                                                        <a
                                                            href="#"
                                                            className="text-body stretched-link"
                                                            // onclick="getLocation()"
                                                        >
                                                            Location
                                                        </a>
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="text-center px-2">
                                                    <div className="avatar-sm mx-auto">
                                                        <div
                                                            className="avatar-title font-size-18 bg-soft-primary text-primary rounded-circle">
                                                            <i className="bx bxs-user-circle"/>
                                                        </div>
                                                    </div>
                                                    <h5 className="font-size-11 text-uppercase text-truncate mt-3 mb-0">
                                                        <a
                                                            href="#"
                                                            className="text-body stretched-link"
                                                            data-bs-toggle="modal"
                                                            data-bs-target=".contactModal"
                                                        >
                                                            Contacts
                                                        </a>
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="swiper-slide d-block d-sm-none">
                                                <div className="text-center px-2">
                                                    <div className="avatar-sm mx-auto">
                                                        <div
                                                            className="avatar-title font-size-18 bg-soft-primary text-primary rounded-circle">
                                                            <i className="bx bx-microphone"/>
                                                        </div>
                                                    </div>
                                                    <h5 className="font-size-11 text-uppercase text-truncate mt-3 mb-0">
                                                        <a href="#" className="text-body stretched-link">
                                                            Audio
                                                        </a>
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="replyCard" id="reply">
                        <div className="card mb-0">
                            <div className="card-body py-3">
                                <div className="replymessage-block mb-0 d-flex align-items-start">
                                    <div className="flex-grow-1">
                                        <h5 className="conversation-name" id="reply_user"/>
                                        <p className="mb-0" id="reply_text"/>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <button
                                            type="button"
                                            id="close_toggle"
                                            className="btn btn-sm btn-link mt-n2 me-n3 font-size-18"
                                        >
                                            <i className="bx bx-x align-middle"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end chat input section */}
            </div>
            {/* end chat conversation section */}
        </div>
        {/* end user chat content */}
    </div>

}
