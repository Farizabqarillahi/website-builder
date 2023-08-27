import Navadmin from '@/components/navadmin';
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
      imageSrc: "https://dummyimage.com/605x365/ff5733/fff",
      title: "Kartu 1",
      description: "Deskripsi Kartu 1",
    },
    {
      imageSrc: "https://dummyimage.com/605x365/33ff57/fff",
      title: "Kartu 2",
      description: "Deskripsi Kartu 2",
    },
    {
      imageSrc: "https://dummyimage.com/605x365/5733ff/fff",
      title: "Kartu 3",
      description: "Deskripsi Kartu 3",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col p-24 bg-white p-4 pb-6">
      <section className="bg-white text-gray-600 body-font mx-auto max-w-6xl">
        <Navadmin />
        <div className="md:justify-end bg-gray-100 flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
          <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
            <input type="text" id="search" name="search" placeholder='search for a site...' aria-label="Search" className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className='p-4 md:p-8 bg-gray-100 flex flex-wrap -m-4'>
          {cardStates.map((card, index) => (
            <div key={index} className='bg-white rounded-lg p-3 min-h-[20rem] relative'>
              <div className="relative">
                <img alt="gallery" className="w-full h-64 object-cover object-center" src={cardData[index].imageSrc} />
                <div className="absolute inset-0 bg-white opacity-0 hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300">
                  <a href="#_" className="inline-flex items-center justify-center w-32 h-32 bg-indigo-600 rounded-full text-white text-base font-bold leading-6 border border-transparent hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                    Choose Site
                  </a>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{cardData[index].title}</h2>
                  <p className="mt-1">{cardData[index].description}</p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <a href="#_" onClick={() => toggleMenu(index)} className="inline-flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300 hover:text-gray-700 transition duration-300 ease-in-out">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 5h14M5 19h14" />
                    </svg>
                  </a>
                </div>
              </div>
              {card.isMenuVisible && (
                <div className="absolute top-0 right-8 mt-8 bg-white border border-gray-300 rounded-lg shadow-lg p-2 flex flex-col">
                  <a href="#_" className="block py-2 px-4 hover:bg-gray-100" onClick={() => deleteCard(index)}>Hapus</a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
