import Features from '@/components/featured/Features';
import Hero from '@/components/hero/Hero';
import InsightsSection from '@/components/insights/Insight';
import PeopleSection from '@/components/people/People';

const Home = () => {
  return (
    <main className=" flex flex-col border-2 border-gray-100 rounded-md ">
      <Hero />
      <Features />
      <InsightsSection />
      <PeopleSection />
    </main>
  );
};

export default Home;
