import React, { useState } from 'react';

import { Navbar, Sidebar, Login, Profile, Repository } from './components'
import './App.css'

const App = () => {
	return (
		<div className="App">
			<div className="Navbar">
				<Navbar />
			</div>
			<div className="PageContainer">
				<div className="Sidebar">
					<Sidebar />
				</div>
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