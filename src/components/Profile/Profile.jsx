import React, { useState } from "react";
import "./style.css";

const Profile = () => {
    const [isChanged, setIsChanged] = useState(false);

    const handleButtonClick = () => {
        setIsChanged(!isChanged);
      };

  return (
    <div className="navbar">
        <div className={`container ${isChanged ? "change" : ""}`} onClick={handleButtonClick}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
        <img className="SE_Logo" src="https://se.kmitl.ac.th/assets/se.png" alt="SE_Logo"/>
        <div className="SoftwareEngineering">Software Engineering</div>
        <div className="SearchBox">
            <div className="SearchBar">
                <div className="SearchIcon">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.375 12.1875C24.375 14.877 23.502 17.3613 22.0312 19.377L29.4492 26.8008C30.1816 27.5332 30.1816 28.7227 29.4492 29.4551C28.7168 30.1875 27.5273 30.1875 26.7949 29.4551L19.377 22.0312C17.3613 23.5078 14.877 24.375 12.1875 24.375C5.45508 24.375 0 18.9199 0 12.1875C0 5.45508 5.45508 0 12.1875 0C18.9199 0 24.375 5.45508 24.375 12.1875ZM12.1875 20.625C13.2955 20.625 14.3927 20.4068 15.4164 19.9827C16.4401 19.5587 17.3702 18.9372 18.1537 18.1537C18.9372 17.3702 19.5587 16.4401 19.9827 15.4164C20.4068 14.3927 20.625 13.2955 20.625 12.1875C20.625 11.0795 20.4068 9.98229 19.9827 8.95861C19.5587 7.93492 18.9372 7.00478 18.1537 6.22129C17.3702 5.43779 16.4401 4.81629 15.4164 4.39227C14.3927 3.96824 13.2955 3.75 12.1875 3.75C11.0795 3.75 9.98229 3.96824 8.95861 4.39227C7.93492 4.81629 7.00478 5.43779 6.22129 6.22129C5.43779 7.00478 4.81629 7.93492 4.39227 8.95861C3.96824 9.98229 3.75 11.0795 3.75 12.1875C3.75 13.2955 3.96824 14.3927 4.39227 15.4164C4.81629 16.4401 5.43779 17.3702 6.22129 18.1537C7.00478 18.9372 7.93492 19.5587 8.95861 19.9827C9.98229 20.4068 11.0795 20.625 12.1875 20.625Z" fill="#6D6D6D"/>
                    </svg>
                </div>
                <input className="SearchInput"></input>
            </div>
        </div>
        <div className="Notification">
            <div className="NotificationBg" />
            <div className="NotificationIcon">
                <svg width="25" height="25" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_645_54)">
                    <path d="M15 0C13.8147 0 12.8571 0.837891 12.8571 1.875V2.92383C8.0022 3.59766 4.28568 7.27734 4.28568 11.7188V13.6758C4.28568 16.3359 3.24774 18.9199 1.35265 20.9941L0.354878 22.0898C-0.0335147 22.5117 -0.107175 23.0918 0.160682 23.5781C0.428539 24.0645 0.991039 24.375 1.60711 24.375H28.3928C29.0089 24.375 29.5714 24.0645 29.8393 23.5781C30.1071 23.0918 30.0335 22.5117 29.6451 22.0898L28.6473 21C26.7522 18.9199 25.7143 16.3359 25.7143 13.6758V11.7188C25.7143 7.27734 21.9977 3.59766 17.1428 2.92383V1.875C17.1428 0.837891 16.1852 0 15 0ZM15 5.625H15.5357C19.3794 5.625 22.5 8.35547 22.5 11.7188V13.6758C22.5 16.4824 23.4308 19.2188 25.1585 21.5625H4.84149C6.56916 19.2188 7.49997 16.4824 7.49997 13.6758V11.7188C7.49997 8.35547 10.6205 5.625 14.4643 5.625H15ZM19.2857 26.25H15H10.7143C10.7143 27.2461 11.1629 28.2012 11.9665 28.9043C12.7701 29.6074 13.8616 30 15 30C16.1384 30 17.2299 29.6074 18.0334 28.9043C18.837 28.2012 19.2857 27.2461 19.2857 26.25Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_645_54">
                    <rect width="30" height="30" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            </div>
            <div className="NewUpdateNotification"/>
        </div>
        <img className="UserProfile" src="https://via.placeholder.com/50x50" />
    </div>
  );
};

export default Profile;
