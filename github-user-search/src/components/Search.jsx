import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService'; // Import the API function to fetch user data

const Search = () => {
  const [searchTerm, setSearchTerm] = useState(''); // State for storing the search term
  const [userData, setUserData] = useState(null);   // State for storing user data
  const [loading, setLoading] = useState(false);    // State for managing the loading status
  const [errorMessage, setErrorMessage] = useState(''); // State for managing error messages

  // Handle the form submission and trigger the API call
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent form submission from reloading the page

    if (!searchTerm) return; // Do nothing if the input is empty

    setLoading(true); // Start the loading indicator
    setErrorMessage(''); // Clear any previous error messages

    try {
      const data = await fetchUserData(searchTerm); // Fetch the data using the GitHub API
      if (data) {
        setUserData(data); // If data is fetched, update the userData state
      } else {
        setErrorMessage('Looks like we can\'t find the user'); // Set error if no data is returned
      }
    } catch (error) {
      setErrorMessage('Looks like we can\'t find the user'); // Handle API errors and set the error message
    } finally {
      setLoading(false); // Stop the loading indicator
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
      {loading && <p>Loading...</p>} {/* Show loading message while waiting for the response */}
      {errorMessage && <p>{errorMessage}</p>} {/* Display error message if user is not found or API fails */}

      {/* Display user data if available */}
      {userData && !loading && !errorMessage && (
        <div>
          <h2>{userData.login}</h2> {/* Display GitHub username */}
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
