// studentgrades.js
"use client";

import React from 'react';
import { useStudentGrades } from "@/features/grades/hooks"

const StudentGrades = () => {
  const { grades, isLoading, hasError, isEmpty } = useStudentGrades();

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
          {grades.length === 0 ? (
            <p className="text-gray-600 text-center">No Grading Available.</p>
          ) : (
          grades.map((grade: any, id: number) => (
            <div 
              key={id} 
              className="rounded-lg shadow-md overflow-hidden border bg-gray-50 shadow hover:shadow-lg transition p-6"
            >
              <h3 className="text-gray-700 text-lg font-semibold mb-2">Course: {grade.course_title}</h3>
              <p className="text-gray-700">Grade: {grade.grade}</p>
              <p className="text-gray-700">Remarks: {grade.comments} </p>
            </div>
          )))}
        </div>
      </div>
    </section>
  );
};

export default StudentGrades;