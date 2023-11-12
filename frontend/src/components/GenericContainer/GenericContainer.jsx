import React from "react";
import { useNavigate } from "react-router-dom";
import "./GenericContainer.css";
import backIcon from "../../assets/back.svg";

const GenericContainer = ({ children, title }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navigate back one step
  };

  return (
    <div className="GenericContainer">
      <div className="Back" onClick={goBack}>
          <img src={backIcon} alt="back" />
      </div>
      <div className="Title">{title}</div>
      <div className="Container">{children}</div>
    </div>
  );
};

export default GenericContainer;
