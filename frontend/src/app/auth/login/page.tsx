"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import apiClient from "../../../utils/api"; // Importing the pre-configured axios instance

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    setIsLoading(true);
    setError(""); // Clear previous errors
    try {
      const response = await apiClient.post("/api/users/login", { email, password });
      console.log(response)
      router.push("/dashboard"); // Navigate to the dashboard on successful login
    } catch (error: any) {
      setError(error.response?.data?.message || "An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
<>
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="flex items-center mb-8">
        <Image
          src="/images/stkva-logo.png"
          alt="Stackvarsity Logo"
          width={150}
          height={50}
        />
      </div>

      <div className="w-full max-w-md bg-white p-6 rounded shadow">
        <h1 className="text-2xl text-blue-600 font-bold mb-6 text-center">Login</h1>

        {error && <p className="text-red-600 mb-4">{error}</p>}

        <input
          autoComplete="true"
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
          className="w-full text-gray-500 border px-3 py-2 mb-6 rounded"
        />

        <button
          onClick={handleLogin}
          disabled={isLoading}
          aria-busy={isLoading}
          aria-disabled={isLoading}
          className={`w-full py-2 rounded text-white ${
            isLoading
              ? "bg-blue-400 cursor-not-allowed opacity-50"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>

        <p className="text-center mt-6">
          Don't have an account?{" "}
          <a
            href="/auth/signup"
            className="text-blue-600 hover:underline font-semibold"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
    </>
  );
}
