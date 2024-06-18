import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Body from "./Body";
import Nav from "./Nav";
import Login from "../authentication//Login";
import SignUp from "../authentication//SignUp";
import { User } from "../types/app.types";

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
        <Route path="" element={<Body />} />
        <Route
          path="Login"
          element={<Login onLogin={handleAuthentication} />}
        />
        <Route
          path="SignUp"
          element={<SignUp onSignUp={handleAuthentication} />}
        />
      </Routes>
    </div>
  );
};

export default TodoApp;
