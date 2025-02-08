import React from 'react';

interface ExperienceProps {
  period: string;
  company: string;
  role: string;
  description: string;
  active: boolean;
}

const Experience: React.FC = () => {
  const experiences: ExperienceProps[] = [
    {
      period: 'August 2024-December 2024',
      company: 'Greensizz Private Limited',
      role: 'Research Associate in Web Development ',
      description:
        'Led the development of an e-commerce platform with MERN stack, boosting active users by 1,000+ and improving load time by 30%, while incorporating WhatsApp API to drive a 50% increase in user engagement.',
      active: false,
    },
    {
      period: 'June 2024-August 2024',
      company: 'Sponsogram',
      role: 'Machine Learning Engineer',
      description:
        'Engineered 2 machine learning models for user analysis, processing 1,000+ interactions, and contributed to the design, achieving a 15% increase in user engagement and a 10% improvement in customer satisfaction.',
      active: false,
    },
    {
      period: 'March 2024-May 2024',
      company: 'LogistriX',
      role: 'UI/UX Designer',
      description:
        'Developed responsive UI/UX across 3+ devices, raising traffic by 20% and enhanced web performance, cutting page load time by 30%, improving retention.',
      active: false,
    },
  ];

  return (
    <section id="experience" className="w-full px-4 py-12 bg-[#FEB3C7]">
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
                    : 'bg-transparent group-hover:bg-red-600 group-hover:shadow-[0_0_10px_rgba(255,0,0,0.5)]'
                }`}
              />
              <div
                className={`absolute left-[-3px] top-8 bottom-0 w-px bg-gradient-to-b from-lavender-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out`}
              />
              <div
                className={`bg-white rounded-xl p-6 shadow-sm transition-all duration-300 ${
                  exp.active
                    ? 'shadow-[0_0_20px_rgba(236,72,153,0.15)] scale-[1.02]'
                    : 'hover:shadow-[0_0_15px_rgba(167,139,250,0.2)] hover:scale-[1.01] group-hover:shadow-[0_0_30px_rgba(255,0,0,0.3)]'
                }`}
              >
                <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-sm mb-4 text-black">
                  {exp.period}
                </div>
                <h3 className="font-semibold mb-2 text-black">{exp.company}</h3>
                <h4 className="text-sm font-medium text-gray-700 mb-2">{exp.role}</h4>
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
