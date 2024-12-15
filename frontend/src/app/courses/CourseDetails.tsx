"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Course = {
  id: number;
  title: string;
  category: string;
  description: string;
  duration: string;
};

const CourseDetails = ({ params }: { params: { id: string } }) => {
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    fetch(`/api/courses/${params.id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Course not found");
        }
        return res.json();
      })
      .then((data) => {
        setCourse(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        router.push("/courses");
      });
  }, [params.id, router]);

  if (loading) return <p>Loading...</p>;
  if (!course) return <p>Course not found</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
      <p className="text-lg text-gray-700">{course.description}</p>
      <p className="mt-4">Category: {course.category}</p>
      <p>Duration: {course.duration}</p>
    </div>
  );
};

export default CourseDetails;
