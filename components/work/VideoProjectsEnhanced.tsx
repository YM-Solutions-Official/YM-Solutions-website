'use client';

import { VideoProject } from '@/lib/data/project-data';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Grid, List, Play, Clock, User } from 'lucide-react';

interface VideoProjectsEnhancedProps {
  projects: VideoProject[];
}

const VideoProjectsEnhanced = ({ projects }: VideoProjectsEnhancedProps) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    'all',
    ...new Set(projects.map((project) => project.type)),
  ];
  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.type === filter);

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
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category === 'all' ? 'All Videos' : category}
            </button>
          ))}
        </div>

        {/* View Toggle and Counter */}
        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-600">
            Showing {filteredProjects.length} of {projects.length} videos
          </div>

          <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-all duration-300 ${
                viewMode === 'grid'
                  ? 'bg-white text-red-600 shadow-sm'
                  : 'text-gray-600 hover:text-red-600'
              }`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-all duration-300 ${
                viewMode === 'list'
                  ? 'bg-white text-red-600 shadow-sm'
                  : 'text-gray-600 hover:text-red-600'
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
                {/* Video Thumbnail */}
                <div className="lg:w-2/5 relative overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.altText}
                    width={600}
                    height={400}
                    className="w-full h-64 lg:h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm border border-white/30 text-white p-5 rounded-full">
                      <Play className="w-8 h-8 fill-current" />
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <span className="bg-red-600 text-white text-sm font-bold px-3 py-1.5 rounded-full">
                        {project.type}
                      </span>
                      <span className="bg-black/80 text-white text-sm font-medium px-2 py-1 rounded flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {project.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-3/5 p-6 flex flex-col justify-between">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-red-600" />
                        <span className="text-red-600 font-semibold">
                          {project.client}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">
                        {project.year}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-gray-600 leading-relaxed mb-4 line-clamp-3"
                      dangerouslySetInnerHTML={{ __html: project.description }}
                    />

                    {/* Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <span className="text-sm text-gray-500 block mb-2">
                          Roles
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {project.role.map((role) => (
                            <span
                              key={role}
                              className="bg-orange-100 text-orange-800 text-xs font-medium px-3 py-1 rounded-full"
                            >
                              {role}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500 block mb-2">
                          Software
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {project.software.slice(0, 3).map((software) => (
                            <span
                              key={software}
                              className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full"
                            >
                              {software}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <button className="flex items-center gap-3 bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-orange-600 transition-all duration-300 hover:scale-105">
                      <Play className="w-4 h-4 fill-current" />
                      <span className="font-semibold">Watch Video</span>
                    </button>

                    <Link
                      href={`/work/video/${project.id}`}
                      className="flex items-center gap-2 text-gray-700 font-semibold hover:text-red-600 transition-colors"
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
              {/* Video Thumbnail */}
              <div className="relative overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.altText}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm border border-white/30 text-white p-4 rounded-full">
                    <Play className="w-6 h-6 fill-current" />
                  </div>
                </div>

                {/* Video Info */}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="flex items-center justify-between">
                    <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {project.type}
                    </span>
                    <span className="bg-black/80 text-white text-xs font-medium px-2 py-1 rounded flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {project.duration}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Client & Year */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-red-600" />
                    <span className="text-red-600 font-semibold text-sm">
                      {project.client}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">{project.year}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors line-clamp-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  className="text-gray-600 text-sm mb-4 line-clamp-2"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />

                {/* Roles */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.role.slice(0, 2).map((role) => (
                      <span
                        key={role}
                        className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded"
                      >
                        {role}
                      </span>
                    ))}
                    {project.role.length > 2 && (
                      <span className="text-gray-500 text-xs">
                        +{project.role.length - 2}
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between">
                  <button className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors text-sm">
                    <Play className="w-3 h-3 fill-current" />
                    Watch
                  </button>

                  <Link
                    href={`/work/video/${project.id}`}
                    className="text-gray-700 text-sm font-semibold hover:text-red-600 transition-colors"
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
          <div className="text-6xl mb-4">🎬</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            No videos found
          </h3>
          <p className="text-gray-600 mb-6">
            Try adjusting your filters to see more results.
          </p>
          <button
            onClick={() => setFilter('all')}
            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Show All Videos
          </button>
        </div>
      )}
    </>
  );
};

export default VideoProjectsEnhanced;
