"use client"; // Ensures client-side rendering
import { useRouter } from "next/navigation"; // Proper routing for client-side components
import React from "react";
import Link from "next/link";

const MachineLearning: React.FC = () => {
  const router = useRouter();

  // Card data for Machine Learning projects
  const cards = [
    {
      video: "/spam.mp4", // Replace with your video path
      heading: "Machine Learning Model for Spam Detection",
      techStack: ["Python", "TensorFlow", "Scikit-Learn", "Pandas", "Matplotlib"],
      github: "https://github.com/Nishita-shah1/ML",
      liveLink: "https://github.com/Nishita-shah1/ML",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-800 to-pink-700 text-white">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="bg-pink-800 text-white py-2 px-4 rounded-lg mt-4 ml-16 hover:bg-pink-900 transition-all"
      >
        Back
      </button>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-pink-300 mb-6 text-center">
          Machine Learning: Unleashing the Power of Data
        </h1>
        <p className="text-lg text-gray-300 mb-8 text-center">
          Transforming data into intelligent insights. From prediction to optimization, step into the world of AI and experience the future.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden group"
            >
              <video
                src={card.video}
                className="w-full object-cover group-hover:opacity-80 transition-all"
                style={{ height: '400px' }}
                autoPlay
                muted
                loop
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
          <h2 className="text-2xl font-semibold text-pink-300">
            Exploring the Future of AI and ML
          </h2>
          <p className="text-lg text-gray-200 mt-4">
            Dive deeper into the world of Machine Learning with advanced models, neural networks, and more. Stay tuned for more exciting projects!
          </p>
        </div>
      </div>
    </div>
  );
};

export default MachineLearning;
