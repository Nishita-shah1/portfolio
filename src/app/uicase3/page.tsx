'use client';  // This ensures the component is client-side
import { useRouter } from 'next/navigation';  // Use next/navigation for proper routing in client-side components

export default function EmpoweringArtisans() {
  const router = useRouter();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Back Button */}
      <button
        onClick={() => router.back()} // Navigates to the previous page (Skills or Home page)
        className="bg-pink-600 text-white py-2 px-4 rounded-lg mb-8 hover:bg-pink-700 transition-all"
      >
        Back
      </button>

      <h1 className="text-3xl font-bold text-gray-700 mb-6">Netflix Mobile View App Wireframe</h1>
      <p className="text-lg text-gray-600 mb-6">
        I designed a Netflix wireframe to streamline the user interface and enhance the browsing experience. The layout focuses on intuitive navigation, optimized for seamless content discovery. Key features include personalized recommendations, trending categories, and an interactive watchlist.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Image 1 */}
        <img
          src="/Frame4.png" // Replace with the correct image path
          alt="Netflix Wireframe Image 1"
          className="rounded-lg shadow-md"
        />
        {/* Image 2 */}
        <img
          src="/Frame8.png" // Replace with the correct image path
          alt="Netflix Wireframe Image 2"
          className="rounded-lg shadow-md"
        />
        {/* Image 3 */}
        <img
          src="/Frame7.png" // Replace with the correct image path
          alt="Netflix Wireframe Image 3"
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}
