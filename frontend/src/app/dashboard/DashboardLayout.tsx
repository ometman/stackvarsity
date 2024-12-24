"use client"

import React from "react";
import Header from "../../components/Header";
import Sidebar from "./Sidebar";
import Footer from "../../components/Footer";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
        <div className="flex flex-1">
          {/* Sidebar */}
          <aside className="w-64 bg-white shadow-md p-1">
            <Sidebar />
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-6 bg-gray-50">
            {children}
          </main>
        </div>
      <Footer />
    </>
  );
};

export default DashboardLayout;
