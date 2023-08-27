// Di edit.js
"use client"

import { useContext } from 'react';
import { DataContext, SetListData } from '@/constants';
import Link from 'next/link';

export default function FirstHero({ onClick }) {
    const { data } = useContext(DataContext);


  return (
    
        <div onClick={onClick}>
        <div className="flex justify-center bg-black">
            <nav className="self-center w-full max-w-7xl ">
                <div className="flex flex-col items-center justify-around text-white lg:flex-row">
                    <h1 className="py-4 pl-5 font-sans text-lg font-bold uppercase">{data.hero[0].name}</h1>
                    <div className="inline-flex pr-5 text-base text-center text-white">
                        <Link href={data.social[0].route} className="w-8 h-8 inline-block rounded-full pt-[6px] hover:text-blue-500">
                            <i className="fa fa-twitter"></i>
                        </Link>
                        <Link href={data.social[1].route} className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500">
                            <i className="fa fa-instagram"></i>
                        </Link> 
                        <Link href={data.social[2].route} className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500">
                            <i className="fa fa-facebook"></i>
                        </Link> 
                        <Link href={data.social[3].route} className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500">
                            <i className="fa fa-linkedin"></i>
                        </Link>
                        <Link href={data.social[4].route} className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500">
                            <i className="fa fa-google"></i>
                        </Link> 
                    </div>
                    </div>
                </nav>
            </div>
            <div className="flex justify-center p-8 bg-black ">
                <div className="flex flex-col justify-center">

                    <div className="flex flex-col items-center justify-center w-full p-2 space-y-3 lg:flex-row max-w-7xl">
                        <div className="flex flex-col items-center justify-between px-8 space-y-3 text-white md:items-start">
                            <div className="text-5xl font-bold break-words break-all md:text-7xl ">
                            {data.hero[0].title} </div>
                            <div className="text-lg uppercase break-words md:text-3xl ">
                            {data.hero[0].description}</div>
                        </div>
                        <div className="flex space-x-2 md:space-x-6 md:m-4">

                            <div className="overflow-hidden rounded-xl">
                                <img src={data.hero[0].image} className="w-full h-full" alt=""/>
                            </div>
    
                        </div>
                    </div>
                </div>
            </div>
            <script src="https://cdn.tailwindcss.com"></script>
            <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script> 
    </div>
  );
}
// referrence : https://tailblocks.org/header2