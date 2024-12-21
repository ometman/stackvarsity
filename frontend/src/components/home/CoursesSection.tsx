import React, { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { CourseCard } from "./CourseCard";
import { courses } from "../../data/courses";

export function CoursesSection() {
  const [coursesRef, coursesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0));
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    const x = e.pageX - (scrollContainerRef.current.offsetLeft || 0);
    const walk = (x - startX) * 1.5; // Adjust for sensitivity
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (scrollContainerRef.current?.offsetLeft || 0));
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    const x = e.touches[0].pageX - (scrollContainerRef.current.offsetLeft || 0);
    const walk = (x - startX) * 1.5; // Adjust for sensitivity
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleDotClick = (index : number) => {
    setActiveIndex(index);
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const scrollAmount = scrollContainer.scrollWidth / courses.length;
      scrollContainer.scrollTo({ left: index * scrollAmount, behavior: "smooth" });
    }
  };

  const handleViewCourse = (courseId: number) => {
    console.log(`View details for course ID: ${courseId}`);
    // Add navigation logic here
  };
  
  const handleEnrollCourse = (courseId: number) => {
    console.log(`Enroll in course ID: ${courseId}`);
    // Add enrollment logic here
  };

  return (
    <section
      ref={coursesRef}
      className={`py-20 bg-white transform transition-all duration-700 ${
        coursesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
          Our Stack Developer Courses
        </h2>
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-scroll no-scrollbar scroll-smooth"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
        >
          {courses.map((course: any, index: number) => (
            <div
              key={index}
              className="flex-none w-full sm:w-1/2 lg:w-1/3 px-3"
            >
              <CourseCard
                course={course}
                onView={handleViewCourse}
                onEnroll={handleEnrollCourse}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6 py-3">
          {courses.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full mx-2 focus:outline-none transition-all duration-300 ${
                activeIndex === index ? "bg-gray-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

