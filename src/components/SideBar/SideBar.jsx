import ProfileSideBar from "./ProfileSideBar.jsx";
import ChatSideBar from "./ChatSideBar.jsx";
import SettingsSideBar from "./SettingsSideBar.jsx";
import {useState} from "react";
import axios from "axios";

const SideBar = ({tab, homeSocket, homeResponse, tabChange, userInfo, socketClose, setUserInfo, connectChatSocket}) => {

    return <div className="chat-leftsidebar">
        <div className="tab-content">
            {tab === 'Settings' && <SettingsSideBar userInfo={userInfo} setUserInfo={setUserInfo}/>}
            {tab === 'Chat' &&
                <ChatSideBar homeResponse={homeResponse} socketClose={socketClose} homeSocket={homeSocket}
                             userInfo={userInfo}
                             connectChatSocket={connectChatSocket}/>}
            {tab === 'Profile' && <ProfileSideBar userInfo={userInfo} tabChange={tabChange}/>}
        </div>
    </div>
}

export default SideBar
