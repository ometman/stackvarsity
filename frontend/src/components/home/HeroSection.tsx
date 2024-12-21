import React, { useEffect } from 'react';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { BookOpen } from 'lucide-react';

export function HeroSection() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1});

  return (
    <section
      ref={heroRef}
      className={`bg-indigo-600 text-white text-center py-20 transform transition-all duration-700 ${
        heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold sm:text-4xl sm:tracking-tight lg:text-5xl">
          Master Modern Web Development
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-xl text-indigo-100">
          Learn MERN stack development from industry experts. Start your journey to becoming a full-stack developer today.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/courses"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
          >
            <BookOpen className="h-5 w-5 mr-2" />
            Browse Courses
          </Link>
          <Link
            href="/students"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-400"
          >
            Join Now
          </Link>
        </div>
      </div>
    </section>
  );
}