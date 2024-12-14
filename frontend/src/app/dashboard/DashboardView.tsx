"use client";

import DashboardLayout from "./DashboardLayout";
import CourseList from "./CourseList";

const DashboardView = () => {
  return (
    <DashboardLayout>
      <h1>Welcome to Your DashboardLayout </h1>
      <CourseList />
    </DashboardLayout>
  );
};

export default DashboardView;
