import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { user } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) =>
        user.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default ProtectedRoute;
