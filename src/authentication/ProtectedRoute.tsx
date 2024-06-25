
import React from "react";
import { Navigate } from "react-router-dom";
// import { useAuth } from "../authentication/AuthContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  if (!localStorage.getItem("user")) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
