import React from 'react';
import { useStudents } from '@/features/students/hook';

export default function StudentList() {
  const { students, isLoading, error } = useStudents();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-blue-600 text-lg font-semibold">Loading students...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-600 text-lg font-semibold">
          Error fetching students: {error.message}
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Student List
      </h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        {students.length === 0 ? (
          <p className="text-gray-600 text-center">No students found.</p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {students.map((student: { id: number; name: string; profile_picture?: string }) => (
              <li
                key={student.id}
                className="border rounded-lg p-4 flex flex-col items-center bg-gray-50 shadow hover:shadow-lg transition"
              >
                <img
                  src={student.profile_picture || '/default-profile.png'}
                  alt={`${student.name}'s profile`}
                  className="w-16 h-16 rounded-full mb-4 border-2 border-blue-500"
                />
                <p className="font-semibold text-gray-700">{student.name}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
