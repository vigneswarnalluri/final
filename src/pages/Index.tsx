
import React from 'react';
import { Navigate } from 'react-router-dom';

const Index = () => {
  // Redirect to Home component since we're using /home as the main page
  return <Navigate to="/" replace />;
};

export default Index;
