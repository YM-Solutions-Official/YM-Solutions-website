'use client';

import { WebProject } from '@/lib/data/project-data';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Grid, List, ExternalLink, Clock } from 'lucide-react';

interface WebProjectsEnhancedProps {
  projects: WebProject[];
}

const WebProjectsEnhanced = ({ projects }: WebProjectsEnhancedProps) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    'all',
    ...new Set(projects.map((project) => project.category)),
  ];
  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <>
      {/* Controls Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mb-12 p-4 bg-white rounded-2xl shadow-lg border border-gray-200">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 capitalize ${
                filter === category
                  ? 'bg-corporate-navy text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category === 'all' ? 'All Projects' : category}
            </button>
          ))}
        </div>

        {/* View Toggle and Counter */}
        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-600">
            Showing {filteredProjects.length} of {projects.length} projects
          </div>

          <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-all duration-300 ${
                viewMode === 'grid'
                  ? 'bg-white text-corporate-navy shadow-sm'
                  : 'text-gray-600 hover:text-corporate-navy'
              }`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-all duration-300 ${
                viewMode === 'list'
                  ? 'bg-white text-corporate-navy shadow-sm'
                  : 'text-gray-600 hover:text-corporate-navy'
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Projects Display */}
      {viewMode === 'list' ? (
        /* List View */
        <div className="space-y-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-200"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Project Image */}
                <div className="lg:w-2/5 relative overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.altText}
                    width={600}
                    height={400}
                    className="w-full h-64 lg:h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Live Demo Badge */}
                  {project.demoUrl && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-green-500 text-white text-sm font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        Live Demo
                      </div>
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-corporate-accent text-white text-sm font-bold px-3 py-1.5 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-3/5 p-6 flex flex-col justify-between">
                  <div>
                    {/* Duration */}
                    <div className="flex items-center gap-2 text-gray-500 mb-3">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{project.duration}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-corporate-navy mb-3 group-hover:text-corporate-accent transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-gray-600 leading-relaxed mb-4"
                      dangerouslySetInnerHTML={{ __html: project.description }}
                    />

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span
                          key={tag}
                          className={`text-xs font-semibold px-3 py-1.5 rounded-full ${
                            index % 3 === 0
                              ? 'bg-blue-100 text-blue-800'
                              : index % 3 === 1
                                ? 'bg-purple-100 text-purple-800'
                                : 'bg-green-100 text-green-800'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex gap-4">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-corporate-accent font-semibold hover:text-corporate-navy transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                    </div>
                    <Link
                      href={`/work/web/${project.id}`}
                      className="bg-corporate-navy text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-corporate-accent transition-colors flex items-center gap-2"
                    >
                      Case Study
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Grid View */
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 border border-gray-200"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.altText}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                {/* Live Demo Badge */}
                {project.demoUrl && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                      <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                      Live Demo
                    </div>
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="bg-corporate-accent text-white text-sm font-bold px-3 py-1.5 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Duration */}
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                  <Clock className="w-3 h-3" />
                  {project.duration}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-corporate-navy mb-2 group-hover:text-corporate-accent transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  className="text-gray-600 text-sm mb-4 line-clamp-2"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-gray-500 text-xs">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-corporate-accent text-sm font-semibold hover:text-corporate-navy transition-colors"
                    >
                      View Demo
                    </a>
                  )}
                  <Link
                    href={`/work/web/${project.id}`}
                    className="text-corporate-navy text-sm font-semibold hover:text-corporate-accent transition-colors"
                  >
                    Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🌐</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            No projects found
          </h3>
          <p className="text-gray-600 mb-6">
            Try adjusting your filters to see more results.
          </p>
          <button
            onClick={() => setFilter('all')}
            className="bg-corporate-navy text-white px-6 py-3 rounded-lg hover:bg-corporate-accent transition-colors"
          >
            Show All Projects
          </button>
        </div>
      )}
    </>
  );
};

export default WebProjectsEnhanced;
