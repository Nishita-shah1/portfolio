import React from 'react';

const Skillset: React.FC = () => {
  const skills = {
    technical: [
      'Python',
      'Java',
      'C++',
      'HTML',
      'CSS',
      'JavaScript',
      'React.js',
      'Express.js',
      'Node.js',
      'Next.js',
      'MongoDB',
      'Scikit-learn',
      'Dart',
      'Matplotlib',
      'Leaflet.js',
    ],
    tools: ['GitHub', 'Figma', 'Adobe Illustrator'],
    softSkills: [
      'Leadership',
      'Communication',
      'Video Editing',
      'Graphic Design',
      'User Experience',
    ],
    csFundamentals: [
      'DBMS',
      'OOPS',
      'SQL',
      'Data Structures',
      'Algorithms',
      'Data Science',
      'Software Engineering',
    ],
  };

  return (
    <section id="skillset" className="w-full px-4 py-12 bg-[#FEB3C7]">
      {/* Skills Heading */}
      <h2 className="text-4xl font-semibold text-black mb-8 text-left mx-auto max-w-4xl">
        Skillset
      </h2>

      <div className="max-w-4xl mx-auto space-y-12">
        {/* Technical Skills */}
        <div>
          <h3 className="text-xl font-semibold text-black mb-4">Technical Skills</h3>
          <div className="flex flex-wrap gap-6">
            {skills.technical.map((skill, index) => (
              <div
                key={index}
                className="bg-[#CBC9FF] p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <p className="text-center font-medium text-black">{skill}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <h3 className="text-xl font-semibold text-black mb-4">Tools</h3>
          <div className="flex flex-wrap gap-6">
            {skills.tools.map((tool, index) => (
              <div
                key={index}
                className="bg-[#E5E3F9] p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <p className="text-center font-medium text-black">{tool}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-xl font-semibold text-black mb-4">Soft Skills</h3>
          <div className="flex flex-wrap gap-6">
            {skills.softSkills.map((softSkill, index) => (
              <div
                key={index}
                className="bg-[#CBC9FF] p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <p className="text-center font-medium text-black">{softSkill}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CS Fundamentals */}
        <div>
          <h3 className="text-xl font-semibold text-black mb-4">CS Fundamentals</h3>
          <div className="flex flex-wrap gap-6">
            {skills.csFundamentals.map((fundamental, index) => (
              <div
                key={index}
                className="bg-[#E5E3F9] p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <p className="text-center font-medium text-black">{fundamental}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skillset;
