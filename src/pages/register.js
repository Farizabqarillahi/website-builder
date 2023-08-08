import React from 'react';
import 'tailwindcss/tailwind.css';
import Link from 'next/link';

function RegisterApp() {  //Ini adalah komponen App utama yang merender form pendaftaran
  return (
    // Ini adalah wadah utama untuk form
    <div className="flex flex-col items-center justify-center min-h-screen py-2"> 
      <h1 className="text-4xl font-bold mb-4">Sign Up</h1>
      <p className="text-gray-600 mb-4">
        Already have an account? <Link className="text-blue-500" href="/login">Log In</Link>
      </p>
      <div className="flex flex-col space-y-4">
        <label className="font-medium text-gray-700">Email</label>
        <input className="border border-gray-300 p-2 rounded-md" type="email" />
        <label className="font-medium text-gray-700">Password</label>
        <input className="border border-gray-300 p-2 rounded-md" type="password" />
        <label className="font-medium text-gray-700">Confirm Password</label>
        <input className="border border-gray-300 p-2 rounded-md" type="password" />
        <button className="bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default RegisterApp;