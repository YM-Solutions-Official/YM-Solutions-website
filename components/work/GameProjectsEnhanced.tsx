'use client';

import { GameProject } from '@/lib/data/project-data';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Grid, List, Smartphone, Monitor, Code, Play } from 'lucide-react';

interface GameProjectsEnhancedProps {
  projects: GameProject[];
}

const PlatformIcons = ({
  platforms,
}: {
  platforms: ('mobile' | 'desktop' | 'vr')[];
}) => (
  <div className="flex items-center gap-2">
    {platforms.includes('mobile') && (
      <span title="Mobile" className="bg-green-100 p-2 rounded-lg">
        <Smartphone className="w-4 h-4 text-green-600" />
      </span>
    )}
    {platforms.includes('desktop') && (
      <span title="Desktop" className="bg-blue-100 p-2 rounded-lg">
        <Monitor className="w-4 h-4 text-blue-600" />
      </span>
    )}
    {platforms.includes('vr') && (
      <span title="VR" className="bg-purple-100 p-2 rounded-lg">
        <Code className="w-4 h-4 text-purple-600" />
      </span>
    )}
  </div>
);

const StatusBadge = ({ status }: { status: string }) => {
  const statusColors: Record<string, string> = {
    Completed: 'bg-green-500',
    'In Development': 'bg-yellow-500',
    Prototype: 'bg-blue-500',
  };

  return (
    <span
      className={`${statusColors[status]} text-white text-xs font-bold px-3 py-1 rounded-full`}
    >
      {status}
    </span>
  );
};

const GameProjectsEnhanced = ({ projects }: GameProjectsEnhancedProps) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    'all',
    ...new Set(projects.map((project) => project.genre)),
  ];
  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.genre === filter);

  return (
    <>
      {/* Controls Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mb-12 p-4 bg-gray-800 rounded-2xl shadow-lg border border-gray-700">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 capitalize ${
                filter === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {category === 'all' ? 'All Games' : category}
            </button>
          ))}
        </div>

        {/* View Toggle and Counter */}
        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-400">
            Showing {filteredProjects.length} of {projects.length} games
          </div>

          <div className="flex items-center gap-1 bg-gray-700 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-all duration-300 ${
                viewMode === 'grid'
                  ? 'bg-gray-600 text-white shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-all duration-300 ${
                viewMode === 'list'
                  ? 'bg-gray-600 text-white shadow-sm'
                  : 'text-gray-400 hover:text-white'
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
              className="group bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-700"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Game Image */}
                <div className="lg:w-2/5 relative overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.altText}
                    width={600}
                    height={400}
                    className="w-full h-64 lg:h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Status & Engine */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <StatusBadge status={project.status} />
                    <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {project.engine}
                    </span>
                  </div>

                  {/* Play Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm border border-white/30 text-white p-4 rounded-full">
                      <Play className="w-6 h-6 fill-current" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-3/5 p-6 flex flex-col justify-between">
                  <div>
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-gray-300 leading-relaxed mb-4"
                      dangerouslySetInnerHTML={{ __html: project.description }}
                    />

                    {/* Game Details */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <span className="text-sm text-gray-400">Genre</span>
                        <p className="text-white font-semibold">
                          {project.genre}
                        </p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-400">Duration</span>
                        <p className="text-white font-semibold">
                          {project.duration}
                        </p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-400">Status</span>
                        <p className="text-white font-semibold">
                          {project.status}
                        </p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-400">Engine</span>
                        <p className="text-white font-semibold">
                          {project.engine}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <div>
                      <p className="text-xs text-gray-400 mb-2">PLATFORMS</p>
                      <PlatformIcons platforms={project.platforms} />
                    </div>

                    <div className="flex gap-2">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-600 text-white p-2 rounded-lg hover:bg-purple-600 transition-colors"
                          title="Play Demo"
                        >
                          <Play className="w-4 h-4" />
                        </a>
                      )}
                      <Link
                        href={`/work/game/${project.id}`}
                        className="bg-white text-gray-900 px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
                      >
                        Game Details
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
            </div>
          ))}
        </div>
      ) : (
        /* Grid View */
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 border border-gray-700"
            >
              {/* Game Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.altText}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                {/* Status & Engine */}
                <div className="absolute top-3 left-3 flex gap-2">
                  <StatusBadge status={project.status} />
                  <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {project.engine}
                  </span>
                </div>

                {/* Play Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm border border-white/30 text-white p-3 rounded-full">
                    <Play className="w-5 h-5 fill-current" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  className="text-gray-300 text-sm mb-4 line-clamp-2"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />

                {/* Game Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Genre</span>
                    <span className="text-white font-semibold">
                      {project.genre}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Duration</span>
                    <span className="text-white font-semibold">
                      {project.duration}
                    </span>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-700">
                  <div>
                    <PlatformIcons platforms={project.platforms} />
                  </div>

                  <div className="flex gap-2">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white p-2 rounded-lg hover:bg-purple-600 transition-colors"
                        title="Play Demo"
                      >
                        <Play className="w-3 h-3" />
                      </a>
                    )}
                    <Link
                      href={`/work/game/${project.id}`}
                      className="bg-white text-gray-900 px-3 py-2 rounded-lg text-xs font-semibold hover:bg-gray-100 transition-colors"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🎮</div>
          <h3 className="text-2xl font-bold text-white mb-2">No games found</h3>
          <p className="text-gray-400 mb-6">
            Try adjusting your filters to see more results.
          </p>
          <button
            onClick={() => setFilter('all')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors"
          >
            Show All Games
          </button>
        </div>
      )}
    </>
  );
};

export default GameProjectsEnhanced;
