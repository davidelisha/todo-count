import React, { useState } from "react";
import { User } from "../types/app.types";

interface LoginProps {
  onLogin: (user: User) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const storedUser: User = JSON.parse(localStorage.getItem(email) ?? "");
    if (storedUser?.password === password) {
      onLogin({
        email,
        password,
        todos: storedUser.todos,
      });
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div>
      <div className="login">Login</div>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="email-input">
          <input
            className="login-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="password-input">
          <input
            className="login-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="btn-container">
          <button className="login-btn" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
