import { InsightItem } from '@/components/insights/Insight';

type InsightCardProps = {
  item: InsightItem;
};

const InsightCard = ({ item }: InsightCardProps) => {
  return (
    <div className="w-full max-w-sm bg-white/70 backdrop-blur-md rounded-2xl p-5 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
      {/* Top Row: percentage left, icon right */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-slate-700">
          {item.percentage}
        </span>
        <div
          className={`p-2 rounded-lg bg--to-br ${item.color} hover:scale-105 transform transition-all`}
        >
          {item.icon}
        </div>
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
