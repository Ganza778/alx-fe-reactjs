// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// Simulate an authentication check
const isAuthenticated = true; // You can set this to false for testing the redirect

function ProtectedRoute() {
  if (!isAuthenticated) {
    // Redirect to login or home if not authenticated
    return <Navigate to="/" />;
  }

  // Render the nested routes if authenticated
  return <Outlet />;
}

export default ProtectedRoute;
