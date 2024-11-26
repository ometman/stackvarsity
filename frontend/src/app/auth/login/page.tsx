"use client";

import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      // Mock backend call for authentication
      if (!email || !password) {
        throw new Error('Email and password are required');
      }
      console.log('Logging in:', { email, password });
      setError('');
    } catch (err: any) {
      setError(err.message || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded shadow">
        <h1 className="text-2xl text-blue-600 font-bold mb-4 text-center">
            Stackvarsity Login
        </h1>
        {error && <p className="text-red-600 mb-4">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border px-3 py-2 mb-4 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border px-3 py-2 mb-4 rounded"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
        <p className="text-center mt-4">
          Don't have an account?{' '}
          <a
            href="/auth/signup"
            className="text-blue-600 hover:underline font-semibold"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

