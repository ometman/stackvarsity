import Header from '../components/Header';
import Footer from '../components/Footer';
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header isAuthenticated={false} />
      <main className="container mx-auto py-10">
        <h2 className="text-4xl text-gray-600 font-bold mb-6">Welcome to StackVarsity</h2>
        <p className="text-lg text-gray-400 mb-4">
          Join our platform to learn, practice, and master web development skills.
        </p>
      </main>
      <Footer />
    </div>
  );
}
