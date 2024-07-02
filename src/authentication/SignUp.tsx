import React, { useState } from "react";
import { User } from "../types/app.types";

interface SignUpProps {
  onSignUp: (user: User) => void;
}
const SignUp: React.FC<SignUpProps> = ({ onSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (localStorage.getItem(email)) {
      alert("email already exists");
    } else {
      localStorage.setItem(email, JSON.stringify({ password, todos: [] }));
      onSignUp({
        email,
        password,
        todos: [],
      });
    }
  };

  return (
    <div>
      <div className="sign-up">Sign Up</div>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <div className="email-input">
          <input
            className="sign-up-input"
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="password-input">
          <input
            className="sign-up-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="btn-container">
          <button className="sign-up-btn" type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
