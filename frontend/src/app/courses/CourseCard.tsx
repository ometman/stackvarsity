import { BookOpen, Clock, Users } from 'lucide-react';
import { JSX } from 'react';

type Course = {
  map(arg0: (course: any, index: any) => JSX.Element): import("react").ReactNode;
  id: number;
  title: string;
  category: string;
  description: string;
  duration: string;
};

const CourseCard = ({ course }: { course: Course }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
       {course.map((course: any, index) => ( 
        <div key={index} className="bg-white rounded-lg shadow-md p-4 overflow-hidden">
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
              <button className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                View Details
              </button>
              <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
       ))}
    </div>
    </div> 
  );
};

export default CourseCard;