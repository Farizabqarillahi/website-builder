import React from 'react';
import HeroSide from '@/components/side-content/hero-side';
import ContentSide from '@/components/side-content/content-side';
import FooterSide from './side-content/footer-side';
import { useContext } from 'react';
import { DataContext, SetListData } from '@/constants';


export default function Sidebar({ 
  sidebarVisible, 
  handleHeroSectionClick, 
  handleContentSectionClick, 
  handleFooterSectionClick,
  HeroSection,
  ContentSection,
  FooterSection,
  onTextChange,
  onFileChange, 
  HeroVisible, 
  ContentVisible,
  FooterVisible,
  onLinkChange,
  onListedDataChange
}) {

    const { data, setData } = SetListData(useContext(DataContext));

      
  return (
    <div
      className={`fixed top-0 right-0 md:w-64 sm:w-64 lg:w-80 w-64 h-screen bg-white shadow-lg transition-all duration-300 transform ${
        sidebarVisible ? 'translate-x-0' : 'translate-x-full'
      } overflow-y-auto`}
    >
        {/* SIDEBAR CONTENT */}
        <h2 className="p-4 py-10 text-lg font-semibold text-black">Toolbar</h2>
        {/* MEMANGGIL HERO, CONTENT MARKETING, CTA  */}
        {/* Function dari EditTemplate dipanggil sebagai props */}
        <DataContext.Provider value={{ data, setData }}>
            <HeroSide 
              visible={HeroVisible}
              handleHeroSectionClick={handleHeroSectionClick}
              onTextChange={onTextChange}
              onFileChange={onFileChange}
              onLinkChange={onLinkChange}
            />
        </DataContext.Provider>
        <DataContext.Provider value={{ data, setData }}>
            <ContentSide 
                visible={ContentVisible} 
                handleContentSectionClick={handleContentSectionClick}
                onTextChange={onTextChange}
                onFileChange={onFileChange} 
            />
        </DataContext.Provider>
        <DataContext.Provider value={{ data, setData }}>
            <FooterSide 
                visible={FooterVisible} 
                handleFooterSectionClick={handleFooterSectionClick}
                HeroSection={HeroSection}
                ContentSection={ContentSection}
                FooterSection={FooterSection}
                onTextChange={onTextChange}
                onFileChange={onFileChange} 
            />
        </DataContext.Provider>

    </div>
  );
}