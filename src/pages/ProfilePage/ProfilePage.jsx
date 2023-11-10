import React from "react";

import { Profile, Repository } from "../../components";
import "./ProfilePage.css";

const ProfilePage = () => {
  return (
    <div className="profilePage">
      <Profile />
      <Repository />
    </div>
  );
};

export default ProfilePage;
