import Features from '@/components/featured/Features';
import Footer from '@/components/footer/Footer';
import Hero from '@/components/hero/Hero';
import InsightsSection from '@/components/insights/Insight';
import NavBar from '@/components/navbar/Navbar';
import PeopleSection from '@/components/people/People';

const Home = () => {
  return (
    <main className=" flex flex-col border-2 border-gray-100 rounded-md ">
      <NavBar />
      <Hero />
      <Features />
      <InsightsSection />
      <PeopleSection />
      <Footer />
    </main>
  );
};

export default Home;
