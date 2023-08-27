// Di sidebar.js
"use client"

import { useContext } from 'react';
import { DataContext, SetListData, SetToFunction } from '@/constants';

export default function FooterSide({ 
  visible, 
  handleFooterSectionClick, 
  onTextChange, 
}) {
  // Gunakan useContext untuk mengakses data dari Context
  const { data } = SetListData(useContext(DataContext));
  // const pathname = usePathname();

  return visible ? (
    <div className={`flex-row gap-2 px-2 py-16 md:items-start md:text-left sidebar-content content-2`}>
      <h3 className="p-4 py-10 text-lg font-semibold text-center text-black">Footer Section</h3>
    {data.footer.length > 0 ? (
    data.footer.map((footer) => (
      <>
        <div className='flex flex-col'>
          {/* title */}
          <h2 className="mb-2 text-base font-normal text-black">{footer.tlabel}</h2>
          <input
            type="text"
            name="footer-field"
            className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500"
            onChange={(e) => onTextChange(e, 'footer', 'title', footer.id)}
          />
          {/* description*/}
          <h2 className="mb-2 text-base font-normal text-black">{footer.dlabel}</h2>
          <input
            type="text"
            name="footer-field"
            className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500"
            onChange={(e) => onTextChange(e, 'footer', 'description', footer.id)}
          />
          {/* contact */}
          <h2 className="mb-2 text-base font-normal text-black">{footer.clabel}</h2>
          <input
            type="text"
            name="footer-field"
            className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500"
            onChange={(e) => onTextChange(e, 'footer', 'contact', footer.id)}
          />
          {/* home */}
          <h2 className="mb-2 text-base font-normal text-black">{footer.hlabel}</h2>
          <input
            type="text"
            name="footer-field"
            className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500"
            onChange={(e) => onTextChange(e, 'footer', 'home', footer.id)}
          />
          {/* address */}
          <h2 className="mb-2 text-base font-normal text-black">{footer.addrlabel}</h2>
          <input
            type="text"
            name="footer-field"
            className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500"
            onChange={(e) => onTextChange(e, 'footer', 'address', footer.id)}
          />
          {/* route */}
          <h2 className="mb-2 text-base font-normal text-black">{footer.rlabel}</h2>
          <input
            type="text"
            name="footer-field"
            className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500"
            onChange={(e) => onTextChange(e, 'footer', 'route', footer.id)}
          />
          {/* email */}
          <h2 className="mb-2 text-base font-normal text-black">{footer.elabel}</h2>
          <input
            type="email"
            name="footer-field"
            className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500"
            onChange={(e) => onTextChange(e, 'footer', 'email', footer.id)}
          />

        </div>
        </>
      ))
      ) : null}
      <h3 className="p-4 py-10 text-lg font-semibold text-center text-black">Choose your templates</h3>
      <div className='flex flex-row'>
        <button onClick={() => handleFooterSectionClick(1)} className="inline-flex px-5 py-2 mx-4 text-lg text-white bg-black border-0 rounded focus:outline-none hover:bg-indigo-600">Show 1</button>
        <button onClick={() => handleFooterSectionClick(2)} className="inline-flex px-5 py-2 text-lg text-white bg-black border-0 rounded focus:outline-none hover:bg-indigo-600">Show 2</button>
      </div>
    </div>
  ) : null;
}