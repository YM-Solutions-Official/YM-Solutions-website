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
        return <WebProjects projects={webProjects} />;
      case 'design':
        return <DesignProjects projects={designProjects} />;
      case 'game':
        return <GameProjects projects={gameProjects} />;
      case 'video':
        return <VideoProjects projects={videoProjects} />;
      default:
        return null;
    }
  };

  const TabButton = ({ tabName, label }: { tabName: Tab; label: string }) => (
    <button
      className={`project-tab border-2 border-transparent px-4 py-2 rounded-lg font-semibold transition-colors duration-300 ${
        activeTab === tabName
          ? 'active bg-corporate-navy text-white'
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      }`}
      onClick={() => setActiveTab(tabName)}
    >
      {label}
    </button>
  );

  return (
    <section id="projects" className="py-16 md:py-24 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 scroll-animate">
          <p className="text-corporate-accent font-semibold uppercase tracking-widest mb-2">
            Results In Action
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-corporate-navy">
            Selected Case Studies
          </h2>
        </div>

        {/* Tab Buttons */}
        <div
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10 scroll-animate"
          style={{ transitionDelay: '100ms' }}
        >
          <TabButton tabName="web" label="Web Development" />
          <TabButton tabName="design" label="Graphic Design" />
          <TabButton tabName="game" label="Game Development" />
          <TabButton tabName="video" label="Video Editing" />
        </div>

        {/* Dynamic Content Area */}
        <div className="scroll-animate" style={{ transitionDelay: '200ms' }}>
          {renderTabContent()}
        </div>

        <div
          className="text-center mt-16 scroll-animate"
          style={{ transitionDelay: '300ms' }}
        >
          <Link
            href="#contact"
            className="inline-block border-2 border-corporate-navy text-corporate-navy font-bold px-8 py-3 rounded-lg hover:bg-corporate-navy hover:text-white transition duration-300"
          >
            View More Success Stories
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
