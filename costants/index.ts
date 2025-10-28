import { InsightItem, Person } from '@/types';
import { figure } from 'motion/react-client';

export const navlinks = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '/#' },
  { name: 'Pricing', href: '/#' },
  { name: 'Contact', href: '/#' },
];

export const features = [
  {
    icon: '/monitor.svg',
    title: 'Smart Monitoring',
    description:
      'Track your AI systems with intelligent alerts and real-time performance metrics.',
  },
  {
    icon: '/brain.svg',

    title: 'AI Insights',
    description:
      'Get deep insights into model performance with human-readable analytics.',
  },
  {
    icon: '/shield.svg',

    title: 'Secure & Reliable',
    description:
      'Enterprise-grade security with 99.9% uptime guarantee for your peace of mind.',
  },
  {
    icon: '/monitor.svg',

    title: 'Smart Data Handling',
    description: 'Collect, store, and manage your data efficiently.',
  },

  {
    icon: '/monitor.svg',

    title: 'Performance Reports',
    description: 'Generate beautiful reports to measure your success.',
  },
];

export const peopleData: Person[] = [
  {
    id: '1',
    image: '/images/avatar-1.jpg',

    name: 'Sarah Chen',
    discipline: 'AI Engineer at TechCorp',
    remark:
      'Automussh Insight transformed how we monitor our AI systems. The insights are incredibly valuable and easy to understand.',
  },
  {
    id: '2',
    image: '/images/avatar-2.jpg',

    name: 'Marcus Rodrigue',
    discipline: 'CTO at DataFlow',
    remark:
      '"The real-time monitoring capabilities are outstanding. We can now proactively address issues before they impact our users."',
  },
  {
    id: '3',
    image: '/images/avatar-5.jpg',
    name: 'Emma Thompson',
    discipline: 'Product Manager at InnovateLab',
    remark:
      '"Finally, an AI monitoring tool that speaks human language. Our entire team can now understand our AI performance metrics."',
  },
];

export const insights: InsightItem[] = [
  {
    id: '1',
    icon: '/users.svg',
    percentage: '+12%',
    figure: '2,340',
    description: 'Active Users',
    color: 'green-100 to-green-200',
  },
  {
    id: '2',
    icon: '/robot.svg',
    percentage: '+8%',
    figure: '124k',
    description: 'AI Requests',
    color: 'from-blue-100 to-blue-200',
  },
  {
    id: '3',
    icon: '/time.svg',
    percentage: '99.97%',
    figure: '99.97%',
    description: 'Uptime',
    color: 'from-purple-100 to-purple-200',
  },
  {
    id: '4',
    icon: '/target.svg',
    figure: '92.4%',
    percentage: '+5%',
    description: 'Model Accuracy',
    color: 'from-yellow-100 to-yellow-200',
  },
];
