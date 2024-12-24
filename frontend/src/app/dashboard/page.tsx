// dashboard/page.tsx
"use client";

import { useAuth } from "../context/AuthContext";
import DashboardView from "./DashboardView";
export default function Dashboard() {

  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <p> You are not authenticated </p>
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
    <DashboardView />
    </div>
  );
}  
