"use client"

import { useContext } from 'react';
import { DataContext } from '@/constants';

export default function SecondCont({ onClick }) {

  const { data } = useContext(DataContext);
    
    return (
    <>
        <section className="flex justify-center"
        onClick={onClick}
        >
            <div className="flex flex-col justify-center mr-24 md:mr-0 lg:mr-24 xl:ml-24 md:ml-24 my-10 w-[90%] space-y-28 lg:space-y-24 max-w-7xl">
                <div className="flex flex-col items-center justify-center ">
                    <div className="mt-2 border-b-4 border-orange-500 md:mr-20">
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center lg:flex-row space-y-28 lg:space-y-0 lg:space-x-10">
                    <a href={data.content[0].route}>
                        <div className="focus:outline-none hover:shadow-lg hover:scale-105 bg-opacity-40 bg-slate-200 shadow-lg flex flex-col justify-center items-center py-4 h-56 md:w-[80%] lg:w-fit">
                                <div className="-mt-20 ">
                                    <img src={data.content[0].image} className="rounded-full w-36 h-36" alt=""/>
                                </div>
                                <p className="p-5 text-sm text-center">{data.content[0].description}</p>
                                <div className="flex flex-col justify-center text-center lg:space-x-3">
                                    <h1 className="text-lg font-semibold text-orange-500">{data.content[0].title}</h1>
                                    <p className="text-black text-sm lg:mt-[5px]">{data.content[0].subtitle}</p>
                                </div>
                        </div>
                    </a>
                    <a href={data.content[1].route}>
                        <div className="focus:outline-none hover:shadow-lg hover:scale-105 bg-opacity-40 bg-slate-200 shadow-lg flex flex-col justify-center items-center py-4 h-56 md:w-[80%] lg:w-fit">
                            <div className="-mt-20 ">
                                <img src={data.content[1].image} className="rounded-full w-36 h-36" alt=""/>
                            </div>
                            <p className="p-5 text-sm text-center">{data.content[1].description}</p>
                            <div className="flex flex-col justify-center text-center lg:space-x-3">
                                <h1 className="text-lg font-semibold text-orange-500">{data.content[1].title}</h1>
                                <p className="text-black text-sm lg:mt-[5px]">{data.content[1].subtitle}</p>
                            </div>
                        </div>
                    </a>
                    <a href={data.content[2].route}>
                        <div className="focus:outline-none hover:shadow-lg hover:scale-105 bg-opacity-40 bg-slate-200 shadow-lg flex flex-col justify-center items-center py-4 h-56 md:w-[80%] lg:w-fit">
                            <div className="-mt-20 ">
                                <img src={data.content[2].image} className="rounded-full w-36 h-36" alt=""/>
                            </div>
                            <p className="p-5 text-sm text-center">{data.content[2].description}</p>
                            <div className="flex flex-col justify-center text-center lg:space-x-3">
                                <h1 className="text-lg font-semibold text-orange-500">{data.content[2].title}</h1>
                                <p className="text-black text-sm lg:mt-[5px]">{data.content[2].subtitle}</p>
                            </div>
                        </div>  
                    </a>
                </div>
            </div>
            <script src="https://cdn.tailwindcss.com"></script>
            <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script> 
        </section>
    </>
    );
}