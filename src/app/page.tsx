'use client';

import Hero from '@/components/Hero';
import SkillCard from '@/components/SkillCard';

export default function Home() {
  const skills = [
    {
      title: 'Software Testing',
      icon: '🧪',
      description: 'Manual and automated testing, test planning, and quality assurance processes.'
    },
    {
      title: 'Web Development',
      icon: '💻',
      description: 'Frontend and backend development using modern frameworks and technologies.'
    },
    {
      title: 'UI/UX Design',
      icon: '🎨',
      description: 'Creating intuitive and visually appealing user interfaces and experiences.'
    },
    {
      title: 'Responsive Design',
      icon: '📱',
      description: 'Building websites that work flawlessly across all devices and screen sizes.'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              My Skills
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
              Expertise in both software testing and web development
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                title={skill.title}
                icon={skill.icon}
                description={skill.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
