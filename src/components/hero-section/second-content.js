// Di edit.js
"use client"

import { useContext } from 'react';
import { DataContext } from '@/pages/trial';

export default function SecondHero() {

  const { data } = useContext(DataContext);
    
      return (
        <section className="px-6 py-2 text-gray-600 border-0 body-font main-section-item" data-target-content="content-3">
          <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
            <div className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 md:items-start md:text-left">
                <h1
                  id="content-5"
                  className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl"
                >
                  {data.title}
                </h1>
              <h1 id="content-6" className="mb-8 leading-relaxed">
                {data.description}
              </h1>
            </div>
            <div className="w-5/6 mb-10 lg:max-w-lg lg:w-full d:w-1/2 md:pl-16 md:w-1/2 md:mb-0">
              <img id="image-preview-2" className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/420x300" />
            </div>
          </div>
          <div className="h-px border border-black Line3 w-83"></div>
        </section>
      );
    }