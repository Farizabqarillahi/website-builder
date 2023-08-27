"use client"
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import 'tailwindcss/tailwind.css';

const validateEmail = (email) => {
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
  return emailRegex.test(email);
};

export default function RegisterApp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      setError('All fields are required');
    } else if (!validateEmail(email)) {
      setError('Invalid email address');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else if (password.length < 8) {
      setError('Password must be at least 8 characters long');
    } else if (!/[a-z]/.test(password)) {
      setError('Password must contain at least one lowercase letter');
    } else if (!/[A-Z]/.test(password)) {
      setError('Password must contain at least one uppercase letter');
    } else if (!/[0-9]/.test(password)) {
      setError('Password must contain at least one number');
    } else {
      alert('register berhasil');
      console.log('register berhasil');
      router.push('/mysitesuser');
    } 
  };
  //   } else {
  //     try {
  //       const response = await fetch('https://courageous-outerwear-ant.cyclic.cloud/auth/register', {
  //         method: 'POST',
  //         headers: { 'Content-Type': 'application/json' },
  //         body: JSON.stringify({ email, password }),
  //       });
  //       const data = await response.json();
  //       console.log(data); // handle successful registration
  //       if (data.success) {
  //         alert('Register berhasil');
  //         router.push('/choose-template');
  //       } else {
  //         setError(data.message); // handle error during registration
  //       }
  //       } catch (error) {
  //         console.error(error); // handle error during registration
  //       }
  //     }
  // };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="mb-4 text-4xl font-bold">Sign Up</h1>
      <p className="mb-4 text-gray-600">
        Already have an account? <Link className="text-blue-500" href="/login">Log In</Link>
      </p>
      {error && <p className="mb-2 text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-80">
        <label className="font-medium text-gray-700">Email</label>
        <input
          className="p-2 border border-gray-300 rounded-md"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="font-medium text-gray-700">Password</label>
        <input
          className="p-2 border border-gray-300 rounded-md"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label className="font-medium text-gray-700">Confirm Password</label>
        <input
          className="p-2 border border-gray-300 rounded-md"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-2 font-medium text-white transition duration-200 bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}