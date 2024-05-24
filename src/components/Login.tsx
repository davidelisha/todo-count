import React, { useState } from "react";
import { useAuth } from "./AuthContext.tsx";

const Login = () => {
  const [name, setName] = useState("");
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ name });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
