'use client';

import SimpleProjectCard from '@/components/SimpleProjectCard';

export default function Projects() {
  const projects = [
    {
      title: 'E-commerce Testing Suite',
      description: 'Comprehensive automated testing framework for an e-commerce platform, ensuring reliability and performance.',
      tags: ['Selenium', 'TestNG', 'Java', 'CI/CD'],
      imageUrl: '/images/project1.jpg',
      projectUrl: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website built with Next.js and Tailwind CSS.',
      tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
      imageUrl: '/images/project2.jpg',
      projectUrl: '#'
    },
    {
      title: 'Test Management Dashboard',
      description: 'Interactive dashboard for tracking test cases, results, and metrics for software quality assurance teams.',
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
      imageUrl: '/images/project3.jpg',
      projectUrl: '#'
    },
    {
      title: 'API Testing Framework',
      description: 'Robust framework for testing RESTful APIs with comprehensive reporting and integration capabilities.',
      tags: ['Postman', 'Newman', 'JavaScript', 'Jenkins'],
      imageUrl: '/images/project4.jpg',
      projectUrl: '#'
    },
    {
      title: 'Responsive Web Application',
      description: 'Fully responsive web application with modern UI/UX design principles and cross-browser compatibility.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      imageUrl: '/images/project5.jpg',
      projectUrl: '#'
    },
    {
      title: 'Performance Testing Tool',
      description: 'Custom tool for load and performance testing of web applications with detailed analytics and reporting.',
      tags: ['JMeter', 'Python', 'Grafana', 'Docker'],
      imageUrl: '/images/project6.jpg',
      projectUrl: '#'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            My Projects
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            A showcase of my work in software testing and web development
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <SimpleProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              projectUrl={project.projectUrl}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Want to see more of my work?
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-8">
            Check out my GitHub repository for more projects and code samples.
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Visit My GitHub
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
