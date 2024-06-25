import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

/**
 * This component prevents access to the home page if the user is not logged in
 */
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  if (!localStorage.getItem("user")) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
