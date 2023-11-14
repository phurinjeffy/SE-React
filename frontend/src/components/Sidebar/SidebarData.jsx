import React from 'react'

import profileIcon from "../../assets/profile.svg";
import repositoryIcon from "../../assets/repository.svg";
import learnIcon from "../../assets/learn.svg";
import timetableIcon from "../../assets/timetable.svg";
import chatIcon from "../../assets/chat.svg";

export const SidebarData = [
    {
        title: "Profile",
        icon: <img src={profileIcon} alt="profileIcon" />,
        link: "/profile"
    },
    {
        title: "Notes",
        icon: <img src={repositoryIcon} alt="repositoryIcon"/>,
        link: "/notes"
    },
    {
        title: "Timetable",
        icon: <img src={timetableIcon} alt="timetableIcon"/>,
        link: "/timetable"
    },
    {
        title: "Learn",
        icon: <img src={learnIcon} alt="learnIcon"/>,
        link: "/learn"
    },
    {
        title: "Chat",
        icon: <img src={chatIcon} alt="chatIcon"/>,
        link: "/ws"
    },
]
