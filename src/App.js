import React from 'react'

import { Navbar, Login, Profile } from './components'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="Content">
        <Profile />
      </div>
    </div>
  )
}

export default App