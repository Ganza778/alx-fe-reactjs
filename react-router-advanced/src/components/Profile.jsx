// src/pages/Profile.jsx
import React from "react";
import { Link, Outlet } from "react-router-dom";

function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <nav>
        <Link to="details">Profile Details</Link> | 
        <Link to="settings">Profile Settings</Link>
      </nav>
      <hr />
      <Outlet /> {/* Renders the nested route component */}
    </div>
  );
}

export default Profile;
