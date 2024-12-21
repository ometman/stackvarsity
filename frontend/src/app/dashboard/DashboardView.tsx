
import DashboardLayout from "./DashboardLayout";
import CourseList from "../courses/CourseList";

const DashboardView = () => {
  return (
    <DashboardLayout >
      <h1>Welcome to Your DashboardLayout </h1>
      <CourseList />
    </DashboardLayout>
  );
};

export default DashboardView;
