import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService'; // Import the API function to fetch user data

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState(0);
  const [searchTerm, setSearchTerm] = useState(''); // State for the search term
  const [userData, setUserData] = useState(null);   // State for the fetched user data
  const [loading, setLoading] = useState(false);    // State to track loading status
  const [errorMessage, setErrorMessage] = useState(''); // State for the error message

  // Handle the form submission and fetch user data
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); 
  }
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
        setErrorMessage('Looks like we cant find the user'); // Show error if no user data is returned
      }
    } catch (error) {
      setErrorMessage('Looks like we cant find the user'); // Show error if API fails or user not found
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-xl font-semibold text-center">GitHub User Search</h1>
      <form onSubmit={handleSearch} className="space-y-4">
        <div>
          <input 
            type="text" 
            placeholder="Search GitHub user by username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <input 
            type="text" 
            placeholder="Location (optional)"
            value={location}
            onChange={(e) => setLocation(e.target.value)} 
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <input 
            type="number" 
            placeholder="Minimum repositories (optional)"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)} 
            className="w-full p-2 border rounded"
          />
        </div>

        <button 
          type="submit" 
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {userData && (
        <div className="space-y-4">
          {userData.items?.map((user) => (
            <div key={user.id} className="border p-4 rounded-md shadow-sm">
              <h3 className="text-lg font-semibold">{user.login}</h3>
              <img src={user.avatar_url} alt={user.login} width="100" className="rounded-full" />
              <p>{user.location ? `Location: ${user.location}` : "Location not available"}</p>
              <p>{`Repositories: ${user.public_repos}`}</p>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">Visit Profile</a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;