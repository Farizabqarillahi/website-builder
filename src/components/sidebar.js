import React from 'react';
import HeroSide from '@/components/side-content/hero-side';
import { useContext } from 'react';
import { DataContext } from '@/pages/trial';


export default function Sidebar({ sidebarVisible, handleSectionClick, onFileChange, HeroVisible}) {
    const { data, setData } = useContext(DataContext);

      
  return (
    <div
      className={`fixed top-0 right-0 md:w-64 sm:w-64 lg:w-80 w-64 h-screen bg-white shadow-lg transition-all duration-300 transform ${
        sidebarVisible ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
        {/* SIDEBAR CONTENT */}
        <h2 className="p-4 py-10 text-lg font-semibold text-black">Sidebar Content</h2>
        {/* passing data */}
        <DataContext.Provider value={{ data, setData }}>
            <HeroSide 
                data={data} 
                setData={setData} 
                visible={HeroVisible} 
                handleSectionClick={handleSectionClick} 
                onFileChange={onFileChange} 
            />
        </DataContext.Provider>
    </div>
  );
}