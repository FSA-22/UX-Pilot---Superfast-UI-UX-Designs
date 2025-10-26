'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-footerbg text-white rounded py-12 mt-4">
      {/* Top Section */}
      <div className="container mx-auto px-12 grid grid-cols-1 place-items-center md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Logo + Description + Socials */}
        <section className="space-y-4">
          {/* Logo and text */}
          <div className="flex items-center space-x-2">
            <Image
              src="/monitor.svg"
              alt="Automussh Logo"
              width={30}
              height={30}
              className="object-contain invert"
            />
            <h2 className="text-xl font-semibold">Automussh Insight</h2>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-300 leading-relaxed">
            Empowering businesses with intelligent AI monitoring and
            human-centered insights for better decision making.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 pt-2">
            <Link
              href="https://twitter.com"
              aria-label="Twitter"
              className="hover:text-blue-400 transition-colors"
            >
              <FaTwitter size={20} />
            </Link>
            <Link
              href="https://github.com"
              aria-label="GitHub"
              className="hover:text-gray-400 transition-colors"
            >
              <FaGithub size={20} />
            </Link>
            <Link
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="hover:text-blue-500 transition-colors"
            >
              <FaLinkedin size={20} />
            </Link>
          </div>
        </section>

        {/* Product Links */}
        <nav aria-label="Product" className="space-y-3">
          <h3 className="font-semibold text-lg">Product</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="#" className="hover:text-white">
                Features
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Documentation
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                API
              </Link>
            </li>
          </ul>
        </nav>

        {/* Company Links */}
        <nav aria-label="Company" className="space-y-3">
          <h3 className="font-semibold text-lg">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="#" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Careers
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10"></div>

      {/* Bottom Section */}
      <div className="text-center text-sm text-gray-400 mt-6">
        © 2025 Automussh Tech Group. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
