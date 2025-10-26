export type Person = {
  id: string;
  image: string;
  name: string;
  discipline: string;
  remark: string;
};

export type InsightItem = {
  id: string;
  icon: React.ReactNode;
  percentage: string;
  figure: string;
  description: string;
  color: string;
};

export type InsightCardProps = {
  item: InsightItem;
};
