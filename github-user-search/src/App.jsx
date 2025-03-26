import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import UserProfile from './components/UserProfile';
import { fetchGitHubUser } from './services/githubService';
import Search from './components/Search';
import UserProfile from './components/UserProfile';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [userData, setUserData] = useState(null);

  const handleSearch = async () => {
    if (searchTerm) {
      try {
        const response = await fetch(`https://api.github.com/users/${searchTerm}`);
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching GitHub user:', error);
      }
    }
  };

  return (
    <div className="App">
      <h1>GitHub User Search</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a GitHub user"
      />
      <button onClick={handleSearch}>Search</button>
      
      {userData && (
        <div>
          <h2>{userData.login}</h2>
          <img src={userData.avatar_url} alt={userData.login} />
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
