import React from 'react';

interface ExperienceProps {
  period: string;
  company: string;
  description: string;
  active: boolean;
}

const Experience: React.FC = () => {
  const experiences: ExperienceProps[] = [
    {
      period: 'August 2024-December 2024',
      company: 'Greensizz Private Limited',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      active: false,
    },
    {
      period: 'August 2024-December 2024',
      company: 'Greensizz Private Limited',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      active: false,
    },
    {
      period: 'August 2024-December 2024',
      company: 'Greensizz Private Limited',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      active: false,
    },
  ];

  return (
    <section id="experience" className="w-full px-4 py-12 bg-[#FEB3C7]">
      {/* Adjusting the Experience heading to align properly */}
      <h2 className="text-4xl font-bold text-black mb-8 text-left mx-auto max-w-4xl">
        Experience
      </h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-pink-200 via-lavender-200 to-pink-200" />

        {/* Experience cards */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 group">
              {/* Timeline dot */}
              <div
                className={`absolute left-[-4px] top-6 w-2 h-2 rounded-full transition-all duration-300 ease-in-out ${
                  exp.active
                    ? 'bg-pink-400 shadow-[0_0_10px_rgba(236,72,153,0.5)]'
                    : 'bg-transparent group-hover:bg-red-600 group-hover:shadow-[0_0_10px_rgba(255,0,0,0.5)]' // Hover red dot only visible when hovered
                }`}
              />
              <div
                className={`absolute left-[-3px] top-8 bottom-0 w-px bg-gradient-to-b from-lavender-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out`}
              />
              <div
                className={`bg-white rounded-xl p-6 shadow-sm transition-all duration-300 ${
                  exp.active
                    ? 'shadow-[0_0_20px_rgba(236,72,153,0.15)] scale-[1.02]'
                    : 'hover:shadow-[0_0_15px_rgba(167,139,250,0.2)] hover:scale-[1.01] group-hover:shadow-[0_0_30px_rgba(255,0,0,0.3)]' // Hover glow effect on card
                }`}
              >
                <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-sm mb-4 text-black">
                  {exp.period}
                </div>
                <h3 className="font-semibold mb-2 text-black">{exp.company}</h3>
                <p className="text-gray-600 text-sm">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
