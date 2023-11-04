import React, { useState } from "react";
import "./profile.css"

import followerIcon from "../../assets/follower.svg";
import githubIcon from "../../assets/github.svg";
import discordIcon from "../../assets/discord.svg";

const Profile = () => {
  return (
    <div className="ProfileSection">
        <div className="User">
            <div className="UserSProfilePic">
                <img src="https://wallpapers-clan.com/wp-content/uploads/2023/05/cool-pfp-02.jpg"/>
            </div>
            <div className="Name">
                Phurin Vanasrivilai
                </div>
            <div className="Email">
                65011463@kmitl.ac.th
            </div>
        </div>
        <div className="Contacts">
            <div className="ContactsRow">
                <a className="ContactsIcon" href="#">
                    <img src={followerIcon} alt="followerIcon"/>
                </a>
                <a className="ContactsText" href="#">
                    <span id="follower">1</span> follower
                </a>
                <div className="Dot" />
                <a className="ContactsText" href="#">
                    <span id="following">3</span> following
                </a>
            </div>
            <div className="ContactsRow">
                <a className="ContactsIcon" href="#">
                    <img src={githubIcon} alt="githubIcon"/>
                </a>
                <a className="ContactsText" href="#">
                    Github
                </a>
            </div>
            <div className="ContactsRow">
                <a className="ContactsIcon" href="#">
                    <img src={discordIcon} alt="discordIcon"/>
                </a>
                <a className="ContactsText" href="#">
                    Discord
                </a>
            </div>
        </div>
    </div>
  )
}

export default Profile