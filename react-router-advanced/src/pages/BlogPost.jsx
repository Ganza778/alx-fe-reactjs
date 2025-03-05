// src/pages/BlogPost.jsx
import React from "react";
import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams(); // Get the dynamic `id` from the URL
  return <h1>Blog Post #{id}</h1>;
}

export default BlogPost;
