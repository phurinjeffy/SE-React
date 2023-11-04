import React from "react";
import "./login.css";
import closeIcon from "../../assets/close.svg";

const Login = () => {
  return (
    <div className="Page">
      <div className="SignUpOverlay">
        <div className="CloseIcon">
          <a href="#">
            <img src={closeIcon} alt="closeIcon" />
          </a>
        </div>

        <div className="Title">
          <img className="Logo" src="https://se.kmitl.ac.th/assets/se.png" alt="se_logo" />
          <div className="SoftwareEngineering">
            Software Engineering
          </div>
          <div className="LoginText">
            Login
          </div>
        </div>

        <form>
          <div className="Form">
            <div className="UserInput">
              <div className="Label">
                <label for="email">
                  Email
                </label>
              </div>
              <div className="Input">
                <input type="email" id="email"/>
              </div>
            </div>

            <div className="UserInput">
              <div className="Label">
                <label for="password">
                  Password
                </label>
              </div>
              <div className="Input">
                <input type="password" id="password"/>
              </div>
            </div>
            
            <div className="LoginButton">
              <button>
                Log in
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
