'use client';

import { Cpu, BarChart2, Users, DollarSign } from 'lucide-react';
import InsightCard from '../cards/Insight';
import { InsightItem } from '@/types';

const data: InsightItem[] = [
  {
    id: '1',
    icon: <BarChart2 className="w-6 h-6 text-slate-700" />,
    percentage: '+12.4%',
    figure: '2,340',
    description: 'Monthly active users',
    color: 'green-100 to-green-200',
  },
  {
    id: '2',
    icon: <Users className="w-6 h-6 text-slate-700" />,
    percentage: '+8.1%',
    figure: '124k',
    description: 'Impressions this month',
    color: 'from-purple-100 to-purple-200',
  },
  {
    id: '3',
    icon: <Cpu className="w-6 h-6 text-slate-700" />,
    percentage: '99.97%',
    figure: '99.97%',
    description: 'System uptime',
    color: '',
  },
  {
    id: '4',
    icon: <DollarSign className="w-6 h-6 text-slate-700" />,
    percentage: '+5.6%',
    figure: '$42.1k',
    description: 'Revenue (30d)',
    color: 'from-yellow-100 to-yellow-200',
  },
];

const InsightsSection = () => {
  return (
    <section className="w-full py-20 px-6 flex justify-center bg-[#f5f9ff]">
      <div className="w-full max-w-6xl text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          A Glimpse of Your Insights
        </h2>
        <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
          Insights that help you quickly understand how your AI performs and
          where to improve.
        </p>

        {/* Card Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-blue-50 gap-6 place-items-center">
          {data.map((item) => (
            <InsightCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
