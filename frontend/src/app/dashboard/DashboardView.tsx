import React from "react";
import DashboardLayout from "./DashboardLayout";
import { AdminDashboard } from "./stackoffice/AdminDashboard";
import { StudentDashboard } from "./student/StudentDashboard";
import { useAuth } from "../context/AuthContext";

const DashboardView = () => {

  const { isAuthenticated, isUser } = useAuth();

  // const pageTitle = isUser?.role === "student" ? "Student Dashboard" : "Admin Dashboard";

  if (!isAuthenticated) {
    return <p> You are not authenticated </p>
  }
  return (
    <DashboardLayout>
        <p className="text-lg text-gray-400 mb-4">
          {isUser?.role === "admin" 
            && "Admin Dashboard - Manage Tutors, Courses, Students, and More"
          }
          {isUser?.role === "student" 
            && "Student Dashboard - Access Your Courses and Progress"
          }
        </p>
        {/* Conditional Rendering Based on User Role */}
        {isUser?.role === "admin" ? <AdminDashboard /> : <StudentDashboard />}
         {/* Fallback if user role is null */}
        {isUser?.role === null && <p>Access Denied</p>}
    </DashboardLayout>
  );
};

export default DashboardView;
