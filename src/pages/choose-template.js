import React from 'react';
import 'tailwindcss/tailwind.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ChooseApp = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/edit');
  };
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          <div className="px-4 mb-10 sm:w-1/2">
            <div className="h-64 overflow-hidden rounded-lg">
              <img alt="content" className="object-cover object-center w-full h-full hover:border-blue-500 hover:border-4" src="https://dummyimage.com/1201x501" />
            </div>
            <h2 className="mt-6 mb-3 text-2xl font-medium text-gray-900 title-font">Template One</h2>
          </div>
          <div className="px-4 mb-10 sm:w-1/2">
            <div className="h-64 overflow-hidden rounded-lg">
              <img alt="content" className="object-cover object-center w-full h-full hover:border-blue-500 hover:border-4" src="https://dummyimage.com/1202x502" />
            </div>
            <h2 className="mt-6 mb-3 text-2xl font-medium text-gray-900 title-font">Template Two</h2>
          </div>
        </div>
        <div className="flex justify-center">
          <button onClick={handleClick} className="px-10 py-3 mt-6 text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">Button</button>
        </div>
      </div>
    </section>
  );
};

export default ChooseApp;