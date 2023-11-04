import React from 'react'

import { Navbar, Login, Profile, Repository } from './components'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="Content">
        <Profile />
        <Repository />
      </div>
    </div>
  )
}

export default App