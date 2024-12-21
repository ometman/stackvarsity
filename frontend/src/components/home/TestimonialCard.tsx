import React from 'react';

interface TestimonialCardProps {
  name: string;
  quote: string;
}

export function TestimonialCard({ name, quote }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 shadow rounded-lg transform transition-transform duration-500 hover:scale-105">
      <p className="mb-4 text-gray-600">"{quote}"</p>
      <h4 className="font-bold text-gray-900">- {name}</h4>
    </div>
  );
}