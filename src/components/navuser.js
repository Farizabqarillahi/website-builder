// import { IoMdAdd } from 'react-icons/io';
"use client"
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';
import Link from 'next/link';

export default function Navuser() {
    const router = useRouter();

    const handleLogout = async () => {
        // try {
        //     const response = await fetch('https://courageous-outerwear-ant.cyclic.cloud/auth/logout', {
        //         method: 'DELETE',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({
        //             // refreshToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTIzNjcwNjIsImV4cCI6MTcyMzkyNDY2MiwiYXVkIjoiNjRkZjc4YzkwYzNlOWU0MDRiMDg4NTVmIiwiaXNzIjoid2Vic2l0ZWJ1aWxkZXIuY29tIn0.5ICd2p25I9Uy43CmqSkpZBT2WAJcHm6jc2zJxpaRViw', // Ganti dengan token refresh yang sesungguhnya
        //         }),
        //     });
        //     const data = await response.json();
        //     console.log(data);
        //     if (response.ok) {
        //         // Logout berhasil, Anda dapat menangani logika tambahan di sini.
        //         console.log('Logout berhasil');
        //     } else {
        //         // Tangani kesalahan atau logout yang tidak berhasil di sini.
        //         console.error('Logout gagal');
        //     }
        // } catch (error) {
        //     // Tangani kesalahan jaringan atau pengecualian lainnya di sini.
        //     console.error('Terjadi kesalahan selama logout', error);
        // }
        try {
            // Simulasi proses logout tanpa API
            const isLogoutSuccessful = true; // Ganti dengan logika sesuai dengan aplikasi Anda

            if (isLogoutSuccessful) {
                // Logout berhasil, arahkan pengguna ke halaman landing page
                router.push('/landing-page'); // Ganti '/landing-page' dengan URL landing page Anda
                alert('Logout berhasil');
            } else {
                // Logout gagal, tampilkan pemberitahuan
                console.error('Logout gagal');
                alert('Logout gagal. Silakan coba lagi.');
            }
        } catch (error) {
            // Tangani kesalahan atau pengecualian lainnya di sini.
            console.error('Terjadi kesalahan selama logout', error);
        }
    };

    return (
        <main>
            <header className="text-gray-600 body-font">
                <div className="container flex flex-col flex-wrap items-center justify-between p-5 mx-auto md:flex-row">
                    <a className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
                        <Image src="/wix.png" alt="user-logo" width={36} height={36}/>
                    </a>
                    <a onClick={handleLogout} className="inline-flex items-center px-3 py-1 mt-4 text-base bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200 md:mt-0">
                        Log Out
                    </a>
                </div>
            </header>
            <div className="container flex flex-col items-center px-5 py-10 mx-auto md:flex-row">

                <div className="flex flex-col w-full pr-0 mb-6 text-center md:pr-10 md:mb-0 md:w-auto md:text-left">
                    <h1 className="text-2xl font-medium text-gray-900 md:text-3xl title-font">My Sites</h1>
                    <h2 className="mb-1 text-xs font-medium tracking-widest text-gray-900 title-font">Select a site to edit, view and open its dashboard.</h2>
                </div>
                <div className="flex items-center flex-shrink-0 mx-auto space-x-4 md:ml-auto md:mr-0">

                    <Link href='/choose-template' className="inline-flex items-center px-5 py-3 leading-6 bg-indigo-500 rounded-full hover:bg-indigo-300 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" viewBox="0,0,256,256">
                        <g fill="#ffffff" fill-rule="evenodd" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(10.66667,10.66667)"><path d="M11,2v9h-9v2h9v9h2v-9h9v-2h-9v-9z"></path></g></g>
                        </svg>
                        {/* <IoMdAdd className='text-xs text-white' /> */}
                        <span className="items-start ml-2">
                            <span className="mb-1 text-xs text-white">Create New Site</span>
                        </span>
                    </Link>
                </div>
            </div>
        </main>
    );
}
