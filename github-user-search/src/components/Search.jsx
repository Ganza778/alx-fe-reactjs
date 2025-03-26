import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';  // Import the API call

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');  // State to manage the search term
  const [userData, setUserData] = useState(null);    // State to store the fetched user data
  const [loading, setLoading] = useState(false);     // State to track the loading status
  const [errorMessage, setErrorMessage] = useState('');  // State to store error messages

  // Handle form submission and API call
  const handleSubmit = async (event) => {
    event.preventDefault();  // Prevent page refresh on form submission

    if (!searchTerm) return;  // Prevent search if input is empty

    setLoading(true);  // Start loading
    setErrorMessage('');  // Reset any previous error message

    try {
      const data = await fetchUserData(searchTerm);  // Fetch user data from GitHub
      setUserData(data);  // Update the user data state
    } catch (error) {
      setErrorMessage('Looks like we can\'t find the user');  // Set error message if user is not found
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
          onChange={(e) => setSearchTerm(e.target.value)}  // Update search term on input change
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
      </form>

      {/* Display loading message */}
      {loading && <p>Loading...</p>}

      {/* Display error message */}
      {errorMessage && <p>{errorMessage}</p>}

      {/* Display user data if available */}
      {userData && !loading && !errorMessage && (
        <div>
          <h2>{userData.login}</h2>  {/* Display GitHub username */}
          <img src={userData.avatar_url} alt={userData.login} width="100" />  {/* Display user avatar */}
          <p>{userData.bio}</p>  {/* Display user's bio */}
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
        </div>
      )}
    </div>
  );
};

export default Search;
