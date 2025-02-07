export default function Loading() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-700">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-600 mb-4"></div>
        <p className="text-xl font-medium">Loading...</p>
      </div>
    );
  }
  