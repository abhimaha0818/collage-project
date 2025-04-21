import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const role = localStorage.getItem('role');

  // If not logged in, redirect to login page
  if (!role /* or !token */) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;