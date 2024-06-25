import React from "react";
import { Navigate } from "react-router-dom";

interface AuthRouteProps {
  children: React.ReactNode;
}

/**
 * This component redirects to the home page if the user is logged in
 */
const AuthRoute: React.FC<AuthRouteProps> = ({ children }) => {
  if (localStorage.getItem("user")) {
    return <Navigate to="/" />;
  }

  return children;
};

export default AuthRoute;
