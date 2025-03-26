import React from 'react';

const UserProfile = ({ userData }) => {
  if (!userData) return null;

  return (
    <div>
      <h2>{userData.login}</h2>
      <img src={userData.avatar_url} alt={userData.login} width="100" />
      <p>{userData.bio}</p>
      <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
        View Profile
      </a>
    </div>
  );
};

export default UserProfile;
