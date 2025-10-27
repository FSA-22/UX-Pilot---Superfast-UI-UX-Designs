import Features from '@/components/featured/Features';
import Hero from '@/components/hero/Hero';
import InsightsSection from '@/components/insights/Insight';
import PeopleSection from '@/components/people/People';

const Home = () => {
  return (
    <main className="flex flex-col justify-center items-center w-full min-h-screen overflow-hidden">
      <Hero />
      <Features />
      <InsightsSection />
      <PeopleSection />
    </main>
  );
};

export default Home;
