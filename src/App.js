import React, { useState } from 'react';

import { Navbar, Sidebar, Login, Profile, Repository } from './components'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="PageContainer">
        <Sidebar />
        <div className="Content">
          <Profile />
          <Repository />
        </div>
      </div>
      {/* <Login /> */}
    </div>
  )
}

export default App