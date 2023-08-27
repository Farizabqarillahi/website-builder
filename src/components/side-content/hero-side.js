// Di sidebar.js
"use client"

import { useContext } from 'react';
import { DataContext, SetListData, SetToFunction } from '@/constants';

export default function HeroSide({ 
  visible, 
  handleHeroSectionClick, 
  onTextChange, 
  onFileChange,
  onLinkChange
}) {
  // Gunakan useContext untuk mengakses data dari Context
  const { data } = SetListData(useContext(DataContext));
  // const pathname = usePathname();



  return visible ? (
    <div className={`flex-row gap-2 px-2 py-16 md:items-start md:text-left sidebar-content content-2`}>
      <h3 className="p-4 py-10 text-lg font-semibold text-center text-black">Hero Section</h3>
    {data.hero.length > 0 ? (
    data.hero.map((hero) => (
      <>
      <div className='flex flex-col'>
        {/* input content 3*/}
          <h2 className="mb-2 text-base font-normal text-black">{hero.nlabel}</h2>
            <input
              type="text"
              name="hero-field"
              className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500"
              onChange={(e) => onTextChange(e, 'hero', 'name', hero.id)}
            />
          <h2 className="mb-2 text-base font-normal text-black">{hero.tlabel}</h2>
            <input
              type="text"
              name="hero-field"
              className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500"
              onChange={(e) => onTextChange(e, 'hero', 'title', hero.id)}
            />
            <h2 className="mb-2 text-base font-normal text-black">{hero.dlabel}</h2>
            {/* input content 4*/}
            <input
              type="text"
              name="hero-field"
              className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500"
              onChange={(e) => onTextChange(e, 'hero', 'description', hero.id)}
            />
            {data.social.map((route) => (
              <>
                <h2 className="mb-2 text-base font-normal text-black">{route.label}</h2>
                {/* input social media links*/}
                <input
                  type="text"
                  name="hero-field"
                  className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500"
                  onChange={(e) => onLinkChange(e, 'social', 'route', route.id)}
                />
              </>
            ))}

      </div>
      <div className="flex flex-col justify-center">
        <h2 className="mb-2 text-base font-normal text-black">{hero.imglabel}</h2>
        <button 
            onClick={() => document.getElementById(hero.id).click()}
            className="inline-flex justify-center px-6 py-2 text-lg text-white bg-black border-0 rounded focus:outline-none hover:bg-indigo-600"
        >
            Pilih Gambar
        </button>
        <input
            id={hero.id}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => onFileChange(e, 'hero', e.target.id)}
        />
        
      </div>
            </>
          ))
          ) : null}
      <h3 className="p-4 py-10 text-lg font-semibold text-center text-black">Choose your templates</h3>
      <div className='flex flex-row'>
        <button onClick={() => handleHeroSectionClick(1)} className="inline-flex px-5 py-2 mx-4 text-lg text-white bg-black border-0 rounded focus:outline-none hover:bg-indigo-600">Show 1</button>
        <button onClick={() => handleHeroSectionClick(2)} className="inline-flex px-5 py-2 text-lg text-white bg-black border-0 rounded focus:outline-none hover:bg-indigo-600">Show 2</button>
      </div>
    </div>
  ) : null;
}