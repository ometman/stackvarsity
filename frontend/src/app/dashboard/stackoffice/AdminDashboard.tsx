// dashboard/stackoffice.tsx

// export function AdminDashboard() {
//   return (
//     <section>
//       <h3 className="text-2xl text-gray-700 font-bold mb-4">Admin Controls</h3>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         <div className="bg-white shadow p-4 rounded-lg">
//           <h4 className="text-lg font-semibold">Manage Courses</h4>
//           <p className="text-gray-500">Add, update, or remove courses from the platform.</p>
//         </div>
//         <div className="bg-white shadow p-4 rounded-lg">
//           <h4 className="text-lg font-semibold">Manage Students</h4>
//           <p className="text-gray-500">View and manage registered students.</p>
//         </div>
//         <div className="bg-white shadow p-4 rounded-lg">
//           <h4 className="text-lg font-semibold">View Reports</h4>
//           <p className="text-gray-500">Generate detailed performance and activity reports.</p>
//         </div>
//       </div>
//     </section>
//   );
// }


import React from "react";
import Link from "next/link";

export function AdminDashboard() {
  return (
    <section>
      {/* Welcome and Summary */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-700">
          Welcome, Admin!
        </h1>
        <div className="text-gray-500">
          <p>Manage and oversee the learning platform.</p>
          <p>
            {/* You can add dynamic data here, e.g., date, time, etc. */}
            {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-100 text-blue-700 p-4 rounded shadow-md text-center">
          <h2 className="text-lg font-bold">Total Students</h2>
          <p className="text-3xl">{/* Dynamic data: totalStudents */}</p>
        </div>
        <div className="bg-green-100 text-green-700 p-4 rounded shadow-md text-center">
          <h2 className="text-lg font-bold">Total Courses</h2>
          <p className="text-3xl">{/* Dynamic data: totalCourses */}</p>
        </div>
        <div className="bg-yellow-100 text-yellow-700 p-4 rounded shadow-md text-center">
          <h2 className="text-lg font-bold">New Enrollments</h2>
          <p className="text-3xl">{/* Dynamic data: newEnrollments */}</p>
        </div>
      </div>

      {/* Action Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Link
          href="/admin/courses"
          className="bg-indigo-100 text-indigo-700 p-4 rounded shadow-md text-center"
        >
          Manage Courses
        </Link>
        <Link
          href="/admin/users"
          className="bg-purple-100 text-purple-700 p-4 rounded shadow-md text-center"
        >
          Manage Users
        </Link>
        <Link
          href="/admin/announcements"
          className="bg-red-100 text-red-700 p-4 rounded shadow-md text-center"
        >
          Manage Announcements
        </Link>
        <Link
          href="/admin/reports"
          className="bg-gray-100 text-gray-700 p-4 rounded shadow-md text-center"
        >
          View Reports
        </Link>
      </div>

      {/* Recent Activity or Other Relevant Sections */}
      <div className="bg-white p-4 rounded shadow-md mb-6">
        <h2 className="text-xl font-bold text-gray-700 mb-4">
          Recent Activity
        </h2>
        {/* Add a list or table of recent activity here */}
      </div>
    </section>
  );
}