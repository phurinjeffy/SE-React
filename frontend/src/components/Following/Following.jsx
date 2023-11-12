import React from "react";
import GenericContainer from "../GenericContainer/GenericContainer";
import "./Following.css";

const followingsData = [
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
  // Add more following data as needed
];

const Following = () => {
  return (
    <GenericContainer title="Following">
      <div className="Content">
        <div className="Account">
          {followingsData.map((following) => (
            <div className="Following" key={following.id}>
              <img
                className="AccountPic"
                src={following.profilePic}
                alt={`profile-${following.id}`}
              />
              <div className="AccountInfo">
                <div className="AccountName">{following.name}</div>
                <div className="YearsStatus">
                  <div className="YearColor" />
                  <div className="AccountYear">{following.year}</div>
                  <div className="AccountStatus">{following.status}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </GenericContainer>
  );
};

export default Following;
