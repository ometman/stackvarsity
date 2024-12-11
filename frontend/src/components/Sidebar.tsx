// components/Sidebar.js
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaHome, FaBook, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
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
        {isOpen ? "<" : ">"}
      </button>

      <div className="menu">
        <Link href="/dashboard">
          <a className="menu-item">
            <FaHome />
            {isOpen && <span>Home</span>}
          </a>
        </Link>

        <Link href="/courses">
          <a className="menu-item">
            <FaBook />
            {isOpen && <span>Courses</span>}
          </a>
        </Link>

        <Link href="/profile">
          <a className="menu-item">
            <FaUser />
            {isOpen && <span>Profile</span>}
          </a>
        </Link>

        <Link href="/settings">
          <a className="menu-item">
            <FaCog />
            {isOpen && <span>Settings</span>}
          </a>
        </Link>

        <button className="menu-item logout" onClick={handleLogout}>
          <FaSignOutAlt />
          {isOpen && <span>Logout</span>}
        </button>
      </div>

      <style jsx>{`
        .sidebar {
          width: ${isOpen ? "200px" : "50px"};
          background-color: #2d2f33;
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

export default Sidebar;
