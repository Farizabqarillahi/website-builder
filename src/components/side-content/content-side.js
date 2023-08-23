// // Di sidebar.js
// "use client"

// import { useContext } from 'react';
// import { DataContext } from '@/pages/trial';

// export default function ContentSide({ visible, handleSectionClick, onFileChange }) {
//   // Gunakan useContext untuk mengakses data dari Context
//   const { data, setData } = useContext(DataContext);


//   return visible ? (
//     <div className={`flex-row gap-2 px-2 py-16 md:items-start md:text-left sidebar-content content-2`}>
//       <h3 className="p-4 py-10 text-lg font-semibold text-center text-black">Hero Section</h3>
//       <div className='flex flex-col'>
//         <h2 className="mb-2 text-base font-normal text-black">Title</h2>
//         {/* input content 3*/}
//         <input
//           type="text"
//           name="hero-field"
//           className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500"
//           onChange={e => setData(prevData => ({
//             ...prevData,
//             hero: prevData.hero.map((item, index) => 
//                 index === 0 ? {...item, title: e.target.value} : item
//             )
//         }))}
//         />
//         <h2 className="mb-2 text-base font-normal text-black">Description</h2>
//         {/* input content 4*/}
//         <input
//           type="text"
//           name="hero-field"
//           className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500"
//           onChange={e => setData(prevData => ({
//             ...prevData,
//             hero: prevData.hero.map((item, index) => 
//                 index === 0 ? {...item, description: e.target.value} : item
//             )
//         }))}
//         />
//       </div>
//       <div className="flex flex-col justify-center">
//         <h2 className="mb-2 text-base font-normal text-black">Image</h2>
//         <button 
//             onClick={() => document.getElementById('image-upload').click()}
//             className="inline-flex justify-center px-6 py-2 text-lg text-white bg-black border-0 rounded focus:outline-none hover:bg-indigo-600"
//         >
//             Select Image
//         </button>
//         <input
//             id="image-upload"
//             type="file"
//             accept="image/*"
//             className="hidden"
//             onChange={onFileChange}
//         />
        
//       </div>
//       <h3 className="p-4 py-10 text-lg font-semibold text-center text-black">Choose your templates</h3>
//       <div className='flex flex-row'>
//         <button onClick={() => handleSectionClick(3)} className="inline-flex px-5 py-2 mx-4 text-lg text-white bg-black border-0 rounded focus:outline-none hover:bg-indigo-600">Show 1</button>
//         <button onClick={() => handleSectionClick(4)} className="inline-flex px-5 py-2 text-lg text-white bg-black border-0 rounded focus:outline-none hover:bg-indigo-600">Show 2</button>
//       </div>
//     </div>
//   ) : null;
// }