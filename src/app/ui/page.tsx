// pages/ui/page.tsx
'use client';  // This ensures the component is client-side

import { useRouter } from 'next/navigation';  // Use next/navigation for proper routing in client-side components

export default function UI() {
  const router = useRouter();

  const cards = [
    { image: '/images/card1.jpg', heading: 'UI Design Basics', description: 'Learn the foundations of UI design to create stunning user interfaces.' },
    { image: '/images/card2.jpg', heading: 'User Research', description: 'Understand your users through research to create tailored experiences.' },
    { image: '/images/card3.jpg', heading: 'Prototyping', description: 'Create prototypes to visualize your ideas and improve your design process.' },
    { image: '/images/card4.jpg', heading: 'Interaction Design', description: 'Design intuitive interactions that engage and delight users.' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Back Button */}
      <button
        onClick={() => router.back()}  // Navigates to the previous page (Skills or Home page)
        className="bg-pink-600 text-white py-2 px-4 rounded-lg mb-8 hover:bg-pink-700 transition-all"
      >
        Back
      </button>

      <h1 className="text-3xl font-bold text-gray-700">UI/UX Skills</h1>
      <p className="mt-4 text-lg">Welcome to the UI/UX skills page!</p>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
        {cards.map((card, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={card.image} alt={card.heading} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{card.heading}</h3>
              <p className="mt-2 text-gray-600 text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
