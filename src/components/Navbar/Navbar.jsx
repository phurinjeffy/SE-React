import React, { useState } from "react";
import "./navbar.css";

import notificationIcon from "../../assets/notification.svg";

const Navbar = () => {
  const [isChanged, setIsChanged] = useState(false);

  const handleButtonClick = () => {
    setIsChanged(!isChanged);
  };
 
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className={`navbar-links_menu ${isChanged ? "change" : ""}`} onClick={handleButtonClick}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>

        <div className="navbar-links_logo">
          <img src="https://se.kmitl.ac.th/assets/se.png" alt="logo" />
        </div>

        {/* <div className="navbar-links_title">
          Software Engineering
        </div> */}
      </div>

      <div className="navbar-profile">
        <div className="navbar-profile_search">
          <input className="navbar-profile_searchbar" placeholder="Search"></input>
        </div>

        <div className="navbar-profile_notification">
          <button className="navbar-profile_notification_icon">
            <img src={notificationIcon} alt="notificationIcon"/>
          </button>
        </div>

        <div className="navbar-profile_user">
          <a href="#">
            <img src="https://wallpapers-clan.com/wp-content/uploads/2023/05/cool-pfp-02.jpg" alt="pfp" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
