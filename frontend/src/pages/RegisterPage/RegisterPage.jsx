import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./RegisterPage.css";
import closeIcon from "../../assets/close.svg";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [loginError, setLoginError] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // You can replace this with your actual authentication logic
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Redirect the user to the dashboard or another page
        window.location.href = "/dashboard";
      } else {
        // Handle authentication error
        setLoginError("Invalid email or password. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setLoginError("An error occurred. Please try again later.");
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

        <form>
          <div className="Form">
            <div className="UserInput">
              <div className="Label">
                <label htmlFor="email">
                  Email
                </label>
              </div>
              <div className="Input">
                <input type="email" id="email" onChange={handleEmailChange} value={email} />
              </div>
            </div>

            <div className="UserInput">
              <div className="Label">
                <label htmlFor="password">
                  Password
                </label>
              </div>
              <div className="Input">
                <input type="password" id="password" onChange={handlePasswordChange} value={password} />
              </div>

              <div className="Label">
                <label htmlFor="confirm_password">
                  Confirm Password
                </label>
              </div>
              <div className="Input">
                <input type="password" id="confirm_password" onChange={handleConfirmPasswordChange} value={confirm_password} />
              </div>
            </div>
            
            <div className="RegisterButton">
              <button onClick={handleLogin}>Log in</button>
            </div>
            {loginError && <div className="ErrorMessage">{loginError}</div>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
