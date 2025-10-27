'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import { navlinks } from '@/costants';
import Logo from '../shared/Logo';

const NavBar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 z-50 w-full bg-white/90 backdrop-blur-sm shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 py-4 transition-all duration-200">
        {/* === Logo === */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* === Center Links (Desktop) === */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-10">
          {navlinks.map(({ href, name }) => {
            const isActive = pathname === href;
            return (
              <li key={name}>
                <Link
                  href={href}
                  className={`transition-colors duration-200 text-sm lg:text-base ${
                    isActive
                      ? 'text-gray-800 hover:text-lightblue font-semibold'
                      : 'text-gray-600 hover:text-lightblue'
                  }`}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* === Right Side (Desktop CTA) === */}
        <div className="hidden md:block">
          <Button className="rounded-full primary-button font-medium w-32 h-10 ">
            Get Started
          </Button>
        </div>

        {/* === Mobile Menu Toggle === */}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 hover:text-lightblue bg-transparent transition"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </Button>
      </nav>

      {/* === Mobile Menu Dropdown === */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-md animate-fadeIn">
          <ul className="flex flex-col items-center py-6 space-y-5">
            {navlinks.map(({ href, name }) => {
              const isActive = pathname === href;
              return (
                <li key={name}>
                  <Link
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className={`block text-base sm:text-lg transition-colors ${
                      isActive
                        ? 'text-gray-800 hover:text-lightblue font-semibold'
                        : 'text-gray-600 hover:text-lightblue'
                    }`}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
            <Button className="mt-3 primary-button w-36 h-10">
              Get Started
            </Button>
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
