// src/components/Profile.jsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // Import Routes and Route
import ProfileDetails from './ProfileDetails'; // Import child components
import ProfileSettings from './ProfileSettings'; // Import child components

const Profile = () => {
  return (
    <div>
      <h1>Profile Page</h1>
      
      {/* Navigation Links to Nested Routes */}
      <nav>
        <Link to="details">Profile Details</Link> | 
        <Link to="settings">Profile Settings</Link>
      </nav>

      {/* Nested Routes Configuration */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
};

export default Profile;
