import { useState, useEffect } from "react";
import apiClient from "@/utils/api"; // Ensure apiClient is correctly configured
import CourseCard from "./CourseCard";

type Course = {
  id: number;
  title: string;
  category: string;
  description: string;
  duration: string;
};

const CourseList = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true; // Prevent state updates on unmounted components
    setLoading(true);
    setError(null); // Reset error state before fetching

    apiClient("/api/courses")
      .then((res) => {
        if (isMounted) {
          setCourses(res.data); // Assuming `apiClient` parses JSON and returns `res.data`
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          console.error("Error fetching courses:", err);
          setError("Failed to load courses. Please try again later.");
          setLoading(false);
        }
      });

    return () => {
      isMounted = false; // Cleanup
    };
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Available Courses</h1>
      {loading ? (
        <p className="text-lg text-gray-500">Loading courses...</p>
      ) : error ? (
        <p className="text-lg text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.length > 0 ? (
            courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))
          ) : (
            <p className="text-lg text-gray-500">No courses available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CourseList;
