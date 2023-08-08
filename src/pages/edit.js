'use client'
import React, {useEffect, useState} from 'react';
import Navbar from '../components/navbar';
import 'tailwindcss/tailwind.css';

export default function EditTemplate(){
    const [sidebarVisible, setSidebarVisible] = useState(true);

    // useEffect wrap
    useEffect(() => {
// -----------------------------------------------------------------------
    // CONNECT or WRAP MAIN CONTENT with SIDEBAR

    // Select the main section items and the sidebar content
    const mainSectionItems = document.querySelectorAll('.main-section-item');
    const sidebarContent = document.querySelectorAll('.sidebar-content');

    // Add an event listener to each main section item
    mainSectionItems.forEach(item => {
        item.addEventListener('click', () => {
            // Get the data attribute of the clicked item
            const targetContent = item.getAttribute('data-target-content');

            // Hide all sidebar content
            sidebarContent.forEach(content => {
                content.classList.add('hidden');
            });

            // Show the target content
            document.querySelector(`.${targetContent}`).classList.remove('hidden');
        });
    });
// ----------------------------------------------------------------------
    // IMAGE CHANGE

    // Select the image input and select image buttons
    const imageInput = document.querySelector('#image-input');
    const selectImageButtons = document.querySelectorAll('[data-target-preview]');

    // Add an event listener to each select image button
    selectImageButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Store the target preview in the image input dataset
        imageInput.dataset.targetPreview = button.getAttribute('data-target-preview');

        // Trigger a click on the image input
        imageInput.click();
      });
    });

    // Add an event listener to the image input
    imageInput.addEventListener('change', () => {
      // Get the selected file
      const file = imageInput.files[0];

      // Create a URL for the selected file
      const fileURL = URL.createObjectURL(file);

      // Get the target preview from the image input dataset
      const targetPreview = document.querySelector(imageInput.dataset.targetPreview);

      // Update the src of the target preview
      targetPreview.src = fileURL;
    });
// ----------------------------------------------------------------------
    // TEXT CHANGE

    // Select the input elements
    const inputElements = document.querySelectorAll('[data-target-content]');

    // Add an event listener to each input element
    inputElements.forEach(input => {
      input.addEventListener('input', () => {
        // Get the target content from the data attribute
        const targetContent = document.querySelector(input.getAttribute('data-target-content'));

        // Update the text of the target content
        targetContent.textContent = input.value;
      });
    });
// ----------------------------------------------------------------------
    }, []);


  return (
    <div >
      <main className="flex flex-col items-center justify-between min-h-screen p-4 bg-white">
        <div className="flex">
          {/* Render toggle button */}
          <button
            className="fixed z-10 p-2 bg-white rounded-md shadow-md top-2 left-2"
            onClick={() => setSidebarVisible(!sidebarVisible)}
          >
            {sidebarVisible ? '>>' : '<<'}
          </button>

          {/* Render sidebar */}
          <div
            className={`fixed top-0 right-0 md:w-80 w-64 h-screen bg-white shadow-lg transition-all duration-300 transform ${
              sidebarVisible ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            {/* sidebar content*/}
            <h2 className="py-10 p-4 text-lg font-semibold text-black">Toolbar</h2>
            <input type="file" id="image-input" accept="image/*" hidden></input>
            <div className="px-2 flex-row gap-2 md:items-start md:text-left sidebar-content content-1 hidden">
                <h3 className="py-10 p-4 text-lg font-semibold text-black text-center">Header</h3>
                <div className='flex flex-col'>
                    <h2 className="mb-2 text-base font-normal text-black">Logo</h2>
                    {/* input content 1*/}
                    <input type="text" data-target-content="#content-1" name="hero-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div>
                    <h2 className="mb-2 text-base font-normal text-black">Title</h2>
                    {/* input content 2 */}
                    <input type="text" data-target-content="#content-2" name="hero-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
            </div>
            <div className="px-2 py-16 flex-row gap-2 md:items-start md:text-left sidebar-content content-2 hidden">
              <h3 className="py-10 p-4 text-lg font-semibold text-black text-center">Hero Section</h3>
                <div className='flex flex-col'>
                    <h2 className="mb-2 text-base font-normal text-black">Title</h2>
                    {/* input content 3*/}
                    <input type="text" data-target-content="#content-3" name="hero-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    <h2 className="mb-2 text-base font-normal text-black">Description</h2>
                    {/* input content 4*/}
                    <input type="text" data-target-content="#content-4" name="hero-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="flex flex-col justify-center">
                    <h2 className="mb-2 text-base font-normal text-black">Image</h2>
                    <button data-target-preview="#image-preview-1" className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Select Image</button>
                </div>
            </div>
            <div className="px-2 py-16 flex-row gap-2 md:items-start md:text-left sidebar-content content-3 hidden">
              <h3 className="py-10 p-4 text-lg font-semibold text-black text-center">Content Marketing</h3>
                <div className='flex flex-col'>
                    <h2 className="mb-2 text-base font-normal text-black">Title</h2>
                    {/* input content 5*/}
                    <input type="text" data-target-content="#content-5" name="hero-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    <h2 className="mb-2 text-base font-normal text-black">Description</h2>
                    {/* input content 6*/}
                    <input type="text" data-target-content="#content-6" name="hero-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="flex flex-col justify-center">
                    <h2 className="mb-2 text-base font-normal text-black">Image</h2>
                    <button data-target-preview="#image-preview-2" className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Select Image</button>
                </div>
            </div>
            <div className="px-2 py-16 flex-row gap-2 md:items-start md:text-left sidebar-content content-4 hidden">
              <h3 className="py-10 p-4 text-lg font-semibold text-black text-center">CTA</h3>
                <div className='flex flex-col'>
                    <h2 className="mb-2 text-base font-normal text-black">Title</h2>
                    {/* input content 7*/}
                    <input type="text" data-target-content="#content-7" name="hero-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    <h2 className="mb-2 text-base font-normal text-black">Description</h2>
                    {/* input content 8*/}
                    <input type="text" data-target-content="#content-8" name="hero-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="flex flex-col justify-center">
                    <h2 className="mb-2 text-base font-normal text-black">Image</h2>
                    <button data-target-preview="#image-preview-3" className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Select Image</button>
                </div>
            </div>
            <div className='flex flex-row fixed bottom-0 gap-2 px-2 py-2 items-center'>
              <button id="save-button" className="text-white bg-black border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm">Save Changes</button>
              <button id="preview-button" className="text-white bg-black border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm">Preview/Publish</button>
            </div>
          </div>

          {/* Render main content */}
          <div
            className={`flex-grow transition-all duration-300 ${
              sidebarVisible ? 'mr-64' : 'mr-0'
            }`}
          >
            {/* main content */}
            <div id="main-content" className='main-section'>
              <header className="border-0 py-2 px-6 focus:outline-none hover:shadow-lg rounded body-font main-section-item" data-target-content="content-1">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                  <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span id="content-1" className="ml-3 text-xl">Logo</span>
                  </a>
                  <div className="md:w-1/2 lg:pl-74 md:pl-60 flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span id="content-2" className="ml-3 text-l">My Portofolio</span>
                  </div>
                </div>
              </header>
              <section className="border-0 py-2 px-6 focus:outline-none hover:shadow-lg rounded text-gray-600 body-font main-section-item" data-target-content="content-2">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img id="image-preview-1" className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/420x300" />
                  </div>
                  <div className="lg:flex-grow md:w-1/2 d:w-1/2 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 id="content-3" className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Lorem Ipsum Title
                    </h1>
                    <h1 id="content-4" className="mb-8 leading-relaxed">What is Lorem Ipsum?
                      <br className="hidden lg:inline-block" />Lorem Ipsum is simply dummy text of the printing and typesetting industry
                    </h1>
                  </div>
                </div>
                <div className="h-px border border-black Line3 w-83"></div>
              </section>
              <section className="border-0 py-2 px-6 focus:outline-none hover:shadow-lg rounded text-gray-600 body-font main-section-item" data-target-content="content-3">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                  <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 id="content-5" className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Lorem Ipsum Title
                    </h1>
                    <h1 id="content-6" className="mb-8 leading-relaxed">What is Lorem Ipsum?
                      <br className="hidden lg:inline-block" />Lorem Ipsum is simply dummy text of the printing and typesetting industry
                    </h1>
                  </div>
                  <div className="lg:max-w-lg lg:w-full d:w-1/2 md:pl-16 md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img id="image-preview-2" className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/420x300" />
                  </div>
                </div>
                <div className="h-px border border-black Line3 w-83"></div>
              </section>
              <section className="border-0 py-2 px-6 focus:outline-none hover:shadow-lg rounded text-gray-600 body-font main-section-item" data-target-content="content-4">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img id="image-preview-3" className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/420x300" />
                  </div>
                  <div className="lg:flex-grow md:w-1/2 d:w-1/2 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 id="content-7" className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Lorem Ipsum Title
                    </h1>
                    <h1 id="content-8" className="mb-8 leading-relaxed">What is Lorem Ipsum?
                      <br className="hidden lg:inline-block" />Lorem Ipsum is simply dummy text of the printing and typesetting industry
                    </h1>
                  </div>
                </div>
                <div className="h-px border border-black Line3 w-83"></div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}