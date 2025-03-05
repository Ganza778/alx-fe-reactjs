// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";  // Home page component
import Profile from "./pages/Profile";  // Profile page component
import ProfileDetails from "./pages/ProfileDetails";  // Profile Details component
import ProfileSettings from "./pages/ProfileSettings";  // Profile Settings component
import BlogPost from "./pages/BlogPost";  // Blog post component
import ProtectedRoute from "./components/ProtectedRoute";  // Protected Route for authentication

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  {/* Home route */}
        
        {/* Protected Route - Ensure that only authenticated users can access the Profile page */}
        <Route path="/profile" element={<ProtectedRoute />}>
          {/* Nested routes */}
          <Route index element={<Profile />} /> {/* Default Profile page */}
          <Route path="details" element={<ProfileDetails />} /> {/* Profile Details */}
          <Route path="settings" element={<ProfileSettings />} /> {/* Profile Settings */}
        </Route>
        
        {/* Dynamic route for individual blog posts */}
        <Route path="/blog/:id" element={<BlogPost />} />  
      </Routes>
    </Router>
  );
}

export default App;
