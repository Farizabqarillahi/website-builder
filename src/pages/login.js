"use client"
import React, { useState } from "react";
import 'tailwindcss/tailwind.css';
import { useRouter } from 'next/navigation';

export default function LoginApp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Email dan password harus diisi');
    } else {
      try {
        const response = await fetch('https://courageous-outerwear-ant.cyclic.cloud/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        console.log(data); // log the response data to the console
        if (data.success) {
          if (data.adminStatus){
            alert('Mantap admin');
            router.push('/mysitesadmin');
          } else {
            alert('Login berhasil');
            router.push('/mysitesuser');
            console.log('user berhasil login')
          }
        } else {
          setError(data.message);
        }
      } catch (error) {
        console.error(error);
        setError('Terjadi kesalahan saat login');
      }
    }
  };
  

  const validateEmail = (email) => {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    return emailRegex.test(email);
  };

  // function validate(field, regex){
  //   if(regex.test(field.value)){
  //     field.className = 'valid';
  //   }else{
  //     field.className = 'invalid';
  //   }
  // }

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="w-80">
        <h1 className="mb-4 text-4xl font-bold">Login</h1>
        {error && <p className="mb-2 text-red-500">{error}</p>}
        <label htmlFor="email" className="block mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full p-2 border rounded mb-2 ${email && !validateEmail(email) && 'border-red-500'}`}
        />
        {email && !validateEmail(email) && <p className="mb-2 text-red-500">Invalid email format</p>}
        <label htmlFor="password" className="block mb-1">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <button type="submit" className="w-full py-2 text-white bg-blue-500 rounded">
          Login
        </button>
        <p className="mt-4 text-center">
          Dont have an account?{' '}
          <button onClick={() => router.push('/register')} className="text-blue-500">
            Sign Up
          </button>
        </p>
      </form>
    </div>
  );
}