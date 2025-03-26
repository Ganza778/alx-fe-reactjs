import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService'; // Import the service to fetch user data

const Search = ({ setUserData, setLoading, setErrorMessage }) => {
  const [searchTerm, setSearchTerm] = useState(''); // State for storing the search term

  // Handle form submission and fetch user data
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page reload on form submit

    if (!searchTerm) return; // Don't search if input is empty

    setLoading(true); // Show loading state
    setErrorMessage(''); // Clear any previous error messages

    try {
      const data = await fetchUserData(searchTerm); // Fetch user data from GitHub
      setUserData(data); // Set user data to the parent component
    } catch (error) {
      setErrorMessage('Looks like we can\'t find the user'); // Show error if user not found
    } finally {
      setLoading(false); // Hide loading state after request completes
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Update state on input change
        placeholder="Enter GitHub username"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
