import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Profile.css";

import followerIcon from "../../assets/follower.svg";
import githubIcon from "../../assets/github.svg";
import discordIcon from "../../assets/discord.svg";

import { UserContext } from "../../context/UserContext";
import ProfileModal from "./ProfileModal";

const Profile = () => {
  const [token] = useContext(UserContext);
  const [profiles, setProfile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [activeModal, setActiveModal] = useState(false);
  const [id, setId] = useState(null);

  const handleUpdate = async (id) => {
    setId(id);
    setActiveModal(true);
  };

  const getProfile = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    const response = await fetch("/api/profile", requestOptions);
    if (!response.ok) {
      setErrorMessage("Something went wrong. Couldn't load the profile");
    } else {
      const data = await response.json();
      setProfile(data);
      setLoaded(true);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  const handleModal = async () => {
    setActiveModal(!activeModal);
    getProfile();
    setId(null);
  };

  return (
    <div className="ProfileSection">
      <ProfileModal active={activeModal} handleModal={handleModal} token={token} id={id} setErrorMessage={setErrorMessage} />
      <div className="User">
        <div className="UserSProfilePic">
          <img src="https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png" alt="Profile" onClick={() => setActiveModal(true)}/>
        </div>
        <div>
          {loaded && profiles && (
            <div>
              {profiles.length > 0 ? (
                profiles.map((profile) => (
                  <div key={profile.id}>
                    {profile.firstname && profile.surname ? (
                      <>
                        <div className="Name">{profile.firstname} {profile.surname}</div>
                        <div className="Email">65011463@kmitl.ac.th</div>
                      </>
                    ) : (
                      <>
                        <div className="clickToEditProfile" onClick={() => setActiveModal(true)}>Edit Profile</div>
                        <div className="Email">65011463@kmitl.ac.th</div>
                      </>
                    )}
                  </div>
                ))
              ) : (
                <div>
                  <div className="clickToEditProfile" onClick={() => setActiveModal(true)}>Edit Profile</div>
                  <div className="Email">Email</div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="Contacts">
        {/* <div className="ContactsRow">
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
        </div> */}
        <div className="ContactsRow">
          <a className="ContactsIcon">
            <img src={githubIcon} alt="githubIcon" />
          </a>
          {loaded && profiles && profiles.length > 0 && profiles[0].github !== "" ? (
            <a className="ContactsText" href={profiles[0].github} target="_blank" rel="noopener noreferrer">
              Github
            </a>
          ): (
            <a className="ContactsTextNone" >
              Github
            </a>
          )}
        </div>
        <div className="ContactsRow">
          <a className="ContactsIcon">
            <img src={discordIcon} alt="discordIcon" />
          </a>
          {loaded && profiles && profiles.length > 0 && profiles[0].discord !== "" ? (
            <a className="ContactsText" href={profiles[0].discord} target="_blank" rel="noopener noreferrer">
              Discord
            </a>
          ) : (
            <a className="ContactsTextNone" >
              Discord
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
