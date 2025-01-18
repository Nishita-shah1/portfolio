'use client';  // This ensures the component is client-side
import { useState } from 'react'; // For handling the "show more" functionality
import { useRouter } from 'next/navigation'; // Use next/navigation for proper routing in client-side components
import Link from 'next/link'; // For routing to another page

export default function UI() {
  const router = useRouter();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null); // State to track which card is expanded

  const cards = [
    {
      image: '/ui1.png',
      heading: 'UX Case Study: Empowering Young Artisans',
      description:
        'This case study explores the challenges young artisans face in showcasing and monetizing their handmade and DIY creations, highlighting the need for a dedicated platform to enhance visibility and customer connection.',
      link: '/uicase1', // Route for detailed page
    },
    {
      image: '/ui2.png',
      heading: 'Aquanidhi landing page',
      description: 'Empowering marine researchers with comprehensive, geo-referenced fish catch data to drive species-specific fisheries forecasting.',
      link: '/uicase2',
    },
    {
      image: '/ui3.png',
      heading: 'Netflix mobile view app wireframe',
      description: 'I designed a Netflix wireframe to streamline the user interface and enhance the browsing experience. The layout focuses on intuitive navigation, optimized for seamless content discovery. Key features include personalized recommendations, trending categories, and an interactive watchlist.',
      link: '/uicase3',
    },
   
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Back Button */}
      <button
        onClick={() => router.back()} // Navigates to the previous page (Skills or Home page)
        className="bg-pink-600 text-white py-2 px-4 rounded-lg mb-8 hover:bg-pink-700 transition-all"
      >
        Back
      </button>

      <h1 className="text-3xl font-bold text-gray-700">UI/UX Skills</h1>
      <p className="mt-4 text-lg text-black">Welcome to the UI/UX skills page!</p>

      {/* Card Grid */}
      <div className="flex flex-wrap gap-6 mt-12 justify-start">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            style={{ width: '400px', height: '500px' }} // Fixed width and height
          >
            <img
              src={card.image}
              alt={card.heading}
              className="w-full h-72 object-cover" // Adjusted image size
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{card.heading}</h3>
              <p className="mt-2 text-gray-600 text-sm">
                {expandedIndex === index
                  ? card.description
                  : `${card.description.slice(0, 100)}...`} {/* Show only part of the description */}
              </p>
              <div className="mt-4">
                
                <Link href={card.link} passHref>
                  <button className="text-pink-600 text-sm hover:underline mt-2">
                    Read More...
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
