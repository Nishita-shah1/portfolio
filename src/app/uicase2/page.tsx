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

      <h1 className="text-3xl font-bold text-gray-700 mb-6">Aquanidhi Landing Page</h1>
      <p className="text-lg text-gray-600 mb-6">
        Empowering marine researchers with comprehensive, geo-referenced fish catch data to drive species-specific fisheries forecasting.
      </p>

      {/* Video Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Watch Our Introduction Video</h2>
        <div className="flex justify-center">
          <video
            controls
            width="100%"
            className="border-2 border-light-blue-300 rounded-md"
          >
            <source src="/uiVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="flex justify-center">
        {/* PDF Viewer with disabled download option and light blue border */}
        <iframe
          src="/HomePage.pdf#toolbar=0"  // Correct path to the file in the public folder
          width="100%"
          height="600px"
          className="border-2 border-light-blue-300 rounded-md" // Light blue border
        />
      </div>
    </div>
  );
}
