'use client';

import Image from 'next/image';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2 whitespace-nowrap">
      <div className="bg-gradient-right rounded-lg p-2 flex-center">
        <Image
          src="/monitor.svg"
          alt="Automussh Logo"
          width={16}
          height={16}
          className="object-contain invert"
        />
      </div>
      <span className="font-bold text-lg sm:text-xl tracking-tight">
        Automussh Insight
      </span>
    </div>
  );
};

export default Logo;
