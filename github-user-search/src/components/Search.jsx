import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';  // API call to fetch user data

const Search = () => {
  const [searchTerm, setSearchTerm] = useState(''); // State to handle the search term
  const [userData, setUserData] = useState(null);   // State to hold the fetched user data
  const [loading, setLoading] = useState(false);    // State to track loading status
  const [errorMessage, setErrorMessage] = useState(''); // State to hold the error message

  // Handle form submission and fetch user data
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page refresh on form submit

    if (!searchTerm) return; // Don't search if the input is empty

    setLoading(true); // Set loading to true
    setErrorMessage(''); // Clear any existing error messages

    try {
      const data = await fetchUserData(searchTerm); // Fetch user data based on search term
      if (data) {
        setUserData(data); // Set user data if found
      } else {
        setErrorMessage('Looks like we can\'t find the user'); // Show error if no user data
      }
    } catch (error) {
      setErrorMessage('Looks like we can\'t find the user'); // Show error if the API call fails
    } finally {
      setLoading(false); // Set loading to false after request finishes
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

      {/* Display loading text */}
      {loading && <p>Loading...</p>}

      {/* Display error message */}
      {errorMessage && <p>{errorMessage}</p>}

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
