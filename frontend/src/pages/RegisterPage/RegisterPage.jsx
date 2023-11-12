import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "./RegisterPage.css";
import closeIcon from "../../assets/close.svg";

import { UserContext } from "../../context/UserContext";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [, setToken] = useContext(UserContext);

  const submitRegistration = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, hashed_password: password }),
    };

    const response = await fetch("/api/users", requestOptions);
    const data = await response.json();

    if (!response.ok) {
      setErrorMessage(data.detail);
    } else {
      setToken(data.access_token);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmationPassword && password.length > 5) {
      submitRegistration();
    } else {
      setErrorMessage(
        "Ensure that the passwords match and greater than 5 characters"
      );
    }
  };

  return (
    <div className="Page">
        <div className="RegisterOverlay">
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
            <div className="RegisterText">
              Register
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

                <div className="Label">
                  <label htmlFor="confirmationPassword">
                    Confirm Password
                  </label>
                </div>
                <div className="Input">
                  <input type="password" id="confirmationPassword" onChange={(e) => setConfirmationPassword(e.target.value)} value={confirmationPassword} required/>
                </div>
              </div>
              
              <div className="RegisterButton">
                <button type="submit">Register</button>
              </div>
              <div className="ErrorMessage">{errorMessage}</div>
            </div>
          </form>

          <NavLink to="/login" className="goToLogin">
            Already have an account?
            <p>Login</p>
          </NavLink>
        </div>
    </div>
  );
};

export default RegisterPage;
