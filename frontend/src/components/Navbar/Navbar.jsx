import React, { useState, useEffect, useContext } from "react";
import { useNavigate, NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import notificationIcon from "../../assets/notification.svg";

import { UserContext } from "../../context/UserContext";

const Navbar = () => {
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const [isUserVisible, setUserVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState("Software Engineering");

  const [token, setToken] = useContext(UserContext);

  const handleLogout = () => {
    setToken(null);
  };

  const handleLogin = () => {
    navigate('/login');
  }

  useEffect(() => {
    switch (location.pathname) {
      case "/profile":
        setPageTitle("Profile");
        break;
      case "/notes":
        setPageTitle("Notes");
        break;
      case "/timetable":
          setPageTitle("Timetable");
          break;
      case "/repository":
        setPageTitle("Repository");
        break;
      case "/learn":
        setPageTitle("Learn");
        break;
      case "/ws":
        setPageTitle("Chat");
        break;
      default:
        setPageTitle("Software Engineering");
        break;
    }
  }, [location.pathname]);

  const toggleNotification = () => {
    setIsNotificationVisible(!isNotificationVisible);
  };

  const toggleUser = () => {
    setUserVisible(!isUserVisible);
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
          {pageTitle}
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
          <button className="UserIcon" onClick={toggleUser}>
            <img src="https://i1.rgstatic.net/ii/profile.image/614807262740481-1523592882757_Q512/Fatima-Iqbal-12.jpg" alt="pfp"/>
          </button>
          {isUserVisible && (
            <div className="UserBox">
              {token ? (
                <button className="logButton" onClick={handleLogout}>
                  Logout
                </button>
              ) : (
                <button className="logButton" onClick={handleLogin}>
                  Login
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
