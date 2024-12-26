"use client";

import React, { createContext, useState, useContext } from "react";

interface User {
  id: number,
  username: string,
  role: string,
  email: string,
}

type AuthContextType = {
  isAuthenticated: boolean;
  token: string | null;
  isUser: User | null;
  login: (
    token: string,
    isUser: {id: number, role: string, email: string}
    ) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);


export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [ token, setToken] = useState<string | null>(null);
  const [ isUser, setIsUser] = useState<{id: number, username: string, role: string, email: string} | null>(null);


  const login = (token: string, isUser: {id: number, username: string, role: string, email: string}) => {
    setToken(token);
    setIsAuthenticated(true);
    setIsUser({ 
      id: isUser.id,
      username: isUser.username,
      role: isUser.role,
      email: isUser.email 
    });
    const stackuser = JSON.stringify(isUser);
    localStorage.setItem("authUser", stackuser)
    localStorage.setItem("authToken", token);
  };

  const logout = () => {
    setToken(null);
    setIsAuthenticated(false);
    // setRole(null)
    localStorage.removeItem("authToken");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, login, logout, isUser }}>
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
