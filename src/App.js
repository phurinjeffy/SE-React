import React from "react";
import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";
import { Navbar, Sidebar } from "./components";
import { LoginPage, ProfilePage, RepositoryPage, LearnPage, HomePage } from "./pages";
import "./App.css";

const MainLayout = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="PageContainer">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="profile" element={<ProfilePage />} />
					<Route path="repository" element={<RepositoryPage />} />
					<Route path="learn" element={<LearnPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;
