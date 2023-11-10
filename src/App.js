import React, { useState } from 'react';

import { Navbar, Sidebar } from './components'
import { LoginPage, ProfilePage } from './pages'
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
					<ProfilePage />
				</div>
			</div>
			{/* <LoginPage /> */}
		</div>
	)
}

export default App