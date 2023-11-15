import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Profile.css";

import followerIcon from "../../assets/follower.svg";
import githubIcon from "../../assets/github.svg";
import discordIcon from "../../assets/discord.svg";

import { UserContext } from "../../context/UserContext";
import GenericContainer from "../GenericContainer/GenericContainer";
import ProfileModal from "./ProfileModal";

const Profile = () => {
  const [token] = useContext(UserContext);
  const [profile, setProfile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [activeModal, setActiveModal] = useState(false);
  const [id, setId] = useState(null);

  const handleUpdate = async (id) => {
    setId(id);
    setActiveModal(true);
  };

  const getProfile = async () => {
    try {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };
      const response = await fetch("/api/profile", requestOptions);
      if (!response.ok) {
        throw new Error("Something went wrong. Couldn't load the profile");
      }
      const data = await response.json();
      setProfile(data);
      setLoaded(true);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    // Fetch the profile after the modal state has been updated
    if (activeModal) {
      getProfile();
    }
  }, [activeModal]); // Add activeModal as a dependency

  const handleModal = async () => {
    try {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };
      const response = await fetch("/api/profile", requestOptions);
      if (!response.ok) {
        throw new Error("Something went wrong. Couldn't load the profile");
      }
      const data = await response.json();
      setProfile(data);
      setLoaded(true); // Set loaded to true when the data is successfully loaded
    } catch (error) {
      setErrorMessage(error.message);
    }
  
    const profileExists = profile !== null && profile.id !== null;
  
    if (profileExists) {
      setId(profile.id);
    } else {
      setId(null);
    }
  
    // Move this inside the try block to ensure it's called after data is loaded
    setActiveModal(!activeModal);
  };
  
  useEffect(() => {
    // Fetch the profile after the modal state has been updated
    if (activeModal) {
      getProfile();
    }
  }, [activeModal]);
  


  return (
    <div className="ProfileSection">
      <ProfileModal
        active={activeModal}
        handleModal={handleModal}
        token={token}
        id={id}
        setErrorMessage={setErrorMessage}
      />
      <div className="User">
        <div className="UserSProfilePic">
          <button onClick={() => setActiveModal(true)}>
            <img src="https://www.asiamediajournal.com/wp-content/uploads/2022/10/Cute-PFP-for-fb.jpg" alt="Profile" />
          </button>
          {loaded && profile !== null ? (
            <div>
              <div className="Name">{profile.firstname}</div>
              <div className="Name">{profile.surname}</div>
              <div className="Email">65011463@kmitl.ac.th</div>
            </div>
          ) : (
            <div>
              <div className="Name">First name</div>
              <div className="Name">Surname</div>
              <div className="Email">65011463@kmitl.ac.th</div>
            </div>
          )}
        </div>
      </div>
      <div className="Contacts">
        <div className="ContactsRow">
          <a className="ContactsIcon">
            <img src={followerIcon} alt="followerIcon" />
          </a>
          <NavLink to="./follower" className="ContactsText">
            <span id="follower">1</span> follower
          </NavLink>
          <div className="Dot" />
          <NavLink to="./following" className="ContactsText">
            <span id="following">3</span> following
          </NavLink>
        </div>
        <div className="ContactsRow">
          <a className="ContactsIcon">
            <img src={githubIcon} alt="githubIcon" />
          </a>
          <a className="ContactsText" href="">
            Github
          </a>
        </div>
        <div className="ContactsRow">
          <a className="ContactsIcon">
            <img src={discordIcon} alt="discordIcon" />
          </a>
          <a className="ContactsText" href="">
            Discord
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
