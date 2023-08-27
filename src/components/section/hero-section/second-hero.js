// Di edit.js
"use client"

import { useContext } from 'react';
import { DataContext, SetListData } from '@/constants';
import Link from 'next/link';

export default function SecondHero({onClick}) {

  const { data } = useContext(DataContext);
    
      return (
        <div onClick={onClick}>
          <div className="flex justify-center ">
            <nav className="self-center w-full max-w-7xl ">
                <div className="flex flex-col items-center justify-around lg:flex-row ">
                    <h1 className="py-4 pl-5 font-sans text-lg font-bold uppercase">{data.hero[0].name}</h1>
                    <div className="inline-flex pr-5 text-base text-center "> 
                    {data.social.map((link) => (
                        <Link key={link.id} href={link.route} className="w-8 h-8 inline-block rounded-full pt-[6px] hover:text-blue-500">
                        <i className={`fa fa-${link.label.toLowerCase()}`}></i>
                        </Link>
                    ))}
                    </div>
                </div>
            </nav>
        </div>
        <div className="flex justify-center ">
            <div className="flex flex-col justify-center">

                <div className="flex flex-col items-center justify-center p-2 mt-10 max-w-7xl">
                    <div className="flex flex-col w-[90%] md:w-3/4 text-center items-center justify-center space-y-3">
                        <div className="text-5xl font-bold break-all ">
                        {data.hero[0].title}
                        </div>
                        <div className="font-semibold text-gray-400 break-alltext-xl ">
                        {data.hero[0].description}
                        </div>
                    </div>
                    <div className="w-3/4 my-4 overflow-hidden rounded-lg h-60 md:h-96">
                        <img src={data.hero[0].image} className="w-full h-full" alt=""/>
                    </div>
                </div>
                
            </div>
        </div>
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script> 
      </div>
      );
    }