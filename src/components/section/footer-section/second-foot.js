// Di edit.js
"use client"

import { useContext } from 'react';
import { DataContext } from '@/constants';

export default function SecondFoot({ onClick }) {

  const { data } = useContext(DataContext);
    
    return (
    <>
        <section className="flex items-center justify-around"
        onClick={onClick}
        >
          <div className="relative flex flex-row items-start justify-between w-full m-2 mt-8 ml-8 mr-8 max-w-7xl">
              <div className="relative gap-8">
                  <div className="p-3 space-y-10 bg-white md:grid md:grid-cols-2 md:-mt-6 lg:grid-cols-4">
                      <div className="w-1/2 md:ml-4 md:mt-9 md:w-3/4">
                          <h1 className="text-xl font-medium text-blue-600 break-words">{data.footer[0].contact}</h1> <br />
                          <strong className="text-[#8b8b8b] text-[15px] tracking-wide">{data.footer[0].home}</strong><br />
                          <p className="text-base font-medium text-gray-500 hover:text-blue-600 ">
                            {data.footer[0].address}
                          </p>
                          <p className="text-base font-medium text-gray-500 cursor-pointer hover:text-blue-600"> 
                            <strong className="font-normal tracking-wide text-blue-600">Phone:</strong> 
                            <a href={`tel:${data.footer[0].route}`}> {data.footer[0].route}</a> 
                          </p>
                          <p className="text-base font-medium text-gray-500 cursor-pointer hover:text-blue-600"> 
                            <strong className="font-normal tracking-wide text-blue-600">Email:</strong>
                            <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${data.footer[0].email}&bcc=EMAIL_BCC`}> {data.footer[0].email}</a>
                          </p>
                      </div>
                      <div className="md:order-2 lg:order-last">
                          <h1 className="text-blue-600 text-xl font-medium tracking-[0.030rem]"> {data.footer[0].title} </h1> <br />
                          <p className="w-3/5 mb-5 font-medium leading-7 text-gray-500 break-words md:w-3/4"> 
                              {data.footer[0].description}
                          </p>
                      </div>
                  </div>
                  <div className="flex-col hidden p-3 pt-5 space-y-8 text-center bg-gray-900 md:hidden lg:hidden xl:flex xl:flex-row xl:justify-between xl:space-y-0">
                      <div className="flex mx-8 justify-between space-x-20 md:flex-row text-gray-200 md:space-x-28 md:ml-24 lg:ml-36 lg:space-x-[13rem] xl:space-x-72 xl:ml-36">
                          <p>@ Copyright <strong>Telkom Indonesia <br /> </strong>All Rights Reserved</p>
                          <p>Created by <span className="text-blue-600">@website.builder</span></p>
                      </div>
                      <div className="text-white pb-4 text-center text-xl space-x-2 md:w-2/4 md:pb-0 md:pl-2 md:space-x-1 lg:pl-[171px] lg:space-x-2 xl:pl-44">
                          <a href={data.social[0].route} className="w-8 h-8 bg-orange-500 hover:text-orange-500 inline-block rounded-full pt-[3px] hover:bg-gray-200">
                            <i className="fa fa-twitter"></i>
                          </a> 
                          <a href={data.social[1].route} className="w-8 h-8 bg-orange-500 hover:text-orange-500 inline-block rounded-full pt-[3px] hover:bg-gray-200">
                            <i className="fa fa-instagram"></i>
                          </a> 
                          <a href={data.social[2].route} className="w-8 h-8 bg-orange-500 hover:text-orange-500 inline-block rounded-full pt-[3px] hover:bg-gray-200">
                            <i className="fa fa-facebook"></i>
                          </a> 
                          <a href={data.social[3].route} className="w-8 h-8 bg-orange-500 hover:text-orange-500 inline-block rounded-full pt-[3px] hover:bg-gray-200">
                            <i className="fa fa-linkedin"></i>
                          </a> 
                          <a href={data.social[4].route} className="w-8 h-8 bg-orange-500 hover:text-orange-500 inline-block rounded-full pt-[3px] hover:bg-gray-200">
                            <i className="fa fa-google"></i>
                          </a> 
                      </div>
                  </div>
              </div>
          </div>
        </section>
    </>
    );
}