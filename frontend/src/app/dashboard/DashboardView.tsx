import React from "react";
import DashboardLayout from "./DashboardLayout";
import { AdminDashboard } from "./stackoffice/AdminDashboard";
import { StudentDashboard } from "./student/StudentDashboard";
import { useAuth } from "../context/AuthContext";

const DashboardView = () => {

  const { isAuthenticated, isUser } = useAuth();

  // const PageTitle = isUser?.role === "student" ? "Student Dashboard" : "Admin Dashboard";

  if (!isAuthenticated) {
    return <p> You are not authenticated </p>
  }
  return (
    <DashboardLayout>
        {/* <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-700">Welcome Back, {isUser?.email}!</h1>
          <p className="text-gray-500">"Empower your learning journey with us."</p>
        </div> */}
        <p className="text-lg text-gray-400 mb-4">
          {isUser?.role === "admin" 
            && "Admin Dashboard - Manage Tutors, Courses, Students, and More"
          }
          {isUser?.role === "student" 
            && "Student Dashboard - Access Your Courses and Progress"
          }
        </p>
        {/* Conditional Rendering Based on User Role */}
        {isUser?.role === "basic" && <AdminDashboard />}
        {isUser?.role === "student" && <StudentDashboard />}
         {/* Fallback if user role is null */}
         {isUser?.role === null && (
          <p className="text-red-500 text-center mt-8">Access Denied</p>
          )}
    </DashboardLayout>
  );
};

export default DashboardView;
