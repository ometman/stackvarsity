import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

const DashboardLayout = ({ children }) => {
    return (
      <div className="dashboard-layout">
        <Header />
        <Sidebar />
        <main className="content">{children}</main>
        <style jsx>{`
          .dashboard-layout {
            display: flex;
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

