import React from 'react';

const UserProfile = ({ userData }) => {
  if (!userData) return null; // If no user data, return nothing

  return (
    <div>
      <h2>{userData.login}</h2>  {/* Display GitHub username */}
      <img src={userData.avatar_url} alt={userData.login} width="100" /> {/* Display user avatar */}
      <p>{userData.bio}</p>  {/* Display user's bio */}
      <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
        View Profile
      </a>
    </div>
  );
};

export default UserProfile;
