'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  projectUrl?: string;
}

export default function ProjectCard({ title, description, tags, imageUrl, projectUrl }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 w-full">
        {imageError ? (
          <div className="h-full w-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">{title.charAt(0)}</div>
              <p className="text-sm font-medium text-indigo-800 dark:text-indigo-200">{title}</p>
            </div>
          </div>
        ) : (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImageError(true)}
          />
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        {projectUrl && (
          <Link
            href={projectUrl}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            View Project
          </Link>
        )}
      </div>
    </div>
  );
}
