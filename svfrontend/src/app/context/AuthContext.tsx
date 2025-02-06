"use client";

import React, { createContext, useState, useContext, useEffect } from "react";

interface User {
  id: number;
  username: string;
  role: string;
  email: string;
}

type AuthContextType = {
  isAuthenticated: boolean;
  token: string | null;
  isUser: User | null;
  login: (token: string, isUser: User) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [isUser, setIsUser] = useState<User | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    const storedUser = localStorage.getItem("authUser");

    if (storedToken && storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        login(storedToken, parsedUser); 
      } catch (error) {
        console.error("Error parsing stored user data:", error);
      }
    }
  }, []);

  const login = (token: string, isUser: User) => {
    try {
      setToken(token);
      setIsAuthenticated(true);
      setIsUser(isUser);
      localStorage.setItem("authToken", token);
      localStorage.setItem("authUser", JSON.stringify(isUser));
    } catch (error) {
      console.error("Error during login:", error);
      // Handle login error (e.g., display an error message to the user)
    }
  };

  const logout = () => {
    setToken(null);
    setIsAuthenticated(false);
    setIsUser(null);
    localStorage.removeItem("authToken");
    localStorage.removeItem("authUser");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, isUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};