import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ element: Component }) => {
  const token = useSelector((state) => state.user.token);

  return token ? <Component /> : <Navigate to="/login" />;
};

export default ProtectedRoute;