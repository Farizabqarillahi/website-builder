// Di edit.js
"use client"

import { useContext } from 'react';
import { DataContext } from '@/constants';

export default function FirstCont({ onClick }) {

  const { data } = useContext(DataContext);
    
    return (
    <>
        <section className="flex justify-center"
        onClick={onClick}
        >
        <div className="flex flex-col items-center justify-center md:flex-row max-w-7xl">
            <div className="flex flex-col justify-center w-3/4 m-4 overflow-hidden bg-white shadow-sm md:w-1/3">
                <div className="w-full overflow-hidden h-26"> <img src={data.content[0].image}
                        alt="" className="" /> </div>
                <div className="m-2 text-lg font-bold text-black">{data.content[0].title}</div>
                    <div className="m-2 text-sm text-gray-500">
                        <a href={data.content[0].route}>
                            {data.content[0].description}
                        </a>
                    </div>
                <div className="flex justify-between">
                    <div className="flex m-2">
                        <div className="m-1 mb-4 text-sm text-gray-500">
                        {data.content[0].subtitle}
                        </div>
                    </div>
                    <a href={data.content[0].route}>
                        <div className="m-2">
                            <div className="m-1 text-xl text-blue-500 cursor-pointer hover:text-pink-400 "> 
                            →
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div className="flex flex-col justify-center w-3/4 m-4 overflow-hidden bg-white shadow-sm md:w-1/3">
                <div className="w-full overflow-hidden h-26"> <img src={data.content[1].image}
                        alt="" className="" /> </div>
                <div className="m-2 text-lg font-bold text-black">{data.content[1].title}</div>
                    <div className="m-2 text-sm text-gray-500">
                        <a href={data.content[1].route}>
                        {data.content[1].description}
                        </a>
                    </div>
                <div className="flex justify-between">
                    <div className="flex m-2">
                        <div className="m-1 mb-4 text-sm text-gray-500">
                        {data.content[1].subtitle}
                        </div>
                    </div>
                    <a href={data.content[1].route}>
                        <div className="m-2">
                            <div className="m-1 text-xl text-blue-500 cursor-pointer hover:text-pink-400 "> 
                            →
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div className="flex flex-col justify-center w-3/4 m-4 overflow-hidden bg-white shadow-sm md:w-1/3">
                <div className="w-full overflow-hidden h-26"> <img src={data.content[2].image}
                        alt="" className="" /> </div>
                <div className="m-2 text-lg font-bold text-black">{data.content[2].title}</div>
                    <div className="m-2 text-sm text-gray-500">
                        <a href={data.content[2].route}>
                            {data.content[2].description}
                            </a>
                    </div>
                <div className="flex justify-between">
                    <div className="flex m-2">
                        <div className="m-1 mb-4 text-sm text-gray-500">
                        {data.content[2].subtitle}
                        </div>
                    </div>
                    <a href={data.content[2].route}>
                        <div className="m-2">
                            <div className="m-1 text-xl text-blue-500 cursor-pointer hover:text-pink-400 "> 
                            →
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        </section>
    </>
    );
}