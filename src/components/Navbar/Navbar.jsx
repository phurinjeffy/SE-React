import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "./Navbar.css";

import notificationIcon from "../../assets/notification.svg";

const Navbar = () => {
  // const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const navigate = useNavigate();

  // const toggleMenu = () => {
  //   setIsMenuVisible(!isMenuVisible);
  // };

  const toggleNotification = () => {
    setIsNotificationVisible(!isNotificationVisible);
  };

  const goToRoot = () => {
    navigate("/");
  }

  // const handleMenuClick = () => {
  //   toggleMenu();
  //   goToRoot();
  // };

  return (
    <div className="navbar">
      <div className="navbar-links">
        {/* <div className={`navbar-links_menu ${isMenuVisible ? "change" : ""}`} onClick={handleMenuClick}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div> */}

        <div className="navbar-links_logo" onClick={goToRoot}>
          <img src="https://se.kmitl.ac.th/assets/se.png" alt="logo" />
        </div>

        <div className={`navbar-links_title`}>
          Software Engineering
        </div>
      </div>

      <div className="navbar-profile">
        <div className="navbar-profile_search">
          <input className="navbar-profile_searchbar" placeholder="Search"></input>
        </div>

        <div className="navbar-profile_notification">
          <button className="navbar-profile_notification_icon" onClick={toggleNotification}>
            <img src={notificationIcon} alt="notificationIcon"/>
          </button>
          {isNotificationVisible && (
            <div className="navbar-profile_notification_box">
              Notification Content
            </div>
          )}
        </div>

        <div className="navbar-profile_user">
          <NavLink to="/login">
            <img src="https://wallpapers-clan.com/wp-content/uploads/2023/05/cool-pfp-02.jpg" alt="pfp" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
