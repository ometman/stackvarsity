import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-6 text-xl font-medium text-gray-900 text-center">
        {title}
      </h3>
      <p className="mt-2 text-gray-600 text-center">{description}</p>
    </div>
  );
}