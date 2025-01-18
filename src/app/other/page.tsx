"use client"; // Ensures client-side rendering
import { useRouter } from "next/navigation"; // Proper routing for client-side components
import React from "react";
import Link from "next/link";

const SoftSkills: React.FC = () => {
  const router = useRouter();

  // Card data for soft skills projects
  const cards = [
    {
      image: "/poetry.png", // Replace with your image path
      heading: "Poetry: The Art of Expression",
      techStack: ["Words", "Emotion", "Storytelling", "Metaphor", "Creativity"],
      liveLink: "https://www.instagram.com/nis_tales?igsh=MWFmNmhnZGc4Z2xxag==",
    },
    {
      image: "/editing.png", // Replace with your image path
      heading: "Video Editing: Crafting Visual Stories",
      techStack: ["Adobe Premiere", "Final Cut Pro", "Cinematography", "Storytelling"],
      liveLink: "https://www.instagram.com/reel/DEe_-MczcT1/?igsh=ODl6M3QzcGRwaTRp",
    },
    
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-800 to-pink-700 text-white">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="bg-pink-800 text-white py-2 px-4 rounded-lg mt-4 ml-16 hover:bg-pink-900 transition-all"
      >
        Back
      </button>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-pink-300 mb-6 text-center">
          Soft Skills: Crafting Stories, Emotions, and Visuals
        </h1>
        <p className="text-lg text-gray-300 mb-8 text-center">
          From poetry to video editing, explore the delicate art of expression, creativity, and storytelling that fuels both the mind and heart.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden group"
            >
              <img
                src={card.image}
                alt={card.heading}
                className="w-full object-cover group-hover:opacity-80 transition-all"
                style={{ height: '400px' }}
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-pink-400">
                  {card.heading}
                </h3>
                <p className="text-sm text-gray-300 mt-2">
                  Skills: {card.techStack.join(", ")}
                </p>
                <div className="mt-4">
                  <Link
                    href={card.liveLink}
                    target="_blank"
                    className="text-pink-500 hover:underline block"
                  >
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-pink-300">
            The Creative Journey: Expression Through Different Mediums
          </h2>
          <p className="text-lg text-gray-200 mt-4">
            Each skill, whether it's writing poetry, editing videos, or crafting scripts, is a unique journey of self-expression, creativity, and impact. Explore, learn, and be inspired.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SoftSkills;
