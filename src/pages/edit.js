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
            className="fixed z-10 p-2 text-white bg-black rounded-md shadow-md top-2 left-2"
            onClick={() => setSidebarVisible(!sidebarVisible)}
          >
            {sidebarVisible ? '>>' : '<<'}
          </button>

          {/* Render sidebar */}
          <div
            className={`fixed top-0 right-0 md:w-64 sm:w-64 lg:w-80 w-64 h-screen bg-white shadow-lg transition-all duration-300 transform ${
              sidebarVisible ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            {/* sidebar content*/}
            <h2 className="p-4 py-10 text-lg font-semibold text-black">Toolbar</h2>
            <input type="file" id="image-input" accept="image/*" hidden></input>
            <div className="flex-row hidden gap-2 px-2 md:items-start md:text-left sidebar-content content-1">
                <h3 className="p-4 py-10 text-lg font-semibold text-center text-black">Header</h3>
                <div className='flex flex-col'>
                    <h2 className="mb-2 text-base font-normal text-black">Logo</h2>
                    {/* input content 1*/}
                    <input type="text" data-target-content="#content-1" name="hero-field" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500" />
                </div>
                <div>
                    <h2 className="mb-2 text-base font-normal text-black">Title</h2>
                    {/* input content 2 */}
                    <input type="text" data-target-content="#content-2" name="hero-field" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500" />
                </div>
            </div>
            <div className="flex-row hidden gap-2 px-2 py-16 md:items-start md:text-left sidebar-content content-2">
              <h3 className="p-4 py-10 text-lg font-semibold text-center text-black">Hero Section</h3>
                <div className='flex flex-col'>
                    <h2 className="mb-2 text-base font-normal text-black">Title</h2>
                    {/* input content 3*/}
                    <input type="text" data-target-content="#content-3" name="hero-field" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500" />
                    <h2 className="mb-2 text-base font-normal text-black">Description</h2>
                    {/* input content 4*/}
                    <input type="text" data-target-content="#content-4" name="hero-field" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500" />
                </div>
                <div className="flex flex-col justify-center">
                    <h2 className="mb-2 text-base font-normal text-black">Image</h2>
                    <button data-target-preview="#image-preview-1" className="inline-flex px-6 py-2 text-lg text-white bg-black border-0 rounded focus:outline-none hover:bg-indigo-600">Select Image</button>
                </div>
            </div>
            <div className="flex-row hidden gap-2 px-2 py-16 md:items-start md:text-left sidebar-content content-3">
              <h3 className="p-4 py-10 text-lg font-semibold text-center text-black">Content Marketing</h3>
                <div className='flex flex-col'>
                    <h2 className="mb-2 text-base font-normal text-black">Title</h2>
                    {/* input content 5*/}
                    <input type="text" data-target-content="#content-5" name="hero-field" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500" />
                    <h2 className="mb-2 text-base font-normal text-black">Description</h2>
                    {/* input content 6*/}
                    <input type="text" data-target-content="#content-6" name="hero-field" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500" />
                </div>
                <div className="flex flex-col justify-center">
                    <h2 className="mb-2 text-base font-normal text-black">Image</h2>
                    <button data-target-preview="#image-preview-2" className="inline-flex px-6 py-2 text-lg text-white bg-black border-0 rounded focus:outline-none hover:bg-indigo-600">Select Image</button>
                </div>
            </div>
            <div className="flex-row hidden gap-2 px-2 py-16 md:items-start md:text-left sidebar-content content-4">
              <h3 className="p-4 py-10 text-lg font-semibold text-center text-black">CTA</h3>
                <div className='flex flex-col'>
                    <h2 className="mb-2 text-base font-normal text-black">Title</h2>
                    {/* input content 7*/}
                    <input type="text" data-target-content="#content-7" name="hero-field" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500" />
                    <h2 className="mb-2 text-base font-normal text-black">Description</h2>
                    {/* input content 8*/}
                    <input type="text" data-target-content="#content-8" name="hero-field" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500" />
                </div>
                <div className="flex flex-col justify-center">
                    <h2 className="mb-2 text-base font-normal text-black">Image</h2>
                    <button data-target-preview="#image-preview-3" className="inline-flex px-6 py-2 text-lg text-white bg-black border-0 rounded focus:outline-none hover:bg-indigo-600">Select Image</button>
                </div>
            </div>
            <div className='fixed bottom-0 flex flex-row items-center gap-2 px-2 py-2'>
              <button id="save-button" className="px-6 py-1 text-sm text-white bg-black border-0 rounded focus:outline-none hover:bg-indigo-600">Save Changes</button>
              <button id="preview-button" className="px-6 py-1 text-sm text-white bg-black border-0 rounded focus:outline-none hover:bg-indigo-600">Preview / Publish</button>
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
              <header className="px-6 py-2 border-0 rounded focus:outline-none hover:shadow-lg body-font main-section-item" data-target-content="content-1">
                <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
                  <a className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
                    <span id="content-1" className="ml-3 text-xl">Logo</span>
                  </a>
                  <div className="flex items-center mb-4 font-medium text-gray-900 md:w-1/2 lg:pl-74 md:pl-60 title-font md:mb-0">
                    <span id="content-2" className="ml-3 text-l">My Portofolio</span>
                  </div>
                </div>
              </header>
              <section className="px-6 py-2 text-gray-600 border-0 rounded focus:outline-none hover:shadow-lg body-font main-section-item" data-target-content="content-2">
                <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
                  <div className="w-5/6 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
                    <img id="image-preview-1" className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/420x300" />
                  </div>
                  <div className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 d:w-1/2 md:pl-16 md:items-start md:text-left">
                    <h1 id="content-3" className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">Lorem Ipsum Title
                    </h1>
                    <h1 id="content-4" className="mb-8 leading-relaxed">What is Lorem Ipsum?
                      <br className="hidden lg:inline-block" />Lorem Ipsum is simply dummy text of the printing and typesetting industry
                    </h1>
                  </div>
                </div>
                <div className="h-px border border-black Line3 w-83"></div>
              </section>
              <section className="px-6 py-2 text-gray-600 border-0 rounded focus:outline-none hover:shadow-lg body-font main-section-item" data-target-content="content-3">
                <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
                  <div className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 md:items-start md:text-left">
                    <h1 id="content-5" className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">Lorem Ipsum Title
                    </h1>
                    <h1 id="content-6" className="mb-8 leading-relaxed">What is Lorem Ipsum?
                      <br className="hidden lg:inline-block" />Lorem Ipsum is simply dummy text of the printing and typesetting industry
                    </h1>
                  </div>
                  <div className="w-5/6 mb-10 lg:max-w-lg lg:w-full d:w-1/2 md:pl-16 md:w-1/2 md:mb-0">
                    <img id="image-preview-2" className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/420x300" />
                  </div>
                </div>
                <div className="h-px border border-black Line3 w-83"></div>
              </section>
              <section className="px-6 py-2 text-gray-600 border-0 rounded focus:outline-none hover:shadow-lg body-font main-section-item" data-target-content="content-4">
                <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
                  <div className="w-5/6 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
                    <img id="image-preview-3" className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/420x300" />
                  </div>
                  <div className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 d:w-1/2 md:pl-16 md:items-start md:text-left">
                    <h1 id="content-7" className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">Lorem Ipsum Title
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