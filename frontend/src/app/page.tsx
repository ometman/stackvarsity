import Header from '../components/Header';
export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto py-10">
        <h2 className="text-4xl text-gray-600 font-bold mb-6">Welcome to StackVarsity</h2>
        <p className="text-lg text-gray-400 mb-4">
          Join our platform to learn, practice, and master web development skills.
        </p>
      </main>
    </div>
  );
}
