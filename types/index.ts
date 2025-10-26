export type Person = {
  id: string;
  image: string;
  name: string;
  discipline: string;
  remark: string;
};

export type InsightItem = {
  id: string;
  icon: string;
  percentage: string;
  figure: string;
  description: string;
  color: string;
};

export type InsightCardProps = {
  item: InsightItem;
};

export const colorMap: Record<string, { bg: string; icon: string }> = {
  '1': {
    bg: 'bg-gradient-to-r from-green-100 to-green-200',
    icon: 'text-green-600',
  },
  '2': {
    bg: 'bg-gradient-to-r from-blue-100 to-blue-200',
    icon: 'text-blue-600',
  },
  '3': {
    bg: 'bg-gradient-to-r from-purple-100 to-purple-200',
    icon: 'text-purple-600',
  },
  '4': {
    bg: 'bg-gradient-to-r from-yellow-100 to-yellow-200',
    icon: 'text-yellow-600',
  },
};
