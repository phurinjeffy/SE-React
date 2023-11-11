import React from 'react'
import "./HomePage.css"

const HomePage = () => {
  return (
    <div className="homePage">
      <div className='top'>
        <img src="https://www.kmitl.ac.th/sites/default/files/styles/banner_3_1/public/2022-03/banner-faculty-1.jpg?itok=Dejwj13-" alt="top"/>
      </div>
      <div className='se'>
          <img src="https://se.kmitl.ac.th/assets/se.png" alt="logo" />
      </div>
      <div className='welcomeText'>
            Software Engineering, KMITL
      </div>
    </div>
  )
}

export default HomePage