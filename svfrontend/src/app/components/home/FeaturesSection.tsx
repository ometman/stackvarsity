import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FeatureCard } from './FeatureCard';
import { stackFeatures } from '../../data/features';

export function FeaturesSection() {
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
      <section 
      ref={featuresRef}
      className={`py-20 bg-gray-100 transform transition-all duration-700 ${
        featuresInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      >
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Why Choose Our Platform?</h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to master the MERN stack and build modern web applications
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stackFeatures.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}