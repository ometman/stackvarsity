"use client"

import React from "react";
import Header from "../../components/Header";
import DashboardSidebar from "./DashboardSidebar";
import { useAuth } from "../context/AuthContext";
import Footer from "../../components/Footer";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <p> You are not authenticated </p>
  }

  return (
    <>
      <Header />
        <div className="flex flex-1">
          {/* Sidebar */}
          <aside className="w-64 bg-white shadow-md p-1">            
            <DashboardSidebar />
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-2 bg-gray-50">
            {children}
          </main>
        </div>
      <Footer />
    </>
  );
};

export default DashboardLayout;
