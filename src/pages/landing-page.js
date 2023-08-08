import Image from 'next/image';
import Navbar from '../components/navbar';
import 'tailwindcss/tailwind.css';

export default function LandingPage() {
  return (
        <main className="flex flex-col w-screen max-w-full bg-white">
        <Navbar/>
            {/* Section 1 */}
            <section className="w-screen max-w-full min-h-screen py-0 sm:py-10 md:py-10 lg:py-10 xl:py-10 pb-10 bg-[#263a9d] flex items-center justify-center ">
                <div className="flex flex-col items-center justify-center animate-slide-in-from-left">
                    <span className="mx-auto mt-0 text-6xl font-bold tracking-tight text-center text-white whitespace-normal sm:text-mt-28 md:mt-28 lg:mt-28 xl:mt-28 max-w-8xl font-display sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl">
                        Create a website 
                        <br />
                        without limits
                    </span>
                    <p className="justify-center mt-4 text-sm text-center text-white md:text-sm lg:text-base xl:text-base">
                        Build and scale with confidence. From a powerful website builder to 
                        <br />
                        advanced business solutions—we’ve got you covered
                    </p>
                    <button href='/Login' className="transform transition duration-500 hover:scale-110 flex items-center justify-center w-[139px] h-[52px] rounded-[26px] bg-white mt-5 text-black">
                        Get Started
                    </button>
                    <span className='mt-4 text-xs text-white'><a href="/" className="text-white hover:text-blue-300">Try WB. </a>No credit card required.</span>
                    <div className="p-2 mt-10 bg-gray-500 bg-opacity-50 rounded-lg">
                        <Image src="/dogWeb.png" alt="web-image-1" width={500} height={300} />
                    </div>
                </div>
            </section>
            {/* Section 2 */}
            <section className="flex items-start justify-start w-screen max-w-full mt-20 mb-20 bg-white h-60vh">
            
                <div className="flex flex-col justify-center gap-8 ml-20 sm:ml-20 md:ml-20 lg:mx-auto xl:mx-auto">
                    <p className="text-5xl font-bold text-left text-black sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl">
                        <span className="font-bold text-left text-black">One platform,</span>
                        <br />
                        <span className="font-bold text-left text-black">
                        infinite possibilities
                        </span>
                    </p>
                    <div className='flex flex-wrap gap-10'>
                        <div className="flex flex-col gap-4 mt-10">
                                <svg
                                width={300}
                                height={1}
                                viewBox="0 0 300 1"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0"
                                preserveAspectRatio="none"
                                >
                                <line y1="0.5" x2={300} y2="0.5" stroke="black" />
                                </svg>
                                <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-left text-black">
                                Unlimited creation
                                </p>
                                <p className="flex-grow-0 flex-shrink-0 w-[300px] text-base text-left text-black">
                                Create a website with a complete suite of advanced functionalities and bring your vision to
                                life.
                                </p>
                        </div>
                        <div className="flex flex-col gap-4 mt-10">
                            <svg
                            width={300}
                            height={1}
                            viewBox="0 0 300 1"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex-grow-0 flex-shrink-0"
                            preserveAspectRatio="none"
                            >
                            <line x1="0.000732422" y1="0.5" x2="300.001" y2="0.5" stroke="black" />
                            </svg>
                            <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-left text-black">
                            Powerful infrastructure
                            </p>
                            <p className="flex-grow-0 flex-shrink-0 w-[300px] text-base text-left text-black">
                            Get an enterprise-grade foundation, engineered for your limitless scalability and peace of
                            mind.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 mt-10">
                            <svg
                            width={300}
                            height={1}
                            viewBox="0 0 300 1"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex-grow-0 flex-shrink-0"
                            preserveAspectRatio="none"
                            >
                            <line x1="0.000732422" y1="0.5" x2="300.001" y2="0.5" stroke="black" />
                            </svg>
                            <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-left text-black">
                            The place for growth
                            </p>
                            <p className="flex-grow-0 flex-shrink-0 w-[300px] text-base text-left text-black">
                            Convert and scale seamlessly with built-in marketing and business solutions.
                            </p>
                        </div>
                    </div>
                    <button href='/' className="transform transition duration-500 hover:scale-110 flex items-center justify-center w-[139px] h-[52px] rounded-[26px] bg-black mt-10 text-white">
                        Get Started
                    </button>
                </div>
            </section>
            {/* Section 3 */}
            <section className="w-screen max-w-full h-[60vh] bg-black flex items-center justify-center">
                <div className="flex flex-col justify-center gap-6 px-4 mx-auto sm:px-0">
                    <p className="text-5xl font-bold text-center text-white sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl">
                        Website templates that set you up for success
                    </p>
                    <p className="text-base text-center text-white">
                        Get a headstart on your journey with 900+ free, customizable website templates, strategically
                        <br/>
                        researched and tailored for every industry — or start from a blank canvas on our website
                        builder.
                    </p>
                    <div className="flex justify-center">
                        <button href='/' className="transform transition duration-500 hover:scale-110 flex items-center justify-center w-[139px] h-[52px] rounded-[26px] bg-white mt-5 text-black">
                            Get Started
                        </button>
                    </div>
                </div>       
            </section>
        </main>
    );
};
