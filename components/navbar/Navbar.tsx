'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import { navlinks } from '@/costants';

const NavBar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 z-50 right-0 bg-white/80 backdrop-blur-md border-y border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3">
        {/*  Left: Logo */}
        <div className="flex items-center space-x-2 whitespace-nowrap">
          <div className="bg-gradient-right rounded-lg p-2 flex items-center justify-center">
            <Image
              src="/monitor.svg"
              alt="Automussh Logo"
              width={18}
              height={18}
              className="object-contain invert"
            />
          </div>
          <span className="font-bold text-lg sm:text-xl tracking-tight">
            Automussh Insight
          </span>
        </div>

        {/*  Center: Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navlinks.map(({ href, name }) => {
            const isActive = pathname === href;
            return (
              <li key={name}>
                <Link
                  href={href}
                  className={`transition-all duration-200 ${
                    isActive
                      ? 'text-gray-800 font-semibold hover:text-lightblue'
                      : 'text-gray-600 hover:text-lightblue'
                  }`}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <Button className="rounded-full primary-button w-32 h-9">
            Get Started
          </Button>
        </div>

        <button
          className="md:hidden flex items-center justify-center text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-md">
          <ul className="flex flex-col items-center py-4 space-y-4">
            {navlinks.map(({ href, name }) => {
              const isActive = pathname === href;
              return (
                <li key={name}>
                  <Link
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className={`block text-base ${
                      isActive
                        ? 'text-black font-medium hover:text-lightblue'
                        : 'text-gray-600 hover:text-lightblue'
                    }`}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
            <Button className="mt-3 rounded-full bg-gradient-right text-white w-32 h-9">
              Get Started
            </Button>
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
