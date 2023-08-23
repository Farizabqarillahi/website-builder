// Di edit.js
"use client"

import { useContext } from 'react';
import { DataContext } from '@/pages/trial';

export default function FirstHero({ onClick }) {
    const { data } = useContext(DataContext);


  return (
    <section className="px-6 py-2 text-gray-600 border-0 body-font main-section-item" 
    onClick={onClick}
    >
      <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
        <div className="w-5/6 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
          <img id="image-preview-1" className="object-cover object-center rounded" alt="hero" src={data.hero[0].image} />
        </div>
        <div className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 d:w-1/2 md:pl-16 md:items-start md:text-left">
          <h1 id="content-3" className="mb-4 text-xl font-medium text-gray-title-font sm:text-xl">{data.hero[0].title}</h1>
          <p id="content-description" className="mb-leading-relaxed">{data.hero[0].description}</p>
        </div>
      </div>
      <div className="border-black h-border Line3 w"></div>
    </section>
  );
}