"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaUserCircle, FaBell, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { useAuth } from "../app/context/AuthContext"; // Import useAuth

const Header = () => {
  const router = useRouter();
  const { isAuthenticated, logout } = useAuth(); // Access auth state and logout function
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout(); // Call logout from context
    router.push("/");
  };

  return (
    <header className="bg-indigo-50 text-l shadow-md font-bold text-blue-700 transition-colors duration-300">
     <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold hover:text-blue-300">
          <Link href="/">StackVarsity</Link>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {!isAuthenticated ? (
            <>
              <Link href="/about" className="hover:text-blue-300">
                About
              </Link>
              <Link href="/courses" className="hover:text-blue-300">
                Courses
              </Link>
              <Link href="/contact" className="hover:text-blue-300">
                Contact
              </Link>
            </>
          ) : (
            <>
              <Link href="/dashboard" className="hover:text-gray-300">
                Dashboard
              </Link>
              <Link href="/my-courses" className="hover:text-gray-300">
                My Courses
              </Link>
              <Link href="/progress" className="hover:text-gray-300">
                Progress
              </Link>
            </>
          )}
        </nav>

        {/* Header Actions */}
        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <FaSearch className="text-xl cursor-pointer hover:text-gray-300" />
              <FaBell className="text-xl cursor-pointer hover:text-gray-300" />
              <FaUserCircle
                className="text-2xl cursor-pointer hover:text-gray-300"
                title="Profile"
              />
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/auth/login"
                className="text-blue-600 bg-white px-4 py-1 rounded hover:bg-blue-600 hover:text-white active:bg-green-600"
              >
                Login
              </Link>
              <Link
                href="/auth/signup"
                className="text-blue-600 bg-white px-4 py-1 rounded hover:bg-blue-600 hover:text-white active:bg-green-600"
              >
                Sign Up
              </Link>
            </>
          )}

          {/* Hamburger Menu */}
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-blue-700 text-white space-y-4 p-4">
          {!isAuthenticated ? (
            <>
              <Link href="/about" className="block hover:text-gray-300">
                About
              </Link>
              <Link href="/courses" className="block hover:text-gray-300">
                Courses
              </Link>
              <Link href="/contact" className="block hover:text-gray-300">
                Contact
              </Link>
            </>
          ) : (
            <>
              <Link href="/dashboard" className="block hover:text-gray-300">
                Dashboard
              </Link>
              <Link href="/my-courses" className="block hover:text-gray-300">
                My Courses
              </Link>
              <Link href="/progress" className="block hover:text-gray-300">
                Progress
              </Link>
            </>
          )}
        </nav>
      )}
    </header>
  );
};

export default Header;