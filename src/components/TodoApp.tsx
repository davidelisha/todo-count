import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Body from "./Body";
import Nav from "./Nav";
import Login from "../authentication//Login";
import SignUp from "../authentication//SignUp";
import { User } from "../types/app.types";
import ProtectedRoute from "../authentication/ProtectedRoute";
import AuthRoute from "../authentication/AuthRoute";

const TodoApp: React.FC = () => {
  const [user, setUser] = useState<User>();

  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")!);
    console.log(user);
    if (user) {
      setUser(user);
    }
  }, []);

  const handleAuthentication = (user: User) => {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
    navigate("");
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(undefined);
    navigate("/login");
  };

  return (
    <div className="black">
      <Nav user={user} onLogout={handleLogout} />

      <Routes>
        <Route
          path=""
          element={
            <ProtectedRoute>
              <Body />
            </ProtectedRoute>
          }
        />

        <Route
          path="Login"
          element={
            <AuthRoute>
              <Login onLogin={handleAuthentication} />
            </AuthRoute>
          }
        />
        <Route
          path="SignUp"
          element={
            <AuthRoute>
              <SignUp onSignUp={handleAuthentication} />
            </AuthRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default TodoApp;
