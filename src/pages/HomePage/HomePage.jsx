import React from 'react'
import "./HomePage.css"
import { NavLink } from 'react-router-dom'
import seLogo from "../../assets/se_logo_white.png"

const HomePage = () => {
  return (
    <div className="homePage">
      <NavLink to="/login" className='homePageSignIn'>
        <img src={seLogo} alt="se"/>
      </NavLink>
    </div>
  )
}

export default HomePage