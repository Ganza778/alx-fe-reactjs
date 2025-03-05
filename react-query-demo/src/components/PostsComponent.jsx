// src/components/PostsComponent.js
import React from "react";
import { useQuery } from "react-query";

// Define the fetch function
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network error");
  }
  return response.json();
};

const PostsComponent = () => {
  const { data, error, isLoading, refetch } = useQuery("posts", fetchPosts, {
    // Cache data for 5 minutes before refetching
    staleTime: 5 * 60 * 1000,
    // Refetch data on window focus
    refetchOnWindowFocus: false,
  });

  // Error handling
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={refetch}>Refetch Data</button>
      <ul>
        {data?.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
