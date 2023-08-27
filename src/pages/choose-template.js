"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import 'tailwindcss/tailwind.css';

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const router = useRouter();

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const handleSubmit = () => {
    if (selectedImage === 1) {
      console.log(selectedImage);
      router.push('/edit-template');
    } else if (selectedImage === 2) {
      console.log(selectedImage);
      router.push('/edit-template');
    }
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          <div className="px-4 mb-10 sm:w-1/2">
            <div className="h-64 overflow-hidden rounded-lg">
              <img
                alt="content"
                className={`object-cover object-center h-full w-full ${
                  selectedImage === 1 ? 'border-blue-500 border-4' : ''
                } hover:border-blue-500 hover:border-4`}
                src="https://source.unsplash.com/random/1201x501/?beach"
                onClick={() => handleImageClick(1)}
              />
            </div>
            <h2 className="mt-6 mb-3 text-2xl font-medium text-gray-900 title-font">Template One</h2>
          </div>
          <div className="px-4 mb-10 sm:w-1/2">
            <div className="h-64 overflow-hidden rounded-lg">
              <img
                alt="content"
                className={`object-cover object-center h-full w-full ${
                  selectedImage === 2 ? 'border-blue-500 border-4' : ''
                } hover:border-blue-500 hover:border-4`}
                src="https://source.unsplash.com/random/1202x502/?forest"
                onClick={() => handleImageClick(2)}
              />
            </div>
            <h2 className="mt-6 mb-3 text-2xl font-medium text-gray-900 title-font">Template Two</h2>
          </div>
        </div>
        <div className="flex justify-center">
          <button onClick={() => handleSubmit()} className="px-10 py-3 mt-6 text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">
            Submit
            </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
