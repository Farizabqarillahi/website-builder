import React from 'react';
import 'tailwindcss/tailwind.css';
import Image from 'next/image';

function ChooseApp() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="fixed top-0 left-0 right-0 flex flex-row justify-between w-full px-4 bg-white">
        <div className="font-bold text-lg">LOGO</div>
        <div className="text-gray-600">Welcome, Andi</div>
      </div>
      <h1 className="text-4xl font-bold my-4">Pick One</h1>
      <p className="text-gray-600 mb-4">Choose Template</p>
      <Image src="/choosetemplate.jpg" alt="web-image-1" width={500} height={300} />
      <div className="flex flex-row space-x-4">
        <button className="bg-blue-500 text-white font-medium py-1 px-8 rounded-md hover:bg-blue-600 transition duration-200">
          Template One
        </button>
        <button className="bg-blue-500 text-white font-medium py-1 px-8 rounded-md hover:bg-blue-600 transition duration-200">
          Template Two
        </button>
      </div>
    </div>
  );
}

export default ChooseApp;