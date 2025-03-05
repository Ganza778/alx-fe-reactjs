// src/pages/Profile.jsx
import React from "react";
import { Link, Outlet } from "react-router-dom"; // Link for navigation and Outlet for rendering nested routes

function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <nav>
        {/* Links to navigate to nested routes */}
        <Link to="details">Profile Details</Link> | 
        <Link to="settings">Profile Settings</Link>
      </nav>
      <hr />
      {/* This is where nested route content will render */}
      <Outlet />
    </div>
  );
}

export default Profile;
