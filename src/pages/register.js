"use client"
import { useState } from 'react';
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

  const handleSubmit = (e) => {
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
      // submit form
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Sign Up</h1>
      <p className="text-gray-600 mb-4">
        Already have an account? <a className="text-blue-500" href="/login">Log In</a>
      </p>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-80">
        <label className="font-medium text-gray-700">Email</label>
        <input
          className="border border-gray-300 p-2 rounded-md"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="font-medium text-gray-700">Password</label>
        <input
          className="border border-gray-300 p-2 rounded-md"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label className="font-medium text-gray-700">Confirm Password</label>
        <input
          className="border border-gray-300 p-2 rounded-md"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
