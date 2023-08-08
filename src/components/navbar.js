'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import 'tailwindcss/tailwind.css';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const router = useRouter();

  const handleClick = () => {
    router.push('/login');
  };

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setNavbarVisible(false);
      } else {
        setNavbarVisible(true);
      }
      lastScrollTop = scrollTop;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-screen max-w-full bg-white transition-all duration-300 ${navbarVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="flex items-center justify-between p-3">
        <div className="text-2xl font-bold text-black">
          WB
        </div>
        <div className="items-center justify-center flex-1 hidden gap-4 pl-3 md:flex">
          <Link href="/" className="text-base font-normal text-black hover:text-blue-300">Creation</Link>
          <Link href="/landing-page" className="text-base font-normal text-black hover:text-blue-300">Business</Link>
          <Link href="/choose-template" className="text-base font-normal text-black hover:text-blue-300">Growth</Link>
          <Link href="/edit" className="text-base font-normal text-black hover:text-blue-300">Resources</Link>
          <Link href="/" className="text-base font-normal text-black hover:text-blue-300">Enterprise</Link>
          <Link href="/" className="text-base font-normal text-black hover:text-blue-300">Pricing</Link>
          <Link href="#" className="text-base font-normal text-black hover:text-blue-300">Home</Link>
        </div>
        <div className="flex items-center justify-between gap-8">
            <Link href="/login" className="text-base font-normal text-black hover:text-blue-300">Log In</Link>
            <button onClick={handleClick} className="transform transition duration-500 hover:scale-110 w-32 h-10 bg-blue-800 rounded-[20px] text-white text-base font-normal">Get Started</button>
        </div>
        <button
          className="text-3xl text-black md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>
      <div className={`flex flex-col items-start ${menuOpen ? 'block' : 'hidden'} md:hidden lg:hidden`}>
        <ul className="flex flex-col items-start gap-2 pl-3 mb-8">
          <Link href="/" className="text-base font-normal text-black hover:text-blue-300">Creation</Link>
          <Link href="/" className="text-base font-normal text-black hover:text-blue-300">Business</Link>
          <Link href="/" className="text-base font-normal text-black hover:text-blue-300">Growth</Link>
          <Link href="/" className="text-base font-normal text-black hover:text-blue-300">Resources</Link>
          <Link href="/" className="text-base font-normal text-black hover:text-blue-300">Enterprise</Link>
          <Link href="/" className="text-base font-normal text-black hover:text-blue-300">Pricing</Link>
          <Link href="#" className="text-base font-normal text-black hover:text-blue-300">Home</Link>
        </ul>
      </div>
    </nav>
  );
};
