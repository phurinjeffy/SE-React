import React from "react";
import "./style.css";

const Login = () => {
  return (
    <div class="LoginContainer">
        <div class="Backdrop"></div>
        <div class="SignUpOverlay">
            <div class="Icons">
                <div class="Vector1"></div>
                <div class="VectorWithBackground"></div>
            </div>
            <div class="Frame288">
                <div class="Frame209">
                    <div class="Frame8">
                        <div class="LoginText">Login</div>
                    </div>
                </div>
                <div class="Frame287">
                    <div class="TextField">
                        <div class="Frame243_1">
                            <div class="Label">Your email</div>
                        </div>
                        <input class="TextFieldInput"></input>
                    </div>
                    <div class="Frame286">
                        <div class="TextField">
                            <div class="Frame243_2">
                                <div class="Label">Your password</div>
                            </div>
                            <div class="PasswordHideSee">
                                <div class="Icon">
                                    <div class="Group1">
                                        <div class="VectorWithBackgroundIcon"></div>
                                        <div class="VectorIcon"></div>
                                    </div>
                                </div>
                                <div class="Hide">Hide</div>
                            </div>
                            <input class="TextFieldInput" type="password"></input>
                        </div>
                    <div className="ForgetYourPassword" style={{textAlign: 'right', color: '#111111', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', textDecoration: 'underline', wordWrap: 'break-word'}}>Forget your password</div>
                    </div>
                    <div class="Button">
                        <div class="ButtonBackground">
                            <div class="Frame276">
                                <div class="LogInText">Log in</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img class="Se11" src="https://se.kmitl.ac.th/assets/se.png" />
            <div class="SoftwareEngineering">Software Engineering</div>
        </div>
    </div>
  );
};

export default Login