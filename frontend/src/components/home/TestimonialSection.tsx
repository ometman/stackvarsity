import React from 'react';
import { useInView } from 'react-intersection-observer';
import { TestimonialCard } from './TestimonialCard';
import { testimonials } from '../../data/testimonials';

export function TestimonialsSection() {
  const [testimonialRef, testimonialInView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      ref={testimonialRef}
      className={`py-20 bg-gray-100 transform transition-all duration-700 ${
        testimonialInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-5">
        <h2 className="text-3xl text-gray-900 font-bold text-center mb-10">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}