'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';
import { navlinks } from '@/costants';

const NavBar = () => {
  const pathname = usePathname();

  return (
    <header className=" sticky z-50 w-full bg-white backdrop-blur-md border-b-2 border-gray-100 px-6 shadow-sm">
      <nav
        className="flex items-center justify-between px-6 py-3"
        aria-label="Main Navigation"
      >
        {/* Left: Logo */}
        <div className="flex-center">
          <div className="bg-gradient-right rounded-lg p-2 mr-2">
            <Image
              src="/monitor.svg"
              alt="Automussh Logo"
              width={18}
              height={18}
              className="object-contain invert brightness-0"
            />
          </div>
          <span className="font-bold text-xl">Automussh Insight</span>
        </div>

        {/* Center: Nav Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navlinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`transition-all duration-200 ${
                    isActive
                      ? 'text-black font-semibold'
                      : 'text-gray-500 hover:text-lightblue'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right: Get Started Button */}
        <Button className="primary-button w-32 h-9 rounded-4xl">
          Get Started
        </Button>
      </nav>
    </header>
  );
};

export default NavBar;
