'use client';

export default function Skills() {
  const testingSkills = [
    { name: 'Manual Testing', level: 90 },
    { name: 'Automated Testing', level: 85 },
    { name: 'Test Planning', level: 90 },
    { name: 'Regression Testing', level: 85 },
    { name: 'Performance Testing', level: 75 },
    { name: 'API Testing', level: 80 },
  ];

  const developmentSkills = [
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Next.js', level: 80 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'Node.js', level: 75 },
  ];

  const toolsAndTechnologies = [
    { name: 'Git', level: 90 },
    { name: 'JIRA', level: 85 },
    { name: 'Selenium', level: 80 },
    { name: 'Cypress', level: 75 },
    { name: 'Postman', level: 85 },
    { name: 'Docker', level: 70 },
  ];

  const SkillBar = ({ name, level }: { name: string; level: number }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-1">
        <span className="text-base font-medium text-gray-900 dark:text-white">{name}</span>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div 
          className="bg-indigo-600 h-2.5 rounded-full dark:bg-indigo-500" 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            My Skills & Expertise
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            A comprehensive overview of my technical abilities and expertise
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Testing Skills */}
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900 rounded-md p-3">
                <span className="text-2xl" role="img" aria-label="Testing">🧪</span>
              </div>
              <h2 className="ml-4 text-xl font-bold text-gray-900 dark:text-white">
                Testing Skills
              </h2>
            </div>
            <div>
              {testingSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>

          {/* Development Skills */}
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900 rounded-md p-3">
                <span className="text-2xl" role="img" aria-label="Development">💻</span>
              </div>
              <h2 className="ml-4 text-xl font-bold text-gray-900 dark:text-white">
                Development Skills
              </h2>
            </div>
            <div>
              {developmentSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900 rounded-md p-3">
                <span className="text-2xl" role="img" aria-label="Tools">🔧</span>
              </div>
              <h2 className="ml-4 text-xl font-bold text-gray-900 dark:text-white">
                Tools & Technologies
              </h2>
            </div>
            <div>
              {toolsAndTechnologies.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Professional Certifications
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2" role="img" aria-label="Certificate">🏆</div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">ISTQB Certified Tester</h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Foundation Level</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2" role="img" aria-label="Certificate">🏆</div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Certified Scrum Master</h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Scrum Alliance</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2" role="img" aria-label="Certificate">🏆</div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Frontend Web Developer</h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Professional Certification</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
