// src/pages/Profile.jsx
import React from "react";
import { Link, Outlet } from "react-router-dom"; // `Outlet` is where nested routes will render

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
      {/* Outlet is the placeholder where nested route content will render */}
      <Outlet />
    </div>
  );
}

export default Profile;
