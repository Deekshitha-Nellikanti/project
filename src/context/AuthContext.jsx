import React, { createContext, useContext, useState } from 'react';
import toast from 'react-hot-toast';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (email, password) => {
    // Simulate API call
    if (email === "demo@example.com" && password === "password") {
      setUser({ email, name: "Demo User" });
      setIsAuthenticated(true);
      toast.success('Welcome back!');
      return true;
    }
    toast.error('Invalid credentials');
    return false;
  };

  const register = (name, email, password) => {
    // Simulate API call
    setUser({ email, name });
    setIsAuthenticated(true);
    toast.success('Registration successful!');
    return true;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    toast.success('Logged out successfully');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};