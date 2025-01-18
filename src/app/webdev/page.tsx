"use client"; // Ensures client-side rendering
import { useRouter } from "next/navigation"; // Proper routing for client-side components
import React from "react";
import Link from "next/link";

const WebDevelopment: React.FC = () => {
  const router = useRouter();

  // Card data
  const cards = [
    {
      image: "/ui2.png", // Replace with your image path
      heading: "Simplifying fisheries research !",
      techStack: ["HTML", "Tailwind", "TypeScript","MongoDb","Reactjs","Nextjs"],
      github: "https://github.com/Nishita-shah1/final_sih",
      liveLink: "https://final-sih-yt79.vercel.app/",
    },
    {
      image: "/portfolio.png", // Replace with your image path
      heading: "Portfolio",
      techStack: ["React", "Tailwind CSS", "Next.js"],
      github: "https://github.com/Nishita-shah1/portfolio",
      liveLink: "https://feminine-uiux-demo.com",
    },
    
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-200">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="bg-pink-800 text-white py-2 px-4 rounded-lg mt-4 ml-16 hover:bg-rose-800 transition-all"
      >
        Back
      </button>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-pink-500 mb-6 text-center">
          Web Development: Crafting Digital Dreams
        </h1>
        <p className="text-lg text-gray-300 mb-8 text-center">
          I bring visions to life with seamless designs, scalable solutions, and innovative technologies. Step into a world where elegance meets functionality.
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
                className="w-full object-cover group-hover:opacity-80 transition-all" style={{height: '400px'}}

              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-pink-400">
                  {card.heading}
                </h3>
                <p className="text-sm text-gray-300 mt-2">
                  Tech Stack: {card.techStack.join(", ")}
                </p>
                <div className="mt-4">
                  <Link
                    href={card.github}
                    target="_blank"
                    className="text-pink-500 hover:underline block"
                  >
                    GitHub Repository
                  </Link>
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
          
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;
