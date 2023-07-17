'use client'
import React, { useState } from 'react';
import Link from 'next/link'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 w-screen bg-white">
      <div className="flex items-center justify-between p-3">
        <div className="text-2xl font-bold text-black">
          WB
        </div>
        <div className="items-center justify-center flex-1 hidden gap-4 pl-3 md:flex">
          <Link href="/" className="text-base font-normal text-black">Creation</Link>
          <Link href="/" className="text-base font-normal text-black">Business</Link>
          <Link href="/" className="text-base font-normal text-black">Growth</Link>
          <Link href="/" className="text-base font-normal text-black">Resources</Link>
          <Link href="/" className="text-base font-normal text-black">Enterprise</Link>
          <Link href="/" className="text-base font-normal text-black">Pricing</Link>
          <Link href="#" className="text-base font-normal text-black">Home</Link>
        </div>
        <div className="flex items-center justify-between gap-8">
            <Link href="/" className="text-base font-normal text-black">Log In</Link>
            <button className="w-32 h-10 bg-blue-800 rounded-[20px] text-white text-base font-normal">Get Started</button>
        </div>
        <button
          className="text-3xl text-black md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>
      <div className={`flex flex-col items-start ${menuOpen ? 'block' : 'hidden'} md:hidden`}>
        <ul className="flex flex-col items-start gap-2 pl-3 mb-8">
          <Link href="/" className="text-base font-normal text-black">Creation</Link>
          <Link href="/" className="text-base font-normal text-black">Business</Link>
          <Link href="/" className="text-base font-normal text-black">Growth</Link>
          <Link href="/" className="text-base font-normal text-black">Resources</Link>
          <Link href="/" className="text-base font-normal text-black">Enterprise</Link>
          <Link href="/" className="text-base font-normal text-black">Pricing</Link>
          <Link href="#" className="text-base font-normal text-black">Home</Link>
        </ul>
        <div className="flex items-center gap-2 pb-3 pl-3">
          <Link href="/" className="text-base font-normal text-black">Log In</Link>
          <button className="w-32 h-10 bg-blue-800 rounded-[20px] text-white text-base font-normal">Get Started</button>
        </div>
      </div>
    </nav>
  );
};
