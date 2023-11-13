import React from 'react'

import profileIcon from "../../assets/profile.svg";
import repositoryIcon from "../../assets/repository.svg";
import learnIcon from "../../assets/learn.svg";

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
        title: "Learn",
        icon: <img src={learnIcon} alt="learnIcon"/>,
        link: "/learn"
    }
]
