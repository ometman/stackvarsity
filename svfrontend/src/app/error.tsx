'use client';

import { useEffect } from 'react';

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.log('Error:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-100 text-red-700">
      <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
      <p className="mb-6">{error.message}</p>
      <button
        onClick={reset}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Try Again
      </button>
    </div>
  );
}
