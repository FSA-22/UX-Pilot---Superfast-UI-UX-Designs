import { Person } from '@/components/people/People';

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
    icon: '/monitor.svg',

    title: 'AI Insights',
    description:
      'Get deep insights into model performance with human-readable analytics.',
  },
  {
    icon: '/monitor.svg',

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

    title: 'Cloud Integration',
    description: 'Connect seamlessly to your favorite cloud platforms.',
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
    image: '/Images/avatar-1.jpg',

    name: 'Sarah Chen',
    discipline: 'AI Engineer at TechCorp',
    remark:
      'Automussh Insight transformed how we monitor our AI systems. The insights are incredibly valuable and easy to understand.',
  },
  {
    id: '2',
    image: '/Images/avatar-5.jpg',

    name: 'Marcus Rodrigue',
    discipline: 'CTO at DataFlow',
    remark:
      '"The real-time monitoring capabilities are outstanding. We can now proactively address issues before they impact our users."',
  },
  {
    id: '3',
    image: '/Images/avatar-1.jpg',
    name: 'Emma Thompson',
    discipline: 'Product Manager at InnovateLab',
    remark:
      '"Finally, an AI monitoring tool that speaks human language. Our entire team can now understand our AI performance metrics."',
  },
];
