// dashboard/page.tsx
"use client";

import { useAuth } from "../context/AuthContext";
import { AdminDashboard } from "./stackoffice/AdminDashboard"
import StudentDashboard from "./student/page";
export default function Dashboard() {
  const { isAuthenticated, isUser } = useAuth();

  if (!isAuthenticated) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500 text-lg">
          You are not authenticated. Please log in.
        </p>
      </div>
    );
  };

  const role = isUser?.role;

  if (role === "admin") {
    return (     
      <div className="min-h-screen flex flex-col bg-gray-100">
        <AdminDashboard />
      </div>   
    
    );
  }

  if (role === "student") {
    return (
      <div className="min-h-screen flex flex-col bg-gray-100">
          <StudentDashboard />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="text-center py-10">
        <p className="text-red-500 text-lg">
          Access Denied: You do not have permission to access this page.
        </p>
      </div>
    </div>
  );
};
