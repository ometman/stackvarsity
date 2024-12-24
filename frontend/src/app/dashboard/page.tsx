// // dashboard/page.tsx
// "use client";
// // import Link from 'next/link';
// import { AdminDashboard } from "./stackoffice/AdminDashboard";
// import { StudentDashboard } from "./student/StudentDashboard";
// import { useAuth } from "../context/AuthContext";
// // import DashboardView from "./DashboardView";
// import Header from '../../components/Header';
// import Footer from '../../components/Footer';
// export default function Dashboard() {

//   const { isAuthenticated, isUser } = useAuth();

//   if (!isAuthenticated) {
//     return <p> You are not authenticated </p>
//   }

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Header />
//       <main className="container mx-auto py-10">
        // <h2 className="text-4xl text-gray-600 font-bold mb-6">
        //   Welcome, {isUser?.email || "Guest"}!
        // </h2>
        // <p className="text-lg text-gray-400 mb-4">
        //   {isUser?.role === "admin"
        //     ? "Admin Dashboard - Manage Tutors, Courses, Students, and More"
        //     : "Student Dashboard - Access Your Courses and Progress"}
        // </p>
        // {/* Conditional Rendering Based on User Role */}
        // {isUser?.role === "admin" ? <AdminDashboard /> : <StudentDashboard />}
//       </main>
//       <Footer />
//     </div>
//   );
// }  


// dashboard/page.tsx
"use client";
// import Link from 'next/link';

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
