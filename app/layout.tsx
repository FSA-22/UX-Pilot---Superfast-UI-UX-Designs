import type { Metadata } from 'next';
import { Geist, Geist_Mono, Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'UX Pilot - Superfast UI/UX Designs',
  description:
    'A Task Demo for Automussh front-end developer using Next.js, Typescript and Tailwind CSS.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} font-sans   antialiased`}
      >
        <div className="p-6">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
