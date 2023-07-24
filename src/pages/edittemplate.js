import React from 'react';
import Image from 'next/image';

export default function EditTemplate() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white p-4">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">Logo</span>
          </a>
          <div className="md:w-1/2 lg:pl-74 md:pl-60 flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-l">Welcome,Andi</span>
          </div>
        </div>
      </header>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/420x300" />
          </div>
          <div className="lg:flex-grow md:w-1/2 d:w-1/2 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Lorem Ipsum Title
            </h1>
            <h1 className="mb-8 leading-relaxed">What is Lorem Ipsum?
              <br className="hidden lg:inline-block" />Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </h1>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h2 className="text-black text-base font-normal mb-2">Title</h2>
            <input type="text" id="hero-field" name="hero-field" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            <h2 className="text-black text-base font-normal mb-2">Description</h2>
            <input type="text" id="hero-field" name="hero-field" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            <h2 className="text-black text-base font-normal mb-2">Image</h2>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Select Image</button>
            </div>
          </div>
        </div>
        <div className="Line3 w-83 h-px border border-black"></div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Lorem Ipsum Title
            </h1>
            <h1 className="mb-8 leading-relaxed">What is Lorem Ipsum?
              <br className="hidden lg:inline-block" />Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </h1>
          </div>
          <div className="lg:max-w-lg lg:w-full d:w-1/2 md:pl-16 md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/420x300" />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h2 className="text-black text-base font-normal mb-2">Title</h2>
            <input type="text" id="hero-field" name="hero-field" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            <h2 className="text-black text-base font-normal mb-2">Description</h2>
            <input type="text" id="hero-field" name="hero-field" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            <h2 className="text-black text-base font-normal mb-2">Image</h2>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Select Image</button>
            </div>
          </div>
        </div>
        <div className="Line3 w-83 h-px border border-black"></div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/420x300" />
          </div>
          <div className="lg:flex-grow md:w-1/2 d:w-1/2 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Lorem Ipsum Title
            </h1>
            <h1 className="mb-8 leading-relaxed">What is Lorem Ipsum?
              <br className="hidden lg:inline-block" />Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </h1>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h2 className="text-black text-base font-normal mb-2">Title</h2>
            <input type="text" id="hero-field" name="hero-field" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            <h2 className="text-black text-base font-normal mb-2">Description</h2>
            <input type="text" id="hero-field" name="hero-field" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            <h2 className="text-black text-base font-normal mb-2">Image</h2>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Select Image</button>
            </div>
          </div>
        </div>
        <div className="Line3 w-83 h-px border border-black"></div>
      </section>
      <br />
      <div className="flex w-full md:justify-end">
        <div>
          <button className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Preview</button>
          <button className="ml-4 inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Publish</button>
        </div>
      </div>
    </main>
  )
}