"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Invalid login credentials");
      }

      router.push("/dashboard");
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
  <div className="flex items-center mb-8">
    <Image
      src="/images/stkva-logo.png" // Path to your logo inside the public directory
      alt="Stackvarsity Logo"
      width={150} // Adjust width as needed
      height={50} // Adjust height as needed
    />
  </div>

  <div className="w-full max-w-md bg-white p-6 rounded shadow">
    <h1 className="text-2xl text-blue-600 font-bold mb-6 text-center">Login</h1>
    
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
      className="w-full border px-3 py-2 mb-6 rounded"
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
  );
}
