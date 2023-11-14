import React from "react";
import "./HomePage.css";
import { NavLink } from "react-router-dom";
import seBanner from "../../assets/se_banner.png";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="homeNavBar">
        <a href="#">About</a>
        <a href="#">Program</a>
        <a href="#">Classroom</a>
        <a href="#">Contact</a>
      </div>
      <img src={seBanner} alt="seBanner" className="seBanner" />
      
      <div className="homeBody">
        <div className="WhatIsSoftware">
          <div>
            What is Software Engineering?
          </div>
          <div>
            Software engineering (SE) is an engineering discipline concerning all
            aspects of software production, including software analysis, design,
            development, testing, and deployment. SE requires profound abstract
            and logical thinking and the application of mathematics, logic, and
            computer science in order to produce efficient and reliable software
            with the available resources.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
