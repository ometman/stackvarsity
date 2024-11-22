import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between">
          <h1 className="text-xl font-bold">StackVarsity</h1>
          <nav>
            <Link href="/auth/login" className="mr-4">Login</Link>
            <Link href="/auth/signup">Signup</Link>
          </nav>
        </div>
      </header>
      <main className="container mx-auto py-10">
        <h2 className="text-4xl font-bold mb-6">Learn Web Development Easily</h2>
        <p className="text-lg mb-4">
          Join our platform to learn, practice, and master web development skills.
        </p>
        <Link href="/dashboard" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Go to Dashboard
        </Link>
      </main>
    </div>
  );
}
