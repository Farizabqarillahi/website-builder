
'use client'

import React, {useContext} from 'react';
import { DataContext, SetListData, SetToFunction  } from '@/constants';
import FirstHero from '@/components/section/hero-section/first-hero';
import SecondHero from '@/components/section/hero-section/second-hero';
import FirstCont from '@/components/section/content-section/first-content';
import SecondCont from '@/components/section/content-section/second-content';
import FirstFoot from '@/components/section/footer-section/first-footer';
import SecondFoot from '@/components/section/footer-section/second-foot';
import Sidebar from '@/components/sidebar';
import 'tailwindcss/tailwind.css';



export default function EditTemplate() {
  const {
    sidebarVisible, setSidebarVisible,
    HeroSection, setHeroSection,
    ContentSection, setContentSection,
    FooterSection, setFooterSection,
    HeroVisible, setHeroVisible,
    ContentVisible, setContentVisible,
    FooterVisible, setFooterVisible,
  } = SetToFunction();

  const { data, setData } = SetListData(useContext(DataContext));
    
    // Menampilkan hero input sidebar ketika hero section di klik
    const toggleHeroSide = () => {
      setHeroVisible(!HeroVisible)
    };

    // Menampilkan content marketing input ketika content marketing di klik
    const toggleContentSide = () => {
      setContentVisible(!ContentVisible)
    };

    // Menampilkan footer input ketika footer di klik
    const toggleFooterSide = () => {
      setFooterVisible(!FooterVisible)
    };

    // Untuk memilih template hero section yang harus ditampilkan
    const handleHeroSectionClick = (heroNumber) => {
      setHeroSection(heroNumber);
    };

    // Untuk memilih template content marketing section yang harus ditampilkan
    const handleContentSectionClick = (contentNumber) => {
      setContentSection(contentNumber);
    };

    // Untuk memilih template footer section yang harus ditampilkan
    const handleFooterSectionClick = (footerNumber) => {
      setFooterSection(footerNumber);
    };

    // Untuk mengganti teks atau tulisan pada section
    const handleTextChange = (e, section, field, sectionId) => setData(prevData => ({
      ...prevData,
      [section]: prevData[section].map((item) =>
          item.id === sectionId ? {...item, [field]: e.target.value} : item
          ),
    }))

    // Untuk mengganti link pada social media icon
    // const handleListedDataChange = (e, section, field, routeId) => setData(prevData => ({
    //   ...prevData,
    //   [section]: prevData[section].map((item, index) =>
    //     index === 0 ? {
    //       ...item,
    //       routes: item.routes.map(route =>
    //         route.id === routeId ? { ...route, [field]: e.target.value } : route
    //         )
    //       } : item
    //     )
    // }));

    // Untuk mengganti image pada section
    const handleFileChange = (e, section, sectionId) => setData(prevData => ({
      ...prevData,
      [section]: prevData[section].map((item) => 
          item.id === sectionId ? {...item, image: URL.createObjectURL(e.target.files[0]) } : item
          )
      }))
    
  return (
    <div>
      <main className="flex flex-col items-center justify-between min-h-screen p-4 bg-white">
        <div className="flex">
          {/* Membuka dan menutup Sidebar */}
          <button className="fixed z-10 p-2 text-white bg-black rounded-md shadow-md top-2 left-2"
            onClick={() => setSidebarVisible(!sidebarVisible)}
          >
            {sidebarVisible ? '>>' : '<<'}
          </button>

          {/* Sidebar */}
            <DataContext.Provider value={{ data, setData }}>
                <Sidebar
                    // Menampilkan isi konten sidebar
                    sidebarVisible={sidebarVisible}
                    // Menampilkan hero dalam sidebar
                    HeroVisible={HeroVisible}
                    // Menampilkan content marketing dalam sidebar
                    ContentVisible={ContentVisible}
                    // Menampilkan footer dalam sidebar
                    FooterVisible={FooterVisible}
                    // Memilih template hero section
                    handleContentSectionClick={handleContentSectionClick}
                    // Memilih template content marketing section
                    handleHeroSectionClick={handleHeroSectionClick}
                    // Memilih template footer section
                    handleFooterSectionClick={handleFooterSectionClick}
                    // Mengganti teks atau tulisan pada section
                    onTextChange={handleTextChange}
                    // Mengganti image pada section
                    onFileChange={handleFileChange}
                    // Mengganti link pada social media icon
                    onLinkChange={handleTextChange}
                    // // Mengganti text atau link yang memiliki list data pada section
                    // onListedDataChange={handleListedDataChange}
                    />
            </DataContext.Provider>

          {/* MAIN */}
            <div className={`flex-grow transition-all duration-300 
            ${sidebarVisible ? 'mr-64' : 'mr-0'}`}>
                <div id="main">
                    {/* ISI MAIN */}
                    {/* <h1 className="p-4 text-3xl font-bold">Main Content</h1> */}

                    {/* Pilihan Hero */}
                    <div id='hero' className='focus:outline-none hover:shadow-lg'>
                      {/* <FirstHero /> */}
                      {HeroSection === 1 ? <DataContext.Provider value={{ data, setData }}><FirstHero onClick={toggleHeroSide} /> </DataContext.Provider>
                       : <DataContext.Provider value={{ data, setData }}><SecondHero onClick={toggleHeroSide} /></DataContext.Provider>}
                    </div>
                    {/* Pilihan Content Marketing */}
                    <div className='focus:outline-none hover:shadow-lg'>
                      {ContentSection === 1 ? <DataContext.Provider value={{ data, setData }}><FirstCont onClick={toggleContentSide} /></DataContext.Provider> 
                      : <DataContext.Provider value={{ data, setData }}><SecondCont onClick={toggleContentSide} /></DataContext.Provider>}
                    </div>
                    {/* Pilihan Footer */}
                    <div className='focus:outline-none hover:shadow-lg'>
                      {FooterSection === 1 ? <DataContext.Provider value={{ data, setData }}><FirstFoot onClick={toggleFooterSide} /></DataContext.Provider> 
                        : <DataContext.Provider value={{ data, setData }}><SecondFoot onClick={toggleFooterSide} /></DataContext.Provider>}
                    </div>

                    {/* <script src="https://cdn.tailwindcss.com"></script>
                    <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
                    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
                    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script> */}
                </div>
            </div>
        </div>
      </main>
    </div>
  );
}