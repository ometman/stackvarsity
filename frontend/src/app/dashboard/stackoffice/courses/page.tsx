"use client";

import React from 'react';
import { useCourses } from '@/features/courses/hooks';
import CourseCard from "@/app/courses/CourseCard";

const CoursesList: React.FC = () => {
  const { courses, isLoading, hasError, isEmpty } = useCourses();

  if (isEmpty) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-blue-600 text-lg font-semibold">
          No courses available at the moment.
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-blue-600 text-lg font-semibold">Loading courses...</div>
      </div>
    );
  }

  if (hasError) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-600 text-lg font-semibold">
          Failed to load courses. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <section>
      <div className="flex p-4 bg-gray-100 items-center justify-between">
            <h1 className="flex text-2xl  font-bold text-gray-700">
              <p className="text-1xl">Available Courses</p>
            </h1>
            <p className="text-gray-500">
              "Empower your learning journey with us."
            </p>
      </div>
      <div className="bg-white shadow-md rounded-lg">
        {courses.length === 0 ? (
          <p className="text-gray-600 text-center">No courses available.</p>
        ) : (
          <CourseCard course={courses} />
        )}
      </div>
    </section>
  );
};

export default CoursesList;