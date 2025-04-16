'use client';

import Image from 'next/image';

export default function About() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="relative lg:order-2">
            <div className="relative h-64 sm:h-72 md:h-96 lg:h-full overflow-hidden rounded-lg shadow-xl">
              <div className="h-full w-full bg-indigo-600 flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <div className="text-8xl mb-4">👨‍💻</div>
                  <p className="text-xl font-semibold">Software Professional</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:order-1">
            <div className="space-y-6">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                About Me
              </h2>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                Hello! I'm a passionate Software Tester and Web Developer with a keen eye for detail and a commitment to quality. With expertise in both testing methodologies and modern web development, I bring a unique perspective to every project.
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                My journey in software began with a fascination for how things work and how to make them better. This curiosity led me to specialize in software testing, where I've developed strong skills in identifying issues, creating comprehensive test plans, and ensuring software reliability.
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                As a web developer, I focus on creating responsive, user-friendly applications using modern technologies like React, Next.js, and Tailwind CSS. I believe in writing clean, maintainable code that delivers exceptional user experiences.
              </p>
              <div className="mt-10">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Professional Journey
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                        Senior QA Engineer
                      </h4>
                      <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                        Led testing efforts for enterprise applications, implemented automated testing frameworks, and improved quality processes.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                        Full Stack Developer
                      </h4>
                      <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                        Developed responsive web applications using modern JavaScript frameworks, focusing on performance and user experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
