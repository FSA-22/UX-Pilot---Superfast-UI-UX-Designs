'use client';

import { insights } from '@/costants';
import InsightCard from '../cards/Insight';

const InsightsSection = () => {
  return (
    <section className="w-full py-20 px-6 flex justify-center bg-[#f5f9ff]">
      <div className="w-full max-w-6xl text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          A Glimpse of Your Insights
        </h2>

        {/* Card Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-blue-50 gap-6 place-items-center">
          {insights.map((item) => (
            <InsightCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
