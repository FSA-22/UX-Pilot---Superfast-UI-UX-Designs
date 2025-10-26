'use client';

import { features } from '@/costants';
import FeatureCard from '../cards/feature';

const Features = () => {
  return (
    <section className="py-16 px-6 flex flex-col items-center text-center">
      {/* Section Header */}
      <h2 className="text-4xl font-bold text-gray-900 mb-3">
        Powerful, Yet Simple
      </h2>
      <p className="text-gray-600 max-w-xl text-xl mb-12">
        Everything you need to understand your AI.
      </p>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {features.map((feature, idx) => (
          <FeatureCard
            key={idx}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
