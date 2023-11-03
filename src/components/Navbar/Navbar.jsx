import React, { useState } from "react";
// import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";

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

        <div className="navbar-links_title">
          Software Engineering
        </div>
      </div>

      <div className="navbar-profile">
        <div className="navbar-profile_search">
          <input className="navbar-profile_searchbar" placeholder="Search"></input>
        </div>

        <div className="navbar-profile_notification">
          <div className="NotificationBg" />
          <div className="NotificationIcon">
            <svg width="25" height="25" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" >
              <g clip-path="url(#clip0_645_54)">
                <path d="M15 0C13.8147 0 12.8571 0.837891 12.8571 1.875V2.92383C8.0022 3.59766 4.28568 7.27734 4.28568 11.7188V13.6758C4.28568 16.3359 3.24774 18.9199 1.35265 20.9941L0.354878 22.0898C-0.0335147 22.5117 -0.107175 23.0918 0.160682 23.5781C0.428539 24.0645 0.991039 24.375 1.60711 24.375H28.3928C29.0089 24.375 29.5714 24.0645 29.8393 23.5781C30.1071 23.0918 30.0335 22.5117 29.6451 22.0898L28.6473 21C26.7522 18.9199 25.7143 16.3359 25.7143 13.6758V11.7188C25.7143 7.27734 21.9977 3.59766 17.1428 2.92383V1.875C17.1428 0.837891 16.1852 0 15 0ZM15 5.625H15.5357C19.3794 5.625 22.5 8.35547 22.5 11.7188V13.6758C22.5 16.4824 23.4308 19.2188 25.1585 21.5625H4.84149C6.56916 19.2188 7.49997 16.4824 7.49997 13.6758V11.7188C7.49997 8.35547 10.6205 5.625 14.4643 5.625H15ZM19.2857 26.25H15H10.7143C10.7143 27.2461 11.1629 28.2012 11.9665 28.9043C12.7701 29.6074 13.8616 30 15 30C16.1384 30 17.2299 29.6074 18.0334 28.9043C18.837 28.2012 19.2857 27.2461 19.2857 26.25Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_645_54">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="NewUpdateNotification" />
        </div>

        <img className="UserProfile" src="https://via.placeholder.com/50x50" alt="pfp" />
      </div>
    </div>
  );
};

export default Navbar;
