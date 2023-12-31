import React from 'react';
import Link from 'next/link';
import Navbar from '../components/navbar';
import LandingPage from '../pages/landing-page';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';
import Navuser from '@/components/navuser';


export default function Home() {
  return (
    <main>
      <LandingPage/>
      <div className='hidden'>
      <Navuser/>
      </div>
    </main>
  )
}
