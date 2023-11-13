import React from "react";

import { Profile, Calendar } from "../../components";
import "./ProfilePage.css";

const ProfilePage = () => {
  return (
    <div className="profilePage">
      <Profile />
      <Calendar />
    </div>
  );
};

export default ProfilePage;
