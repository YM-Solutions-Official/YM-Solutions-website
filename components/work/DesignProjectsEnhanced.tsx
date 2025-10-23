'use client';

import { DesignProject } from '@/lib/data/project-data';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Grid, List, Calendar, X } from 'lucide-react';

interface DesignProjectsEnhancedProps {
  projects: DesignProject[];
}

const DesignProjectsEnhanced = ({ projects }: DesignProjectsEnhancedProps) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filter, setFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<DesignProject | null>(
    null
  );

  const categories = [
    'all',
    ...new Set(projects.map((project) => project.category)),
  ];
  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.category === filter);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

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
                  ? 'bg-purple-600 text-white shadow-lg'
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
                  ? 'bg-white text-purple-600 shadow-sm'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-all duration-300 ${
                viewMode === 'list'
                  ? 'bg-white text-purple-600 shadow-sm'
                  : 'text-gray-600 hover:text-purple-600'
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
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-200 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="flex flex-col lg:flex-row">
                {/* Design Image */}
                <div className="lg:w-2/5 relative overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.altText}
                    width={600}
                    height={400}
                    className="w-full h-64 lg:h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className="lg:w-3/5 p-6 flex flex-col justify-between">
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-3">
                      <span className="bg-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                      <div className="flex items-center gap-1 text-gray-500 text-sm">
                        <Calendar className="w-4 h-4" />
                        {project.year}
                      </div>
                    </div>

                    {/* Title & Client */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-pink-600 font-semibold mb-4">
                      {project.client}
                    </p>

                    {/* Objective */}
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {project.objective}
                    </p>

                    {/* Software */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.software.map((software) => (
                        <span
                          key={software}
                          className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-full border border-gray-200"
                        >
                          {software}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="text-sm text-gray-500">
                      Designed in {project.year}
                    </div>
                    <Link
                      href={`/work/design/${project.id}`}
                      className="bg-purple-600 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-pink-600 transition-colors flex items-center gap-2"
                    >
                      View Details
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
        /* Grid View - Fixed CSS Grid Layout */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 border border-gray-200 flex flex-col cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Design Image */}
              <div className="relative overflow-hidden flex-1">
                <Image
                  src={project.imageUrl}
                  alt={project.altText}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-2 inline-block">
                      {project.category}
                    </span>
                    <h3 className="text-white text-xl font-bold mb-1">
                      {project.title}
                    </h3>
                    <p className="text-pink-400 font-semibold text-sm">
                      {project.client}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content - Always visible in grid view */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <span className="text-gray-500 text-sm">{project.year}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-pink-600 font-semibold text-sm mb-3">
                  {project.client}
                </p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">
                  {project.objective}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.software.slice(0, 3).map((software) => (
                    <span
                      key={software}
                      className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded border border-gray-200"
                    >
                      {software}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/work/design/${project.id}`}
                  className="text-purple-600 text-sm font-semibold hover:text-pink-600 transition-colors text-center border border-purple-600 rounded-lg py-2 hover:bg-purple-600 hover:text-white mt-auto"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Full Screen Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          />

          {/* Modal Content */}
          <div className="relative max-w-6xl max-h-[90vh] w-full">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <Image
              src={selectedProject.imageUrl}
              alt={selectedProject.altText}
              width={1200}
              height={800}
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🎨</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            No designs found
          </h3>
          <p className="text-gray-600 mb-6">
            Try adjusting your filters to see more results.
          </p>
          <button
            onClick={() => setFilter('all')}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition-colors"
          >
            Show All Designs
          </button>
        </div>
      )}
    </>
  );
};

export default DesignProjectsEnhanced;
