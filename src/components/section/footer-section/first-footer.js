// Di edit.js
"use client"

import { useContext } from 'react';
import { DataContext } from '@/constants';

export default function FirstFoot({ onClick }) {

  const { data } = useContext(DataContext);
    
    return (
    <>
        <div className="items-center p-4 bg-black"
        onClick={onClick}>
            <div className="flex justify-center pt-10 pb-14 md:pb-9"> 
                <img className="w-2/5 md:w-[25%] lg:w-[18%] xl:w-[15%]" src="images/cucet-footer-logo.png" alt="" /> 
            </div>
            <div className="grid justify-between grid-cols-1 space-y-9 md:grid-cols-2 md:pl-24 md:pr-16 lg:grid-cols-4 lg:px-7 xl:px-14 xl:ml-16">
                
                <div className="flex-col justify-between md:flex">
                    <div className="text-[#747474] text-[15px] font-[550] leading-7 tracking-wide">
                        <div className="flex justify-start">
                            <h1 className="text-white pb-[34px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
                                {data.footer[0].title}
                            </h1>
                        </div>
                            <p className='break-words'>{data.footer[0].description}</p>
                    </div>
                    <div
                        className="text-[#747474] text-[15px] font-[550] leading-6 tracking-wide mt-9 md:order-5 md:pt-32 lg:pb-28">
                        <div className="flex justify-start md:-mt-32">
                            <h1 className="text-white pb-[38px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
                                support 
                            </h1>
                        </div>
                        <p className=""> <a href="https://www.linkedin.com/in/fariz-abqari-fawwaz-illahi-7425321a5/" className="hover:text-[#cacaca]">Created by @website.builder</a> </p>
                    </div>
                </div>
                <div className="text-[#797878] text-[15px] font-[550] leading-6 tracking-wide md:order-4 lg:">
                    <div className="flex justify-start">
                        <h1 className="text-white pb-[38px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
                            {data.footer[0].contact}
                        </h1>
                    </div>
                    <p className="space-x-3"> <i className="fa fa-home text-[17px]"></i><strong
                            className="text-[#8b8b8b] text-[15px] tracking-wide">{data.footer[0].home}</strong> </p>
                    <div className="leading-7">
                        <p className="break-words">
                            {data.footer[0].address}
                        </p>
                    </div>
                    <div className="leading-7 mt-4 text-[15px] font-[500]">
                        <p className="space-x-3 hover:text-[#cacaca]"> 
                            <i className="fa fa-phone text-[17px]"></i> 
                            <a href={`tel:${data.footer[0].route}`}> {data.footer[0].route}</a> 
                        </p>
                        <p className="space-x-3 hover:text-[#cacaca]"> 
                            <i className="fa fa-envelope text-[16px]"></i> 
                            <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${data.footer[0].email}&bcc=EMAIL_BCC`}> {data.footer[0].email}</a> 
                        </p>
                    </div>
                </div>
            </div>
            <div className="divide-y divide-[#747474] contrast-200 mt-3 mb-3 md:-mt-4 md:-mb-2 lg:-mt-16 xl:-mt-24">
                <p>&nbsp;</p>
                <p>&nbsp;</p>
            </div>
            <div className="flex justify-center mb-4 md:mb-1 text-[#afafaf] text-center text-xl space-x-3">
                <p> 
                    <a href={data.social[0].route} className="w-10 h-10 bg-[#474747] hover:text-blue-500 transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-[6px]">
                        <i className="fa fa-twitter"></i>
                    </a>
                </p>
                <p> 
                    <a href={data.social[0].route} className="w-10 h-10 bg-[#474747] hover:text-blue-500 transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-[6px]">
                        <i className="fa fa-instagram"></i>
                    </a> 
                </p>
                <p> 
                    <a href={data.social[2].route} className="w-10 h-10 bg-[#474747] hover:text-blue-500 transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-[7px]">
                        <i className="fa fa-facebook"></i>
                    </a> 
                </p>
                <p> 
                    <a href={data.social[3].route} className="w-10 h-10 bg-[#474747] hover:text-blue-500 transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-[6px]">
                        <i className="fa fa-linkedin"></i>
                    </a> 
                </p>
            </div>
        </div>
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
    </>
    );
}