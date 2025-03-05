// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <nav>
        <Link to="/profile">Go to Profile</Link>
      </nav>
    </div>
  );
}

export default Home;
