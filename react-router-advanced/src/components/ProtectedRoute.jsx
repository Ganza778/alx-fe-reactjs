// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';  // Import the useAuth hook

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // Access authentication status from useAuth
  
  // If the user is not authenticated, redirect to the login page
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  // If authenticated, render the children (the protected route)
  return children;
};

export default ProtectedRoute;
