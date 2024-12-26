"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FaHome,
  FaBook,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaClipboardCheck,
} from "react-icons/fa";
import {
  FaArrowLeft,
  FaArrowRight,
  FaChartLine,
} from "react-icons/fa6";

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    // Add your logout logic here
    console.log("User logged out");
    router.push("/login");
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? <FaArrowLeft /> : <FaArrowRight />}
      </button>

      <div className="menu">
        <Link href="/admin/dashboard"> {/* Updated link */}
          <p className="menu-item">
            <FaHome />
            {isOpen && <span>Dashboard</span>}
          </p>
        </Link>

        <Link href="/admin/courses"> {/* Updated link */}
          <p className="menu-item">
            <FaBook />
            {isOpen && <span>Courses</span>}
          </p>
        </Link>

        <Link href="/admin/users"> {/* Updated link */}
          <p className="menu-item">
            <FaUser />
            {isOpen && <span>Users</span>}
          </p>
        </Link>

        <Link href="/admin/analytics"> {/* Updated link */}
          <p className="menu-item">
            <FaChartLine /> {/* Changed icon */}
            {isOpen && <span>Analytics</span>}
          </p>
        </Link>

        <Link href="/admin/reports">
          <p className="menu-item">
            <FaClipboardCheck />
            {isOpen && <span>Reports</span>}
          </p>
        </Link>

        {/* Removed unnecessary links */}

        <Link href="/admin/settings"> {/* Updated link */}
          <p className="menu-item">
            <FaCog />
            {isOpen && <span>Settings</span>}
          </p>
        </Link>

        <button className="menu-item logout" onClick={handleLogout}>
          <FaSignOutAlt />
          {isOpen && <span>Logout</span>}
        </button>
      </div>

      <style jsx>{`
        .sidebar {
          width: ${isOpen ? "100%" : "30%"};
          background-color: #1d4fd8;
          color: #fff;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: ${isOpen ? "flex-start" : "center"};
          padding: 10px;
          transition: width 0.3s ease;
        }

        .toggle-btn {
          background: none;
          border: none;
          color: #fff;
          cursor: pointer;
          margin-bottom: 20px;
          font-size: 18px;
        }

        .menu {
          display: flex;
          flex-direction: column;
          gap: 15px;
          width: 100%;
        }

        .menu-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px;
          border-radius: 5px;
          text-decoration: none;
          color: #fff;
          transition: background-color 0.3s ease;
        }

        .menu-item:hover {
          background-color: #41454b;
        }

        .logout {
          margin-top: auto;
        }

        span {
          font-size: 16px;
        }
      `}</style>
    </div>
  );
};

export default AdminSidebar;