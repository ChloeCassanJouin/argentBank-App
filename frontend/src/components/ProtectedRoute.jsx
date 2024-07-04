import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ element: Component }) => {
  const token = useSelector((state) => state.token.value);

  return token ? <Component /> : <Navigate to="/login" />;
};

export default ProtectedRoute;