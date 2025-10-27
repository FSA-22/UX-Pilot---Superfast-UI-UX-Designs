'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between bg-blue-50 text-gray-600 w-full overflow-hidden px-6 md:px-12 lg:px-20 py-8 lg:py-20 gap-12 lg:gap-18">
      {/* LEFT SIDE */}
      <div className="flex flex-col items-start text-left w-full lg:w-1/2 space-y-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold md:text-nowrap leading-tight text-gray-900">
          Automussh <span className="text-gradient">Insight</span>
        </h1>

        <p className="text-base sm:text-lg lg:text-xl text-gray-500 max-w-lg">
          Your AI dashboard for real-time performance monitoring and
          human-centered insights.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
          <Button className="primary-button h-15 w-40 rounded-2xl max-md:w-full text-base">
            Get Started
          </Button>

          <Button
            variant="outline"
            className="border-2 border-darkblue rounded-2xl  h-12 sm:h-14 px-8 text-base sm:text-lg w-full sm:w-auto hover:bg-darkblue hover:text-white transition"
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="relative w-full lg:w-1/2 flex justify-center items-center">
        <div className="relative w-[260px] sm:w-[340px] md:w-[375px] lg:w-[380px]">
          {/* Animated Circle - Top Right */}
          <motion.div
            className="absolute -top-4 -right-6 w-8 h-8 rounded-full bg-lightblue/70 shadow-md"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Dashboard Image */}
          <Image
            src="/images/dashboard.png"
            alt="Dashboard Preview"
            width={500}
            height={30}
            className="w-full h-auto rounded-xl shadow-xl object-cover"
            priority
          />

          {/* Animated Circle - Bottom Left */}
          <motion.div
            className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-lightblue/70 shadow-md"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
