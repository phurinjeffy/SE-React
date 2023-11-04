import React, { useState } from "react";
import "./sidebar.css";

import profileIcon from "../../assets/profile.svg";
import repositoryIcon from "../../assets/repository.svg";
import learnIcon from "../../assets/learn.svg";

const Sidebar = () => {
  return (
    <div className="Sidebar">
        <div className="Section">
            <img src={profileIcon} alt="profile"/>
        </div>
        <div className="Section">
            <img src={repositoryIcon} alt="repository"/>
        </div>
        <div className="Section">
            <img src={learnIcon} alt="learn"/>
        </div>
    </div>
  )
}

export default Sidebar