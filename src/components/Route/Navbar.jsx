import {useState} from 'react'
import SideBar from "../SideBar/SideBar.jsx";
import userImage from '../../assets/images/users/user-dummy-img.jpg'

function Navbar({userInfo, homeSocket, homeResponse, setUserInfo, socketClose, connectChatSocket}) {
    const [tab, tabChange] = useState('Chat')
    const HandleTabChange = (tabName) => {
        tabChange(tabName)
    }


    return <>
        {/* Start left sidebar-menu */}
        {/*<div className="side-menu flex-lg-column">*/}
        {/*    /!* LOGO *!/*/}
        {/*    <div className="navbar-brand-box">*/}
        {/*        <a className="logo logo-dark">*/}
        {/*<span className="logo-sm">*/}
        {/*  <svg*/}
        {/*      xmlns="http://www.w3.org/2000/svg"*/}
        {/*      width={30}*/}
        {/*      height={30}*/}
        {/*      viewBox="0 0 24 24"*/}
        {/*  >*/}
        {/*    <path*/}
        {/*        d="M8.5,18l3.5,4l3.5-4H19c1.103,0,2-0.897,2-2V4c0-1.103-0.897-2-2-2H5C3.897,2,3,2.897,3,4v12c0,1.103,0.897,2,2,2H8.5z M7,7h10v2H7V7z M7,11h7v2H7V11z"/>*/}
        {/*  </svg>*/}
        {/*</span>*/}
        {/*        </a>*/}
        {/*        <a className="logo logo-light">*/}
        {/*<span className="logo-sm">*/}
        {/*  <svg*/}
        {/*      xmlns="http://www.w3.org/2000/svg"*/}
        {/*      width={30}*/}
        {/*      height={30}*/}
        {/*      viewBox="0 0 24 24"*/}
        {/*  >*/}
        {/*    <path*/}
        {/*        d="M8.5,18l3.5,4l3.5-4H19c1.103,0,2-0.897,2-2V4c0-1.103-0.897-2-2-2H5C3.897,2,3,2.897,3,4v12c0,1.103,0.897,2,2,2H8.5z M7,7h10v2H7V7z M7,11h7v2H7V11z"/>*/}
        {/*  </svg>*/}
        {/*</span>*/}
        {/*        </a>*/}
        {/*    </div>*/}
        {/*    /!* end navbar-brand-box *!/*/}
        {/*    /!* Start side-menu nav *!/*/}
        {/*    <div className="flex-lg-column my-0 sidemenu-navigation">*/}
        {/*        <ul className="nav nav-pills side-menu-nav" role="tablist">*/}
        {/*            <li*/}
        {/*                className="nav-item d-none d-lg-block"*/}
        {/*                data-bs-toggle="tooltip"*/}
        {/*                data-bs-placement="right"*/}
        {/*                data-bs-trigger="hover"*/}
        {/*                data-bs-container=".sidemenu-navigation"*/}
        {/*                title="Profile"*/}
        {/*            >*/}
        {/*                <a*/}
        {/*                    className={`nav-link ${tab === 'Profile' ? 'active' : ''}`}*/}
        {/*                    onClick={*/}
        {/*                        () => {*/}
        {/*                            HandleTabChange("Profile")*/}
        {/*                        }*/}
        {/*                    }*/}
        {/*                    id="pills-user-tab"*/}
        {/*                    data-bs-toggle="pill"*/}
        {/*                    role="tab"*/}
        {/*                >*/}
        {/*                    <i className="bx bx-user-circle"/>*/}
        {/*                </a>*/}
        {/*            </li>*/}
        {/*            <li*/}
        {/*                className="nav-item"*/}
        {/*                data-bs-toggle="tooltip"*/}
        {/*                data-bs-placement="right"*/}
        {/*                data-bs-trigger="hover"*/}
        {/*                data-bs-container=".sidemenu-navigation"*/}
        {/*                title="Chats"*/}
        {/*            >*/}
        {/*                <a*/}
        {/*                    className={`nav-link ${tab === 'Chat' ? 'active' : ''}`}*/}
        {/*                    onClick={() => {*/}
        {/*                        HandleTabChange("Chat")*/}
        {/*                    }}*/}
        {/*                    id="pills-chat-tab"*/}
        {/*                    data-bs-toggle="pill"*/}
        {/*                    role="tab"*/}
        {/*                >*/}
        {/*                    <i className="bx bx-conversation"/>*/}
        {/*                </a>*/}
        {/*            </li>*/}
        {/*            <li*/}
        {/*                className="nav-item"*/}
        {/*                data-bs-toggle="tooltip"*/}
        {/*                data-bs-placement="right"*/}
        {/*                data-bs-trigger="hover"*/}
        {/*                data-bs-container=".sidemenu-navigation"*/}
        {/*                title="Contacts"*/}
        {/*            >*/}
        {/*                <a*/}
        {/*                    className={`nav-link ${tab === 'Contacts' ? 'active' : ''}`}*/}
        {/*                    onClick={() => HandleTabChange("Contacts")}*/}
        {/*                    id="pills-contacts-tab"*/}
        {/*                    data-bs-toggle="pill"*/}
        {/*                    role="tab"*/}
        {/*                >*/}
        {/*                    <i className="bx bxs-user-detail"/>*/}
        {/*                </a>*/}
        {/*            </li>*/}
        {/*            <li*/}
        {/*                className="nav-item"*/}
        {/*                data-bs-toggle="tooltip"*/}
        {/*                data-bs-placement="right"*/}
        {/*                data-bs-trigger="hover"*/}
        {/*                data-bs-container=".sidemenu-navigation"*/}
        {/*                title="Calls"*/}
        {/*            >*/}
        {/*                <a*/}
        {/*                    className={`nav-link ${tab === 'Calls' ? 'active' : ''}`}*/}
        {/*                    onClick={() => HandleTabChange("Calls")}*/}
        {/*                    id="pills-calls-tab"*/}
        {/*                    data-bs-toggle="pill"*/}
        {/*                    role="tab"*/}
        {/*                >*/}
        {/*                    <i className="bx bx-phone-call"/>*/}
        {/*                </a>*/}
        {/*            </li>*/}
        {/*            <li*/}
        {/*                className="nav-item"*/}
        {/*                data-bs-toggle="tooltip"*/}
        {/*                data-bs-placement="right"*/}
        {/*                data-bs-trigger="hover"*/}
        {/*                data-bs-container=".sidemenu-navigation"*/}
        {/*                title="Bookmark"*/}
        {/*            >*/}
        {/*                <a*/}
        {/*                    className={`nav-link ${tab === 'Bookmark' ? 'active' : ''}`}*/}
        {/*                    onClick={() => HandleTabChange("Bookmark")}*/}
        {/*                    id="pills-bookmark-tab"*/}
        {/*                    data-bs-toggle="pill"*/}
        {/*                    role="tab"*/}
        {/*                >*/}
        {/*                    <i className="bx bx-bookmarks"/>*/}
        {/*                </a>*/}
        {/*            </li>*/}
        {/*            <li*/}
        {/*                className="nav-item d-none d-lg-block"*/}
        {/*                data-bs-toggle="tooltip"*/}
        {/*                data-bs-placement="right"*/}
        {/*                data-bs-container=".sidemenu-navigation"*/}
        {/*                data-bs-trigger="hover"*/}
        {/*                title="Settings"*/}
        {/*            >*/}
        {/*                <a*/}
        {/*                    className={`nav-link ${tab === 'Settings' ? 'active' : ''}`}*/}
        {/*                    onClick={() => HandleTabChange("Settings")}*/}
        {/*                    id="pills-setting-tab"*/}
        {/*                    data-bs-toggle="pill"*/}
        {/*                    role="tab"*/}
        {/*                >*/}
        {/*                    <i className="bx bx-cog"/>*/}
        {/*                </a>*/}
        {/*            </li>*/}
        {/*            <li className="nav-item mt-auto">*/}
        {/*                <a*/}
        {/*                    className="nav-link light-dark"*/}
        {/*                    href="#"*/}
        {/*                    data-bs-toggle="tooltip"*/}
        {/*                    data-bs-trigger="hover"*/}
        {/*                    data-bs-placement="right"*/}
        {/*                    data-bs-container=".sidemenu-navigation"*/}
        {/*                    data-bs-html="true"*/}
        {/*                    title="<span class='light-mode'>Light</span> <span class='dark-mode'>Dark</span> Mode"*/}
        {/*                >*/}
        {/*                    <i className="bx bx-moon"/>*/}
        {/*                </a>*/}
        {/*            </li>*/}
        {/*            <li className="nav-item dropdown profile-user-dropdown">*/}
        {/*                <a*/}
        {/*                    className="nav-link dropdown-toggle"*/}
        {/*                    role="button"*/}
        {/*                    data-bs-toggle="dropdown"*/}
        {/*                    aria-haspopup="true"*/}
        {/*                    aria-expanded="false"*/}
        {/*                >*/}
        {/*                    <img*/}
        {/*                        src={userImage}*/}
        {/*                        alt=""*/}
        {/*                        className="profile-user rounded-circle"*/}
        {/*                    />*/}
        {/*                </a>*/}
        {/*                <div className="dropdown-menu">*/}
        {/*                    <a*/}
        {/*                        className={`dropdown-item d-flex align-items-center justify-content-between ${tab === "Profile" ? "active" : ""}`}*/}
        {/*                        id="pills-user-tab"*/}
        {/*                        data-bs-toggle="pill"*/}
        {/*                        role="tab"*/}
        {/*                        onClick={() => HandleTabChange('Profile')}*/}

        {/*                    >*/}
        {/*                        Profile <i className="bx bx-user-circle text-muted ms-1"/>*/}
        {/*                    </a>*/}
        {/*                    <a*/}
        {/*                        className={`dropdown-item d-flex align-items-center justify-content-between ${tab === "Settings" ? "active" : ""}`}*/}
        {/*                        id="pills-setting-tab"*/}
        {/*                        data-bs-toggle="pill"*/}
        {/*                        onClick={() => HandleTabChange('Settings')}*/}
        {/*                    >*/}
        {/*                        Setting <i className="bx bx-cog text-muted ms-1"/>*/}
        {/*                    </a>*/}
        {/*                    <a*/}
        {/*                        className="dropdown-item d-flex align-items-center justify-content-between"*/}
        {/*                        href="auth-changepassword.html"*/}
        {/*                    >*/}
        {/*                        Change Password <i className="bx bx-lock-open text-muted ms-1"/>*/}
        {/*                    </a>*/}
        {/*                    <div className="dropdown-divider"/>*/}
        {/*                    <a*/}
        {/*                        className="dropdown-item d-flex align-items-center justify-content-between"*/}
        {/*                        href="auth-logout.html"*/}
        {/*                    >*/}
        {/*                        Log out <i className="bx bx-log-out-circle text-muted ms-1"/>*/}
        {/*                    </a>*/}
        {/*                </div>*/}
        {/*            </li>*/}
        {/*        </ul>*/}
        {/*    </div>*/}
        {/*    /!* end side-menu nav *!/*/}
        {/*</div>*/}
        <SideBar connectChatSocket={connectChatSocket} homeResponse={homeResponse} homeSocket={homeSocket}
                 socketClose={socketClose} tab={tab} tabChange={HandleTabChange}
                 userInfo={userInfo} setUserInfo={setUserInfo}/>
        {/* end left sidebar-menu */}
    </>

}

export default Navbar
