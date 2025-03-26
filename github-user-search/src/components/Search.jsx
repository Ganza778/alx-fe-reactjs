import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';  // Import the API call to fetch user data

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');  // State for the search term
  const [userData, setUserData] = useState(null);    // State to store user data
  const [loading, setLoading] = useState(false);     // State to manage loading status
  const [errorMessage, setErrorMessage] = useState('');  // State to store error messages

  // Handle form submission and fetch user data
  const handleSubmit = async (event) => {
    event.preventDefault();  // Prevent page reload on form submission

    if (!searchTerm) return;  // Don't search if the input is empty

    setLoading(true);  // Start loading
    setErrorMessage('');  // Reset any previous error message

    try {
      const data = await fetchUserData(searchTerm);  // Fetch user data using the GitHub API
      setUserData(data);  // Set the user data in state
    } catch (error) {
      setErrorMessage('Looks like we can\'t find the user');  // Set the error message if no user found
    } finally {
      setLoading(false);  // Stop loading
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}  // Update search term state on input change
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
      </form>

      {/* Conditional rendering */}
      {loading && <p>Loading...</p>}  {/* Show loading message while fetching data */}
      {errorMessage && <p>{errorMessage}</p>}  {/* Show error message if user is not found */}
      {userData && !loading && !errorMessage && (
        <div>
          <h2>{userData.login}</h2>  {/* Display GitHub username */}
          <img src={userData.avatar_url} alt={userData.login} width="100" />  {/* Display user avatar */}
          <p>{userData.bio}</p>  {/* Display user's bio */}
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
