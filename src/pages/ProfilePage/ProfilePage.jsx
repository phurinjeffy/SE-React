import React from "react";

import { Profile, Repository } from "../../components";
import "./ProfilePage.css";

const ProfilePage = () => {
  return (
    <div className="Content">
      <Profile />
      <Repository />
    </div>
  );
};

export default ProfilePage;
