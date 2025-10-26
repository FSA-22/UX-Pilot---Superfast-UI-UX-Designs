'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-herobg gap-10 md:gap-16 px-6 md:px-16 py-20 bg-gray-50 text-gray-500 m-h-screen h-screen w-full  overflow-hidden">
      {/* LEFT SIDE */}
      <div className="flex flex-col items-start text-left max-w-xl space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-black leading-tight">
          Automussh&nbsp;
          <span className="text-transparent bg-clip-text bg-linear-to-r from-darkblue to-lightblue">
            Insight
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-500">
          Your AI dashboard for real-time performance monitoring and
          human-centered insights.
        </p>

        <div className="flex flex-wrap gap-4 mt-4">
          <Button className="primary-button h-15 w-40">Get Started</Button>
          <Button
            variant="outline"
            className="border-darkblue border-2 text-lg text-darkblue h-15 w-40 rounded-2xl hover:bg-darkblue hover:text-white transition"
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center">
        {/* Dashboard Image */}
        <div className="relative w-[320px] md:w-[500px]">
          <motion.div
            className="absolute -top-5 right-26 w-8 h-8 rounded-full bg-lightblue shadow-sm"
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <Image
            src="/images/dashboard.png"
            alt="Dashboard Image"
            width={380}
            height={250}
            className="rounded-xl shadow-lg"
          />

          {/* Blinking circle animation */}
          <motion.div
            className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-lightblue shadow-sm"
            animate={{ opacity: [0.2, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
