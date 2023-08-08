import React, { useState } from "react";
import 'tailwindcss/tailwind.css';
import { useRouter } from 'next/navigation';

export default function LoginApp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Email dan password harus diisi');
    } else {
      // cek apakah data yang diinputkan benar
      if (email === 'user@example.com' && password === 'password') {
        alert('Login berhasil');
        router.push('/choose-template');
      } else {
        setError('Email atau password salah');
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="w-80">
        <h1 className="text-2xl mb-4">Login</h1>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <label htmlFor="email" className="block mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />
        <label htmlFor="password" className="block mb-1">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded">
          Login
        </button>
      </form>
    </div>
  );
}
