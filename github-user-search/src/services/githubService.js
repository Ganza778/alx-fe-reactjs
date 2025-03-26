import axios from 'axios';

// Function to fetch user data from GitHub API
export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;  // Return the data from the response
};
