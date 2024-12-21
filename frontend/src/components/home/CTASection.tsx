  import React from "react";
  import Link from "next/link";
  import { useInView } from "react-intersection-observer";

  export function CTASection() {
    const [ CTARef, CTAInView ] = useInView({ triggerOnce: true, threshold: 0.3})

  return (
    <section 
    ref={CTARef}
    className={`bg-indigo-600 text-white text-center py-20 transform transition-all duration-700 ${
      CTAInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}>
        <div 
        ref={CTARef}
        className={`container mx-auto transform transition-all duration-700 ${
          CTAInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-30"
        }`}>
            <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
            <p className="mb-8">Join thousands of students advancing their careers with StackVarsity.</p>
            <Link
            href="/auth/signup"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-200 transition-transform transform hover:scale-105"
            >
            Sign Up Today
            </Link>
        </div>
    </section>
  );
};