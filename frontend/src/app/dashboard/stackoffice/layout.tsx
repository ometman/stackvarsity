import React from "react";
import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
        <h1 className="text-lg font-bold">Admin Dashboard</h1>
        <nav>
          <Link href="/dashboard/admin/settings" className="hover:text-blue-400">
            Settings
          </Link>
        </nav>
      </header>

      {/* Main Content with Sidebar */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-100 p-4 shadow-md">
          <nav className="flex flex-col gap-4">
            <Link href="/dashboard/admin" className="text-gray-800 hover:text-blue-500">
              Admin Home
            </Link>
            <Link href="/dashboard/admin/users" className="text-gray-800 hover:text-blue-500">
              Manage Users
            </Link>
            <Link href="/dashboard/admin/reports" className="text-gray-800 hover:text-blue-500">
              Reports
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-gray-50">{children}</main>
      </div>
    </div>
  );
}
