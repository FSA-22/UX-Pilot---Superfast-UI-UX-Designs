import { InsightCardProps } from '@/types';

const InsightCard = ({ item }: InsightCardProps) => {
  const isGradient = item.color?.includes('from-');

  return (
    <div className="w-full max-w-sm bg-white/70 backdrop-blur-md rounded-2xl p-5 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
      {/* Top Row: percentage left, icon right */}
      <div className="flex items-center justify-between">
        <div
          className={`p-2 rounded-lg hover:scale-105 transform transition-all ${
            isGradient ? `bg-linear-to-r ${item.color}` : ''
          }`}
          style={
            !isGradient ? { backgroundColor: `#${item.color}` } : undefined
          }
        >
          {item.icon}
        </div>

        <span className="text-sm font-semibold text-slate-700">
          {item.percentage}
        </span>
      </div>

      {/* Figure & Description */}
      <div className="mt-4 text-left">
        <div className="text-3xl sm:text-4xl font-semibold text-slate-900">
          {item.figure}
        </div>
        <p className="mt-1 text-sm text-slate-600">{item.description}</p>
      </div>
    </div>
  );
};

export default InsightCard;
