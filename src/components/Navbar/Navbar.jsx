import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "./Navbar.css";

import notificationIcon from "../../assets/notification.svg";

const Navbar = () => {
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const navigate = useNavigate();

  const toggleNotification = () => {
    setIsNotificationVisible(!isNotificationVisible);
  };

  const goToRoot = () => {
    navigate("/");
  }

  return (
    <div className="NavBar">
      <div className="Left">
        <div className="Logo" onClick={goToRoot}>
          <img src="https://se.kmitl.ac.th/assets/se.png" alt="logo" />
        </div>

        <div className="Title" id="title">
          Software Engineering
        </div>
      </div>

      <div className="Right">
        <div className="Search">
          <input className="SearchBar" placeholder="Search"></input>
        </div>

        <div className="Notification">
          <button className="NotificationIcon" onClick={toggleNotification}>
            <img src={notificationIcon} alt="notificationIcon"/>
          </button>
          {isNotificationVisible && (
            <div className="NotificationBox">
              Notification Content
            </div>
          )}
        </div>

        <div className="User">
          <NavLink to="/login">
            <img src="https://wallpapers-clan.com/wp-content/uploads/2023/05/cool-pfp-02.jpg" alt="pfp" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
