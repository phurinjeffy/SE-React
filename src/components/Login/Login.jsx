import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="Backdrop">
      <div className="SignUpOverlay">
        <img
          className="se_logo"
          src="https://se.kmitl.ac.th/assets/se.png"
          alt="se_logo"
        />
        <div className="SoftwareEngineering">Software Engineering</div>
        <div className="Icons">
          <div className="Vector1"></div>
          <div className="VectorWithBackground"></div>
        </div>
        <div className="Frame288">
          <div className="Frame209">
            <div className="Frame8">
              <div className="LoginText">Login</div>
            </div>
          </div>
          <div className="Frame287">
            <div className="TextField">
              <div className="Frame243_1">
                <div className="Label">Your email</div>
              </div>
              <input className="TextFieldInput"></input>
            </div>
            <div className="Frame286">
              <div className="TextField">
                <div className="Frame243_2">
                  <div className="Label">Your password</div>
                </div>
                <div className="PasswordHideSee">
                  <div className="Icon">
                    <div className="Group1">
                      <div className="VectorWithBackgroundIcon"></div>
                      <div className="VectorIcon"></div>
                    </div>
                  </div>
                  <div className="Hide">Hide</div>
                </div>
                <input className="TextFieldInput" type="password"></input>
              </div>
              <div
                classNameName="ForgetYourPassword"
                style={{
                  textAlign: "right",
                  color: "#111111",
                  fontSize: 16,
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  textDecoration: "underline",
                  wordWrap: "break-word",
                }}
              >
                Forget your password
              </div>
            </div>
            <div className="Button">
              <div className="ButtonBackground">
                <div className="Frame276">
                  <div className="LogInText">Log in</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
