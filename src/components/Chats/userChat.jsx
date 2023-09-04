import UserProfilePic from "../../assets/images/users/user-dummy-img.jpg"

export default function UserChat({user2, messages}){
    return  <div
      id="channel-chat"
      className="remove position-relative"
      style={{ display: "block", top:0, bottom:0 }}
    >
      <div className="p-3 p-lg-4 user-chat-topbar">
        <div className="row align-items-center">
          <div className="col-sm-4 col-8">
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0 d-lg-none me-3">
                <a
                  href="javascript: void(0);"
                  className="user-chat-remove font-size-18 p-1"
                >
                  <i className="bx bx-chevron-left align-middle" />
                </a>
              </div>
              <div className="flex-grow-1 overflow-hidden">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0 chat-user-img online user-own-img align-self-center me-3">
                    <img
                      className="rounded-circle avatar-sm"
                      alt=""
                      src={UserProfilePic}
                    />
                  </div>
                  <div className="flex-grow-1 overflow-hidden">
                    <h6 className="text-truncate mb-0 font-size-18">
                      <a href="#" className="user-profile-show text-reset">
                        {user2.first_name} {user2.last_name}
                      </a>
                    </h6>
                    <p className="text-truncate text-muted mb-0">
                      <small id="activity" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-8 col-4">
            <ul className="list-inline user-chat-nav text-end mb-0">
              <li className="list-inline-item">
                <div className="dropdown">
                  <button
                    className="btn nav-btn dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="bx bx-search" />
                  </button>
                  <div className="dropdown-menu p-0 dropdown-menu-end dropdown-menu-lg">
                    <div className="search-box p-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search.."
                        id="searchChatMessage"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-inline-item d-none d-lg-inline-block me-2 ms-0">
                <button
                  type="button"
                  className="btn nav-btn"
                  data-bs-toggle="modal"
                  data-bs-target=".audiocallModal"
                >
                  <i className="bx bxs-phone-call" />
                </button>
              </li>
              <li className="list-inline-item d-none d-lg-inline-block me-2 ms-0">
                <button
                  type="button"
                  className="btn nav-btn"
                  data-bs-toggle="modal"
                  data-bs-target=".videocallModal"
                >
                  <i className="bx bx-video" />
                </button>
              </li>
              <li className="list-inline-item d-none d-lg-inline-block me-2 ms-0">
                <button type="button" className="btn nav-btn user-profile-show">
                  <i className="bx bxs-info-circle" />
                </button>
              </li>
              <li className="list-inline-item">
                <div className="dropdown">
                  <button
                    className="btn nav-btn dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="bx bx-dots-vertical-rounded" />
                  </button>
                  <div className="dropdown-menu dropdown-menu-end">
                    <a
                      className="dropdown-item d-flex justify-content-between align-items-center d-lg-none user-profile-show"
                      href="#"
                    >
                      View Profile <i className="bx bx-user text-muted" />
                    </a>
                    <a
                      className="dropdown-item d-flex justify-content-between align-items-center d-lg-none"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target=".audiocallModal"
                    >
                      Audio <i className="bx bxs-phone-call text-muted" />
                    </a>
                    <a
                      className="dropdown-item d-flex justify-content-between align-items-center d-lg-none"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target=".videocallModal"
                    >
                      Video <i className="bx bx-video text-muted" />
                    </a>
                    <a
                      className="dropdown-item d-flex justify-content-between align-items-center"
                      href="#"
                    >
                      Archive <i className="bx bx-archive text-muted" />
                    </a>
                    <a
                      className="dropdown-item d-flex justify-content-between align-items-center"
                      href="#"
                    >
                      Muted <i className="bx bx-microphone-off text-muted" />
                    </a>
                    <a
                      className="dropdown-item d-flex justify-content-between align-items-center"
                      href="#"
                    >
                      Delete <i className="bx bx-trash text-muted" />
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="alert alert-warning alert-dismissible topbar-bookmark fade show p-1 px-3 px-lg-4 pe-lg-5 pe-5"
          role="alert"
        >
          <div className="d-flex align-items-start bookmark-tabs">
            <div className="tab-list-link">
              <a
                href="#"
                className="tab-links"
                data-bs-toggle="modal"
                data-bs-target=".pinnedtabModal"
              >
                <i className="ri-pushpin-fill align-middle me-1" /> 10 Pinned
              </a>
            </div>
            <div>
              <a
                href="#"
                className="tab-links border-0 px-3"
                data-bs-toggle="tooltip"
                data-bs-trigger="hover"
                data-bs-placement="bottom"
                title="Add Bookmark"
              >
                <i className="ri-add-fill align-middle" />
              </a>
            </div>
          </div>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          />
        </div>
      </div>
      {/* end chat user head */}
      {/* start chat conversation */}
      <div
        className="chat-conversation p-3 p-lg-4 "
        id="chat-conversation"
        data-simplebar="init"
      >
        <div className="simplebar-wrapper" style={{ margin: "-24px" }}>
          <div className="simplebar-height-auto-observer-wrapper">
            <div className="simplebar-height-auto-observer" />
          </div>
          <div className="simplebar-mask">
            <div className="simplebar-offset" style={{ right: 0, bottom: 0 }}>
              <div
                className="simplebar-content-wrapper"
                style={{ height: "100%"}}
              >
                <div className="simplebar-content" style={{ padding: 24 }}>
                  <ul
                    className="list-unstyled chat-conversation-list"
                    id="users-conversation"
                  >
                   {messages.map((message) => (
                   <li key={message.id} className={`chat-list ${user2.username==message.sender["username"] ? "left" :"right"}`} id=" chat-1">
                    <div className="conversation-list">
                      <div className="user-chat-content">
                        <div className="ctext-wrap">
                          <div className="ctext-wrap-content">
                            <p className="mb-0  ctext-content mt-1 p-1" id={1}>
                              {message.msg}
                            </p>
                          </div>
                          <div className="dropdown align-self-start message-box-drop">
                            {" "}
                            <a
                              className="dropdown-toggle"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="ri-more-2-fill" />{" "}
                            </a> <div className="dropdown-menu">
                              <a
                                className="dropdown-item d-flex align-items-center justify-content-between reply-message"
                                href="#"
                                id="reply-message-1"
                                data-bs-toggle="collapse"
                                data-bs-target=".replyCollapse"
                              >
                                Reply 
                                <i className="bx bx-share ms-2 text-muted" />
                              </a>
                              <a
                                className="dropdown-item d-flex align-items-center justify-content-between"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target=".forwardModal"
                              >
                                Forward{" "}
                                <i className="bx bx-share-alt ms-2 text-muted" />
                              </a>{" "}
                              <a
                                className="dropdown-item d-flex align-items-center justify-content-between copy-message"
                                href="#"
                                id="copy-message-1"
                              >
                                Copy{" "}
                                <i className="bx bx-copy text-muted ms-2" />
                              </a>{" "}
                              <a
                                className="dropdown-item d-flex align-items-center justify-content-between"
                                href="#"
                              >
                                Bookmark{" "}
                                <i className="bx bx-bookmarks text-muted ms-2" />
                              </a>{" "}
                              <a
                                className="dropdown-item d-flex align-items-center justify-content-between"
                                href="#"
                              >
                                Mark as Unread{" "}
                                <i className="bx bx-message-error text-muted ms-2" />
                              </a>{" "}
                              <a
                                className="dropdown-item d-flex align-items-center justify-content-between delete-item"
                                href="#"
                              >
                                Delete{" "}
                                <i className="bx bx-trash text-muted ms-2" />
                              </a>{" "}
                            </div>{" "}
                          </div>
                        </div>
                        <div className="conversation-name">
                          <small className="text-muted time">11:24 </small>{" "}
                          <span className="text-success check-message-icon">
                            <i className="bx bx-check-double" />
                          </span>
                        </div>
                      </div>{" "}
                    </div>{" "}
                  </li>))}
                   </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className="simplebar-placeholder"
            style={{ width: "auto", height: 905 }}
          />
        </div>
        <div
          className="simplebar-track simplebar-horizontal"
          style={{ visibility: "hidden" }}
        >
          <div
            className="simplebar-scrollbar"
            style={{ width: 0, display: "none" }}
          />
        </div>
        <div
          className="simplebar-track simplebar-vertical"
          style={{ visibility: "visible" }}
        >
          <div
            className="simplebar-scrollbar"
            style={{
              height: 304,
              display: "block",
              transform: "translate3d(0px, 221px, 0px)"
            }}
          />
        </div>
      </div>
      <div
        className="alert alert-warning alert-dismissible copyclipboard-alert px-4 fade show "
        style={{ display: "none" }}
        id="copyClipBoard"
        role="alert"
      >
        message copied
      </div>
      {/* end chat conversation end */}
    </div>
  

  
  
  
}