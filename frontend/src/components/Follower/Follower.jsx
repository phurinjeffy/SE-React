import React from "react";
import { NavLink } from "react-router-dom";
import "./Follower.css";
import backIcon from "../../assets/back.svg";

const followersData = [
  {
    id: 1,
    name: "User 1",
    year: "Year 2",
    status: "mutual",
    profilePic: "https://via.placeholder.com/110x110",
  },
  {
    id: 2,
    name: "User 2",
    year: "Year 3",
    status: "mutual",
    profilePic: "https://via.placeholder.com/110x110",
  },
  {
    id: 3,
    name: "User 3",
    year: "Year 3",
    status: "mutual",
    profilePic: "https://via.placeholder.com/110x110",
  },
  {
    id: 4,
    name: "User 4",
    year: "Year 1",
    status: "mutual",
    profilePic: "https://via.placeholder.com/110x110",
  },
  {
    id: 5,
    name: "User 5",
    year: "Year 4",
    status: "mutual",
    profilePic: "https://via.placeholder.com/110x110",
  },
  // Add more follower data as needed
];

const Follower = () => {
    return (
      <div className="FollowerBox">
        <div className="Back">
          <NavLink to="./..">
            <img src={backIcon} alt="back" />
          </NavLink>
        </div>
  
        <div className="Title">Follower</div>
  
        <div className="AccountContainer">
            <div className="Account">
                {followersData.map((follower) => (
                    <div className="Follower" key={follower.id}>
                    <img className="AccountPic" src={follower.profilePic} alt={`profile-${follower.id}`} />
                    <div className="AccountInfo">
                        <div className="AccountName">{follower.name}</div>
                        <div className="YearsStatus">
                        <div className="YearColor" />
                        <div className="AccountYear">{follower.year}</div>
                        <div className="AccountStatus">{follower.status}</div>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    );
  };

export default Follower;
