'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center text-center p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all bg-white cursor-pointer"
    >
      {/* Gradient Icon */}
      <div className="mb-4 p-4 rounded-2xl bg-linear-to-r from-darkblue to-lightblue flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
        <Image
          width={30}
          height={30}
          alt="Feature Icon"
          src={Icon}
          className="w-8 h-8 text-white"
        />
      </div>

      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <p className="text-base text-gray-600 mt-2">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
