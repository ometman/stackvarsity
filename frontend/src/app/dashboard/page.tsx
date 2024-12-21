// dashboard/page.tsx
"use client";
import Link from 'next/link';
import { useAuth } from "../context/AuthContext";
import DashboardView from "./DashboardView";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
export default function Dashboard() {

  const { isAuthenticated, token } = useAuth();

  if (!isAuthenticated) {
    return <p> You are not authenticated </p>
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <main className="container mx-auto py-10">
        <h2 className="text-4xl text-gray-600 font-bold mb-6">Learn Web Development Easily</h2>
        <p className="text-lg text-gray-400 mb-4">
          Join our platform to learn, practice, and master web development skills.
        </p>
       {/*  <Link href="/dashboard" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Go to Dashboard
        </Link> */}
        <DashboardView />
      </main>
      <Footer />
    </div>
  );
}  