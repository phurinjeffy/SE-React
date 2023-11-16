import React from 'react'

import profileIcon from "../../assets/profile.svg";
import notesIcon from "../../assets/notes.svg";
import learnIcon from "../../assets/learn.svg";
import timetableIcon from "../../assets/timetable.svg";
import chatIcon from "../../assets/chat.svg";
import newsIcon from "../../assets/news.svg";

export const SidebarData = [
    {
        title: "Profile",
        icon: <img src={profileIcon} alt="profileIcon" />,
        link: "/profile"
    },
    {
        title: "Notes",
        icon: <img src={notesIcon} alt="notesIcon"/>,
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
        title: "News",
        icon: <img src={newsIcon} alt="newsIcon"/>,
        link: "/news"
    },
    {
        title: "Chat",
        icon: <img src={chatIcon} alt="chatIcon"/>,
        link: "/ws"
    },
]
