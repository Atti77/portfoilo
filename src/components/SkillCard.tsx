'use client';

interface SkillCardProps {
  title: string;
  icon: string;
  description: string;
}

export default function SkillCard({ title, icon, description }: SkillCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-center justify-center w-12 h-12 mx-auto bg-indigo-100 dark:bg-indigo-900 rounded-full mb-4">
          <span className="text-2xl" role="img" aria-label={title}>
            {icon}
          </span>
        </div>
        <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-center">{description}</p>
      </div>
    </div>
  );
}
