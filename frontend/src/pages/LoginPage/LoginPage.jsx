import React, { useState, useContext  } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import closeIcon from "../../assets/close.svg";

import { UserContext } from "../../context/UserContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [, setToken] = useContext(UserContext);
  const navigate = useNavigate();

  const submitLogin = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: JSON.stringify(
        `grant_type=&username=${email}&password=${password}&scope=&client_id=&client_secret=`
      ),
    };

    const response = await fetch("/api/token", requestOptions);
    const data = await response.json();

    if (!response.ok) {
      setErrorMessage(data.detail);
    } else {
      setToken(data.access_token);
      navigate("/profile");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitLogin();
  };

  return (
    <div className="Page">
      <div className="LoginOverlay">
        <div className="CloseIcon">
            <NavLink to="/">
              <img src={closeIcon} alt="closeIcon" />
            </NavLink>
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

        <form onSubmit={handleSubmit}>
          <div className="Form">
            <div className="UserInput">
              <div className="Label">
                <label htmlFor="email">
                  Email
                </label>
              </div>
              <div className="Input">
                <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email} required/>
              </div>
            </div>

            <div className="UserInput">
              <div className="Label">
                <label htmlFor="password">
                  Password
                </label>
              </div>
              <div className="Input">
                <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password} required/>
              </div>
            </div>
            
            <div className="LoginButton">
              <button type="submit">Log in</button>
            </div>
            <div className="ErrorMessage">{errorMessage}</div>
          </div>
        </form>

        <NavLink to="/register" className="goToRegister">
          Don't have an account?
          <p>Register</p>
        </NavLink>
      </div>
    </div>
  );
};

export default LoginPage;
