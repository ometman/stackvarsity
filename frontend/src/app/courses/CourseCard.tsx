import Link from "next/link";

type Course = {
  id: number;
  title: string;
  category: string;
  description: string;
  duration: string;
};

const CourseCard = ({ course }: { course: Course }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <h2 className="text-xl font-semibold">{course.title}</h2>
      <p className="text-gray-500">{course.category}</p>
      <p className="mt-2 text-sm">{course.description}</p>
      <p className="mt-4 font-bold">Duration: {course.duration}</p>
      <Link
        href={`/courses/${course.id}`}
        className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        View Details
      </Link>
    </div>
  );
};

export default CourseCard;
