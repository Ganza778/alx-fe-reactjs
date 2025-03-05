// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";  // Home page component
import Profile from "./pages/Profile";  // Profile page (which contains the Outlet for nested routes)
import ProfileDetails from "./pages/ProfileDetails";  // Profile Details page
import ProfileSettings from "./pages/ProfileSettings";  // Profile Settings page
import BlogPost from "./pages/BlogPost";  // Dynamic Blog post page component
import ProtectedRoute from "./components/ProtectedRoute";  // Protected Route component to check authentication

function App() {
  return (
    <Router>
      <Routes>
        {/* Default Home route */}
        <Route path="/" element={<Home />} />

        {/* Protected Route: Only authenticated users can access /profile */}
        <Route path="/profile" element={<ProtectedRoute />}>
          {/* This will render Profile.jsx */}
          <Route index element={<Profile />} />
          
          {/* Nested Routes */}
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        {/* Dynamic Route for Blog Posts */}
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
