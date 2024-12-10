"use client";

import { useRouter } from 'next/navigation';
import { useState } from "react";
import Image from 'next/image';
import apiClient from '../../../utils/api';

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleSignup = async () => {
    try {
      // Validate inputs
      if (!email || !password || !confirmPassword) {
        throw new Error("All fields are required");
      }
      if (password !== confirmPassword) {
        throw new Error("Passwords do not match");
      }
  
      // Make API call using apiClient
      const response = await apiClient.post('/api/users/signup', {
        email,
        password,
      });
  
      // If successful, redirect to the dashboard
      if (response.status === 201) {
        router.push("/dashboard");
      } else {
        console.log("handler error", "someting when wrong")
        throw new Error(response.data?.message || "Signup failed");
      }
    } catch (err: any) {
      // Handle errors
      setError(err.response?.data?.message || err.message || "Signup failed");
    }
  };
  

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
  <div className="flex items-center mb-8 text-center">
    <Image
      src="/images/stkva-logo.png" // Path to your logo inside the public directory
      alt="Stackvarsity Logo"
      width={150} // Adjust width as needed
      height={50} // Adjust height as needed
    />
  </div>

  <div className="w-full max-w-md bg-white p-6 rounded shadow">
    <h1 className="text-2xl text-blue-600 font-bold mb-4 text-center">Sign Up</h1>
    {error && <p className="text-red-600 mb-4">{error}</p>}
    {success && <p className="text-green-600 mb-4">{success}</p>}

    <input
      autoComplete='true'
      name="email"
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="w-full text-gray-500 border px-3 py-2 mb-4 rounded"
    />

    <input
      name="password"
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="w-full text-gray-500 border px-3 py-2 mb-6 rounded"    />

    <input
      type="password"
      placeholder="Confirm Password"
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
      className="w-full border px-3 py-2 mb-4 rounded"
    />

    <button
      onClick={handleSignup}
      className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
    >
      Sign Up
    </button>

    <p className="text-center mt-4">
      Already have an account?{" "}
      <a href="/auth/login" className="text-blue-600 hover:underline font-semibold">
        Login
      </a>
    </p>
  </div>
</div>
 
  ); 
}
