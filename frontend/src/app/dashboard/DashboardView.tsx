// export default DashboardView;
import React from "react";
// import DashboardLayout from "./layout";
import { AdminDashboard } from "./stackoffice/AdminDashboard";
// import { StudentDashboard } from "./student/layout";
// import StudentLayout from "./student/layout";
import { useAuth } from "../context/AuthContext";

const DashboardView = () => {
  const { isAuthenticated, isUser } = useAuth();

  if (!isAuthenticated) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500 text-lg">You are not authenticated. Please log in.</p>
      </div>
    );
  }

  const role = isUser?.role;

  if (role === "admin") {
    return (        
    <AdminDashboard />
    );
  }

  if (role === "student") {
    return (
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-700">Welcome Back, {isUser?.email}!</h1>
            <p className="text-gray-500">"Empower your learning journey with us."</p>
          </div>
    );
  }

  return (
      <div className="text-center py-10">
        <p className="text-red-500 text-lg">
          Access Denied: You do not have permission to access this page.
        </p>
      </div>
  );
};

export default DashboardView;