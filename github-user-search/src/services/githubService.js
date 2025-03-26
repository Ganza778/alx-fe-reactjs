// src/services/githubService.js
import axios from 'axios';

// Fetch GitHub user data with advanced search criteria (username, location, min repos)
export const fetchUserData = async (username, location, minRepos) => {
  try {
    let query = `type:user`;

    if (username) query += `+in:login:${username}`;
    if (location) query += `+location:${location}`;
    if (minRepos > 0) query += `+repos:>=${minRepos}`;

    const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching data from GitHub API');
  }
};
