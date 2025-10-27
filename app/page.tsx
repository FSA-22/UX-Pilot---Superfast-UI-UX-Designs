import Features from '@/components/featured/Features';
import Hero from '@/components/hero/Hero';
import InsightsSection from '@/components/insights/Insight';
import PeopleSection from '@/components/people/People';

const Home = () => {
  return (
    <main className=" flex flex-col items-center  border-4 border-l border-r border-b border-gray-100">
      <Hero />
      <Features />
      <InsightsSection />
      <PeopleSection />
    </main>
  );
};

export default Home;
