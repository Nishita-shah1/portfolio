// components/Skills.tsx
import Link from 'next/link';

export default function Skills() {
  const skills = [
    { name: 'UI/UX', bg: 'from-pink-100/80 to-lavender-100/80', href: '/ui' },
    { name: 'WEB DEVELOPMENT', bg: 'from-lavender-100/80 to-pink-100/80', href: '/web-development' },
    { name: 'MACHINE LEARNING', bg: 'from-pink-100/80 to-lavender-100/80', href: '/machine-learning' },
    { name: 'OTHER SKILLS', bg: 'from-lavender-100/80 to-pink-100/80', href: '/other-skills' },
  ];

  return (
    <section id="skills" className="max-w-4xl mx-auto px-4 py-12 bg-gradient-to-r from-pink-50/50 to-lavender-100/30">
      <h2 className="text-2xl font-bold text-gray-700 mb-8">My Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill) => (
          <Link key={skill.name} href={skill.href}>
            <div
              className={`bg-gradient-to-r ${skill.bg} rounded-2xl p-8 text-center 
                font-bold text-pink-400 text-2xl shadow-sm border-2 border-white
                hover:shadow-[0_0_20px_rgba(236,72,153,0.15)] 
                transition-all duration-300 hover:scale-[1.02]`}
            >
              {skill.name}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
