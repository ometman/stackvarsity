import DashboardLayout from "./DashboardLayout";
import CourseList from "../../features/dashboard/CourseList";

const DashboardView = () => {
  return (
    <DashboardLayout>
      <h1>Welcome to Your Dashboard</h1>
      <CourseList />
    </DashboardLayout>
  );
};

export default DashboardView;
