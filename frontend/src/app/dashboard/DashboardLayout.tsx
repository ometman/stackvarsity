import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <Header />
      <Sidebar />
      <main className="content">{children}</main>
      <Footer />
      <style jsx>{`
        .dashboard-layout {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        .content {
          flex-grow: 1;
          padding: 20px;
        }
      `}</style>
    </div>
  );
};

export default DashboardLayout;
