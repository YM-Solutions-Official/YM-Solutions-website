'use client';

import { useState } from 'react';
import Link from 'next/link';
import WebProjects from './WebProjects';
import DesignProjects from './DesignProjects';
import GameProjects from './GameProjects';
import VideoProjects from './VideoProjects';
import {
  designProjects,
  gameProjects,
  videoProjects,
  webProjects,
} from '@/lib/data/project-data';

type Tab = 'web' | 'design' | 'game' | 'video';

const Projects = () => {
  const [activeTab, setActiveTab] = useState<Tab>('web');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'web':
        return <WebProjects projects={webProjects.slice(0, 3)} />;
      case 'design':
        return <DesignProjects projects={designProjects.slice(0, 8)} />;
      case 'game':
        return <GameProjects projects={gameProjects.slice(0, 3)} />;
      case 'video':
        return <VideoProjects projects={videoProjects.slice(0, 3)} />;
      default:
        return null;
    }
  };

  const TabButton = ({ tabName, label }: { tabName: Tab; label: string }) => (
    <button
      className={`project-tab cursor-pointer border-2 border-transparent px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
        activeTab === tabName
          ? 'active bg-corporate-navy text-white shadow-lg scale-105'
          : 'bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-200 shadow-md'
      }`}
      onClick={() => setActiveTab(tabName)}
    >
      {label}
    </button>
  );

  return (
    <section
      id="projects"
      className="py-20 bg-linear-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-corporate-accent font-semibold uppercase tracking-widest mb-4">
            <div className="w-2 h-2 bg-corporate-accent rounded-full"></div>
            Portfolio Showcase
            <div className="w-2 h-2 bg-corporate-accent rounded-full"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-corporate-navy mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore my work across different creative domains and technical
            disciplines
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <TabButton tabName="web" label="Web Development" />
          <TabButton tabName="design" label="Graphic Design" />
          <TabButton tabName="game" label="Game Development" />
          <TabButton tabName="video" label="Video Production" />
        </div>

        {/* Dynamic Content */}
        <div className="mb-12">{renderTabContent()}</div>

        {/* View More Button */}
        <div className="text-center">
          <Link
            href={`/work/${activeTab}`}
            className="inline-flex items-center gap-2 bg-corporate-navy text-white font-bold px-8 py-4 rounded-xl hover:bg-corporate-accent transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All{' '}
            {activeTab === 'web'
              ? 'Web'
              : activeTab === 'design'
                ? 'Design'
                : activeTab === 'game'
                  ? 'Game'
                  : 'Video'}{' '}
            Projects
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
