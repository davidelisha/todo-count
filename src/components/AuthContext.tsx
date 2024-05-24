import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "", isAuthenticated: false });

  const login = (userData) => {
    // Normally, you would save a token in localStorage and validate with a backend
    setUser({ name: userData.name, isAuthenticated: true });
  };

  const logout = () => {
    // Normally, you would remove the token from localStorage
    setUser({ name: "", isAuthenticated: false });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
