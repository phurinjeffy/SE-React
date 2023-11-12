import React from "react";
import { NavLink } from "react-router-dom";
import "./Edit.css";
import backIcon from "../../assets/back.svg";
import cameraIcon from "../../assets/camera.svg";
import orangeIcon from "../../assets/orange.svg";

const Edit = () => {
  return (
    <div className="EditBox">
        <div className="Back">
            <NavLink to="./..">
                <img src={backIcon} alt="back"/>
            </NavLink>
        </div>

        <div className="InputSection">
            <div className="EditProfilePic" >
                <img src="https://www.asiamediajournal.com/wp-content/uploads/2022/10/Cute-PFP-for-fb.jpg" />
            </div>

            <div className="InputField">
                <input className="Name" placeholder="Name"/>
            </div>
            <div className="InputField">
                <input className="Email" placeholder="Email"/>
            </div>
            <div className="InputField">
                <input className="Bio" placeholder="Bio"/>
            </div>
            <div className="InputField">
                <input className="Contact" placeholder="Contact"/>
            </div>

            <div className="SaveButton">
                <button>
                    Save
                </button>
            </div>
        </div>

    </div>
  );
};

export default Edit;
