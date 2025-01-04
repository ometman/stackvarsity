// studentgrades.js
"use client";

import React from 'react';
import { useGrades } from "@/features/grades/hooks"

const StudentGrades = () => {
  const { grades, isLoading, hasError, isEmpty } = useGrades();

  if (isEmpty) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-blue-600 text-lg font-semibold">
          You have no grades now.
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-blue-600 text-lg font-semibold">Loading grades...</div>
      </div>
    );
  }

  if (hasError) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-600 text-lg font-semibold">
          Failed to load grades. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <section>
      <div className="flex p-4 bg-gray-100 items-center justify-between">
            <h1 className="flex text-2xl  font-bold text-gray-700">
              <p className="text-1xl">Grades</p>
            </h1>
            <p className="text-gray-500">
              "Empower your learning."
            </p>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {grades.map((grade) => (
            <div 
              key={grade.enrollment_id} 
              className="rounded-lg shadow-md overflow-hidden border bg-gray-50 shadow hover:shadow-lg transition p-6"
            >
              <h3 className="text-gray-700 text-lg font-semibold mb-2">
                {grade.first_name + ` ${grade.last_name}` } (ID: { grade.enrollment_id })
              </h3>
              <p className="text-gray-700">Course: {grade.course_title}</p>
              <p className="text-gray-700">Grade: {grade.grade}</p>
              <p className="text-gray-700">Remarks: Good </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentGrades;