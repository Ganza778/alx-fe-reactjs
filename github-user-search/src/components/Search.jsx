import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService'; // Import the API function to fetch user data

const Search = () => {
  const [searchTerm, setSearchTerm] = useState(''); // State for the search term
  const [userData, setUserData] = useState(null);   // State for the fetched user data
  const [loading, setLoading] = useState(false);    // State to track loading status
  const [errorMessage, setErrorMessage] = useState(''); // State for the error message

  // Handle the form submission and fetch user data
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page refresh on form submit

    if (!searchTerm) return; // Don't search if the input is empty

    setLoading(true); // Start loading
    setErrorMessage(''); // Clear any existing error messages

    try {
      const data = await fetchUserData(searchTerm); // Fetch user data from GitHub API
      if (data) {
        setUserData(data); // If user found, update userData
      } else {
        setErrorMessage('Looks like we can\'t find the user'); // Show error if no user data is returned
      }
    } catch (error) {
      setErrorMessage('Looks like we can\'t find the user'); // Show error if API fails or user not found
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update the search term as the user types
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
      </form>

      {/* Conditional rendering */}
      {loading && <p>Loading...</p>} {/* Show loading message */}
      {errorMessage && <p>{errorMessage}</p>} {/* Display the error message if set */}

      {/* Display user data if found */}
      {userData && !loading && !errorMessage && (
        <div>
          <h2>{userData.login}</h2> {/* Display the GitHub username */}
          <img src={userData.avatar_url} alt={userData.login} width="100" /> {/* Display user avatar */}
          <p>{userData.bio}</p> {/* Display user's bio */}
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
