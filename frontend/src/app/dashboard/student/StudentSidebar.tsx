// components/Sidebar.js
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  FaHome,
  FaBook,
  FaUser,
  FaCog,
  FaTools,
  FaSignOutAlt
} from "react-icons/fa";
import { 
  FaArrowLeft, 
  FaArrowRight, 
  FaBookOpen, 
  FaGraduationCap, 
  FaPeopleGroup 
} from "react-icons/fa6";
import { BsFillBarChartLineFill } from "react-icons/bs";

const StudentSidebar = () => {
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
        <Link href="/dashboard">
          <p className="menu-item">
            <FaHome />
            {isOpen && <span>Home</span>}
          </p>
        </Link>

        <Link href="/courses">
          <p className="menu-item">
            <FaBook />
            {isOpen && <span>Courses</span>}
          </p>
        </Link>
        <Link href="/student/progress">
          <p className="menu-item">
            <BsFillBarChartLineFill />
            {isOpen && <span>Progress</span>}
          </p>
        </Link>
        <Link href="/student/grades">
          <p className="menu-item">
            <FaGraduationCap  />
            {isOpen && <span>Grades</span>}
          </p>
        </Link>
        <Link href="/student/resources">
          <p className="menu-item">
            <FaBookOpen />
            {isOpen && <span>Resources</span>}
          </p>
        </Link>
        <Link href="/student/community">
          <p className="menu-item">
            <FaPeopleGroup />
            {isOpen && <span>Community</span>}
          </p>
        </Link>
        <Link href="/student/profile">
          <p className="menu-item">
            <FaUser />
            {isOpen && <span>Profile</span>}
          </p>
        </Link>
        <Link href="/support">
          <p className="menu-item">
            <FaTools />
            {isOpen && <span>Support</span>}
          </p>
        </Link>
        <Link href="/settings">
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

export default StudentSidebar;