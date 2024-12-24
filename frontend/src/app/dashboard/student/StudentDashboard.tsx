import React from "react";
import Link from "next/link";
import { useAuth } from "@/app/context/AuthContext";
export function StudentDashboard() {
  const { isUser } = useAuth();
    return (
      <section>
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-700">Welcome back, {isUser?.email}!</h1>
          <p className="text-gray-500">"Empower your learning journey with us."</p>
        </div>

         {/* <!-- Announcements --> */}
         <div >
          
          <div className="bg-gray-50 p-4 rounded shadow-md mb-8">
            <h2 className="text-xl font-bold text-red-600 mb-4">Announcements</h2>
            <p className="text-gray-600">"Assignment due for Web Development on Dec 25th."</p>
          </div>
        </div>

        {/*  Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <Link href="#" className="bg-blue-100 text-blue-700 p-4 rounded shadow-md text-center">
            Progress Tracker
          </Link>
          <Link href="#" className="bg-green-100 text-green-700 p-4 rounded shadow-md text-center">
            Grades
          </Link>
          <Link href="#" className="bg-yellow-100 text-yellow-700 p-4 rounded shadow-md text-center">
            Finances
          </Link>
          <Link href="#" className="bg-purple-100 text-purple-700 p-4 rounded shadow-md text-center">
            Resources
          </Link>
        </div>

        {/* <!-- Onboarding --> */}
        <div className="bg-indigo-50 p-4 rounded shadow-md mb-6">
          <h2 className="text-lg font-bold text-indigo-700 mb-2">New Here?</h2>
          <p className="text-gray-600">Explore your dashboard with our quick guide and setup tips.</p>
          <button className="bg-blue-700 text-white px-4 py-2 rounded mt-4">Get Started</button>
        </div>

        {/* <!-- Course Highlights --> */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-700 mb-4">Your Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* <!-- Example Course Card --> */}
            <div className="bg-white p-4 rounded shadow-md">
              <h3 className="font-bold text-gray-700">Full-Stack Web Development</h3>
              <p className="text-sm text-gray-500">70% Complete</p>
              <div className="bg-gray-200 h-2 rounded-full mt-2">
                <div className="bg-blue-600 h-2 rounded-full w-70%"></div>
              </div>
            </div>
            {/* <!-- Add more courses --> */}
          </div>
        </div>

       
      </section>
    );
  }
  