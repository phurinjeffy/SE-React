import React from "react";
import GenericContainer from "../GenericContainer/GenericContainer";
import "./Edit.css";

const Edit = () => {
  return (
    <GenericContainer title="Edit Profile">
        <div className="Content">
            <div className="InputSection">
                <div className="EditProfilePic" >
                    <img src="https://www.asiamediajournal.com/wp-content/uploads/2022/10/Cute-PFP-for-fb.jpg" />
                </div>

                <div className="InputField">
                    <input placeholder="Name"/>
                </div>
                <div className="InputField">
                    <input placeholder="Email"/>
                </div>
                <div className="InputField">
                    <input placeholder="Bio"/>
                </div>
                <div className="InputField">
                    <input placeholder="Contact"/>
                </div>

                <div className="SaveButton">
                    <button>Save</button>
                </div>
            </div>
        </div>
    </GenericContainer>
  );
};

export default Edit;
