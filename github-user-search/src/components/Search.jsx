import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';  // We'll define this in the service

const Search = ({ setUserData, setLoading, setErrorMessage }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!searchTerm) return;

    setLoading(true);  // Start loading
    setErrorMessage('');  // Reset previous error message

    try {
      const data = await fetchUserData(searchTerm);  // Fetch user data
      setUserData(data);  // Set user data on successful response
    } catch (error) {
      setErrorMessage('Looks like we can\'t find the user');  // Handle error
    } finally {
      setLoading(false);  // Stop loading
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
