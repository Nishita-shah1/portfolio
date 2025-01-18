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

      <h1 className="text-3xl font-bold text-gray-700 mb-6">UX Case Study: Empowering Young Artisans</h1>
      <p className="text-lg text-gray-600 mb-6">
        This case study explores the challenges young artisans face in showcasing and monetizing their handmade and DIY creations. It highlights the need for a dedicated platform to enhance visibility and customer connection.
      </p>

      <div className="flex justify-center">
  
  
  {/* Image Section */}
  <div className="flex justify-center">
        <img
          src="/casestudy.png" // Replace with the correct path to your image
          alt="Young Artisan at Work"
          className="rounded-md shadow-md max-w-full h-auto"
        />
      </div>
</div>

    </div>
  );
}
