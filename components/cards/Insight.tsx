import { colorMap, InsightCardProps } from '@/types';
import { Users, Bot, Clock, Target } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

const InsightCard = ({ item }: InsightCardProps) => {
  const iconMap: Record<string, React.ElementType> = {
    '1': Users,
    '2': Bot,
    '3': Clock,
    '4': Target,
  };

  const colors = colorMap[item.id] || {
    bg: 'bg-gray-100',
    icon: 'text-gray-600',
  };

  const IconComponent = iconMap[item.id] || Users;

  return (
    <div className="w-full max-w-sm bg-white/70 backdrop-blur-md rounded-2xl p-5 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
      {/* Top Row: percentage left, icon right */}
      <div className="flex items-center justify-between">
        {/* Icon container */}
        <div
          className={twMerge(
            'p-3 rounded-xl flex items-center justify-center hover:scale-105 transform transition-all',
            colors.bg,
          )}
        >
          <IconComponent className={twMerge(colors.icon, 'w-5 h-5')} />
        </div>

        {/* Percentage — same color as icon */}
        <span className={twMerge('text-sm font-semibold', colors.icon)}>
          {item.percentage}
        </span>
      </div>

      {/* Figure & Description */}
      <div className="mt-4 text-left">
        <div className="text-lg sm:text-xl font-semibold text-black">
          {item.figure}
        </div>
        <p className="mt-1 text-sm text-slate-600">{item.description}</p>
      </div>
    </div>
  );
};

export default InsightCard;
