// Di edit.js
"use client"

import { useContext } from 'react';
import { DataContext } from '@/pages/trial';

export default function FirstCont() {

//   const { data } = useContext(DataContext);
    
      return (
        <>
            <section className="flex justify-center">
                <div className="flex flex-col justify-center">
                    <div className="flex flex-col items-center justify-center md:flex-row max-w-7xl ">
                        <div className="flex flex-col justify-center w-full m-4 overflow-hidden shadow-sm md:flex-row">
                            <div className="flex flex-col items-center md:flex-row">
                                <div className="w-full overflow-hidden "> <img src="https://source.unsplash.com/700x350/?city" alt=""
                                        className="" /> </div>
                                <div className="m-4 md:w-2/3 ">
                                    <div className="flex m-2 text-sm text-gray-500">
                                        <div className="m-1 font-bold">Vlog,</div>
                                        <div className="m-1">31 March, 2023</div>
                                    </div>
                                    <div className="m-2 text-xl font-bold text-black">The 8 Best City Lights In The World! </div>
                                    <div className="m-2 mt-4 text-sm text-gray-500"><a href="#">There's something about city lights that
                                            make them so captivating and romantic. Maybe it's because they remind us of all the
                                            possibilities that exist in the world, or maybe it's because they're just so darn pretty
                                            to look at.

                                            No matter what the reason is, there's no denying that city lights are some of the most
                                            beautiful things in the world.</a></div>
                                    <div className="flex cursor-pointer">
                                        <div className="m-2"> <img src="https://source.unsplash.com/50x50/?man" alt=""
                                                className="rounded-full " /> </div>
                                        <div className="grid m-1">
                                            <div className="mt-2 text-sm font-bold hover:text-gray-600">Jason Bourne</div>
                                            <div className="text-sm hover:text-gray-600">Student, Los Angeles</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
      );
    }