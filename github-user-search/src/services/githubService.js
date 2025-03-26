import axios from 'axios';

// Function to fetch GitHub user data
export const fetchGitHubUser = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub user:', error);
    throw error; // Throw error to handle it in the component
  }
};
