import React from "react";
import { BookOpen, Clock, Users } from 'lucide-react';

type Course = {
  id: number;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  students?: number;
  image: string;
}

interface CourseCardProps {
  course: Course;
  onView: (id: number) => void;
  onEnroll: (id: number) => void;
}

export function CourseCard({ course, onView, onEnroll }: CourseCardProps) {

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        className="h-48 w-full object-cover"
        src={course.image}
        alt={course.title}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-4">{course.description}</p>
        
        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-500">
            <BookOpen className="h-4 w-4 mr-2" />
            <span>Instructor: {course.instructor}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="h-4 w-4 mr-2" />
            <span>Duration: {course.duration}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Users className="h-4 w-4 mr-2" />
            <span>{course.students} students enrolled</span>
          </div>
        </div>

        <div className="mt-4 flex space-x-2">
          <button 
            onClick={() => onView(course.id)}
            className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
          >
            View Details
          </button>
          <button 
            onClick={() => onEnroll(course.id)}
            className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}