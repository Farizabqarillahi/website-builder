import Navuser from '@/components/navuser';
import Link from 'next/link';
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

export default function Mysitesuser() {
  const [cardStates, setCardStates] = useState([
    { isMenuVisible: false },
    { isMenuVisible: false },
    { isMenuVisible: false },
  ]);

  const toggleMenu = (index) => {
    const updatedCardStates = [...cardStates];
    updatedCardStates[index].isMenuVisible = !updatedCardStates[index].isMenuVisible;
    setCardStates(updatedCardStates);
  };

  const deleteCard = (index) => {
    // Buat salinan dari array cardStates tanpa kartu pada indeks yang ditentukan
    const updatedCardStates = cardStates.filter((_, i) => i !== index);
    setCardStates(updatedCardStates);
  };

  // Informasi untuk setiap kartu
  const cardData = [
    {
      imageSrc: "https://source.unsplash.com/random/605x365/?beach",
      title: "My Site",
      description: "My Site 1",
    },
    {
      imageSrc: "https://source.unsplash.com/random/605x365/?forest",
      title: "My Site",
      description: "My Site 2",
    },
    {
      imageSrc: "https://source.unsplash.com/random/605x365/?beach",
      title: "My Site",
      description: "My Site 3",
    },
  ];

  return (
    <main className="flex flex-col min-h-screen p-4 p-24 pb-6 bg-white">
      <section className="max-w-6xl mx-auto text-gray-600 bg-white body-font">
        <Navuser />
        <div className="flex items-center flex-shrink-0 mx-auto space-x-4 bg-gray-100 md:justify-end md:ml-auto md:mr-0">
          <div className="relative w-40 mr-2 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4">
            <input type="text" id="search" name="search" placeholder='search for a site...' aria-label="Search" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white bg-opacity-50 border border-gray-300 rounded outline-none focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500" />
          </div>
        </div>
        <div className='flex flex-wrap p-4 -m-4 bg-gray-100 md:p-8'>
          {cardStates.map((card, index) => (
            <div key={index} className='bg-white rounded-lg p-3 min-h-[20rem] relative'>
              <div className="relative">
                <img alt="gallery" className="object-cover object-center w-full h-64" src={cardData[index].imageSrc} />
                <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 bg-white opacity-0 hover:opacity-100">
                  <Link href="/edit-template" className="inline-flex items-center justify-center w-32 h-32 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                    Choose Site
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <h2 className="text-lg font-medium text-gray-900 title-font">{cardData[index].title}</h2>
                  <p className="mt-1">{cardData[index].description}</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <a href="#_" onClick={() => toggleMenu(index)} className="inline-flex items-center justify-center w-8 h-8 text-gray-600 transition duration-300 ease-in-out bg-gray-200 rounded-full hover:bg-gray-300 hover:text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 5h14M5 19h14" />
                    </svg>
                  </a>
                </div>
              </div>
              {card.isMenuVisible && (
                <div className="absolute top-0 flex flex-col p-2 mt-8 bg-white border border-gray-300 rounded-lg shadow-lg right-8">
                  <a href="#_" className="block px-4 py-2 hover:bg-gray-100" onClick={() => deleteCard(index)}>Hapus</a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}