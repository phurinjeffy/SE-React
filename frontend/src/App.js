import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Outlet, Navigate } from "react-router-dom";
import { Navbar, Sidebar } from "./components";
import { LoginPage, RegisterPage, ProfilePage, RepositoryPage, LearnPage, HomePage, EditPage, FollowerPage, FollowingPage, UploadPage } from "./pages";
import "./App.css";
import { UserContext } from "./context/UserContext";

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
  const [message, setMessage] = useState("");
  const [token] = useContext(UserContext);

  const getWelcomeMessage = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch("/api", requestOptions);
    const data = await response.json();

    if (!response.ok) {
      console.log("something messed up");
    } else {
      setMessage(data.message);
    }
  };

  useEffect(() => {
    getWelcomeMessage();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>

        {token ? (
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/profile/edit" element={<EditPage />} />
            <Route path="/profile/follower" element={<FollowerPage />} />
            <Route path="/profile/following" element={<FollowingPage />} />
            <Route path="/repository" element={<RepositoryPage />} />
            <Route path="/learn" element={<LearnPage />} />
            <Route path="/upload" element={<UploadPage />} />
          </Route>
        ) : (
          <Route path="/*" element={<Navigate to="/login" replace />} />
        )}

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
