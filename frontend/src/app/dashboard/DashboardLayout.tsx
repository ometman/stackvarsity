"use client"

import React from "react";
import Header from "../../components/Header";
import AdminSidebar from "./stackoffice/AdminSidebar";
import StudentSidebar from "./student/StudentSidebar";
import { useAuth } from "../context/AuthContext";

import Footer from "../../components/Footer";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { isUser } = useAuth();
  return (
    <>
      <Header />
        <div className="flex flex-1">
          {/* Sidebar */}
          <aside className="w-64 bg-white shadow-md p-1">
             {/* Conditional Rendering Based on User Role */}
            {isUser?.role === "admin" && <AdminSidebar />}
            {isUser?.role === "student" && <StudentSidebar />}
            {/* Fallback if user role is null */}
            {isUser?.role === null && (
              <p className="text-red-500 text-center mt-8">Access Denied</p>
              )}
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
