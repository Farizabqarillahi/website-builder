
'use client'

import React, { useState, createContext, Fragment } from 'react';
import FirstHero from '@/components/hero-section/first-hero';
import SecondHero from '@/components/hero-section/second-content';
import FirstCont from '@/components/content-section/first-content';
import Sidebar from '@/components/sidebar';
import 'tailwindcss/tailwind.css';

// Buat sebuah Context untuk menyimpan data yang akan dibagikan
export const DataContext = createContext();

export default function EditTemplate() {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [selectedSection, setSelectedSection] = useState(1);
  const [HeroVisible, setHeroVisible] = useState(false);
  const [data, setData] = useState(
    { 
        hero: [
            {
                title: 'Lorem Ipsum',
                description: 'Lorem ipsum dolor',
                image: 'https://source.unsplash.com/700x350/?city'
            },
        ],
        content: [
            {
                title: 'Lorem Ipsum',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
                image: null
            },
        ]
    });

    const toggleFirst = () => {
    setHeroVisible(!HeroVisible);
    };

    const handleSectionClick = (sectionNumber) => {
        setSelectedSection(sectionNumber);
    };

    const handleFileChange = (e) => setData(prevData => ({
        ...prevData,
        hero: prevData.hero.map((item, index) => 
            index === 0 ? {...item, image: URL.createObjectURL(e.target.files[0]) } : item
            )
        }))
    
  return (
    <div>
      <main className="flex flex-col items-center justify-between min-h-screen p-4 bg-white">
        <div className="flex">
          {/* Show Sidebar */}
          <button
            className="fixed z-10 p-2 text-white bg-black rounded-md shadow-md top-2 left-2"
            onClick={() => setSidebarVisible(!sidebarVisible)}
          >
            {sidebarVisible ? '>>' : '<<'}
          </button>

          {/* Sidebar */}
            <DataContext.Provider value={{ data, setData }}>
                <Sidebar
                    HeroVisible={HeroVisible}
                    sidebarVisible={sidebarVisible}
                    handleSectionClick={handleSectionClick}
                    onFileChange={handleFileChange}
                />
            </DataContext.Provider>

          {/* MAIN */}
            <div className={`flex-grow transition-all duration-300 
            ${sidebarVisible ? 'mr-64' : 'mr-0'}`}>
                <div id="main">
                    {/* Add your main content here */}
                    <h1 className="p-4 text-3xl font-bold">Main Content</h1>

                    {/* Pilihan Hero */}
                    <div id='hero' className='focus:outline-none hover:shadow-lg'>
                        {selectedSection === 1 && <DataContext.Provider value={{ data, setData }}><FirstHero onClick={toggleFirst} /> </DataContext.Provider>}
                        {selectedSection === 2 && <DataContext.Provider value={{ data, setData }}><SecondHero onClick={toggleFirst} /></DataContext.Provider>}
                    </div>
                    {/* {selectedSection === 3 && <DataContext.Provider value={{ data, setData }}><FirstCont onClick={toggleFirst} /></DataContext.Provider>} */}
                    <div className='focus:outline-none hover:shadow-lg'>
                        <FirstCont />
                    </div>
                    <script src="https://cdn.tailwindcss.com"></script>
                    <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
                    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
                    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
}