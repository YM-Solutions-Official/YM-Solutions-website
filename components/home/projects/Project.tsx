'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type Tab = 'web' | 'design' | 'game' | 'video';

const Projects = () => {
  const [activeTab, setActiveTab] = useState<Tab>('web');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'web':
        return (
          <div
            id="web-content"
            className="project-tab-content active grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Project 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-2xl hover:scale-[1.01]">
              <Image
                src="https://placehold.co/800x500/1A346F/ffffff?text=Hotel+Booking+Portal"
                alt="Web development project for luxury hotel booking portal interface"
                className="w-full h-48 object-cover"
                width={800}
                height={500}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-corporate-navy mb-2">
                  Luxury Hotel Booking Portal
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Developed a visually stunning website with an integrated
                  real-time booking engine, increasing direct bookings by{' '}
                  <strong>40%</strong>.
                </p>
                <span className="inline-block bg-corporate-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Hospitality
                </span>
                <span className="inline-block bg-corporate-navy text-white text-xs font-semibold px-3 py-1 rounded-full ml-2">
                  Web App
                </span>
              </div>
            </div>
            {/* Project 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-2xl hover:scale-[1.01]">
              <Image
                src="https://placehold.co/800x500/E67E22/ffffff?text=Product+Showcase"
                alt="E-commerce web design for bespoke product showcase gallery"
                className="w-full h-48 object-cover"
                width={800}
                height={500}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-corporate-navy mb-2">
                  Bespoke Product Showcase
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Designed and built a sleek, modern e-commerce site focused on
                  high-quality product visualization and a seamless user
                  journey.
                </p>
                <span className="inline-block bg-corporate-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                  eCommerce
                </span>
                <span className="inline-block bg-corporate-navy text-white text-xs font-semibold px-3 py-1 rounded-full ml-2">
                  Branding
                </span>
              </div>
            </div>
            {/* Project 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-2xl hover:scale-[1.01]">
              <Image
                src="https://placehold.co/800x500/1A346F/ffffff?text=Education+Platform"
                alt="Web development screenshot for modern K-12 education platform"
                className="w-full h-48 object-cover"
                width={800}
                height={500}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-corporate-navy mb-2">
                  Modern Education Platform
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Created an accessible and intuitive portal for a K-12 school,
                  improving communication between faculty, students, and
                  parents.
                </p>
                <span className="inline-block bg-corporate-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Education
                </span>
                <span className="inline-block bg-corporate-navy text-white text-xs font-semibold px-3 py-1 rounded-full ml-2">
                  CMS
                </span>
              </div>
            </div>
          </div>
        );
      case 'design':
        return (
          <div
            id="design-content"
            className="project-tab-content active grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Design Project 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-2xl hover:scale-[1.01]">
              <Image
                src="https://placehold.co/800x500/1A346F/ffffff?text=Brand+Identity"
                alt="Graphic design examples for global brand identity development"
                className="w-full h-48 object-cover"
                width={800}
                height={500}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-corporate-navy mb-2">
                  Global Brand Identity Development
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Full corporate rebranding initiative, leading to a{' '}
                  <strong>25%</strong> rise in brand recognition across all
                  digital channels.
                </p>
                <span className="inline-block bg-corporate-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Branding
                </span>
                <span className="inline-block bg-corporate-navy text-white text-xs font-semibold px-3 py-1 rounded-full ml-2">
                  Design
                </span>
              </div>
            </div>
            {/* Design Project 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-2xl hover:scale-[1.01]">
              <Image
                src="https://placehold.co/800x500/E67E22/ffffff?text=Marketing+Assets"
                alt="Marketing asset graphic design examples for product launch campaign"
                className="w-full h-48 object-cover"
                width={800}
                height={500}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-corporate-navy mb-2">
                  Marketing Campaign Collateral
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Produced a cohesive suite of digital and print assets for a
                  new product launch, boosting initial campaign engagement by{' '}
                  <strong>50%</strong>.
                </p>
                <span className="inline-block bg-corporate-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Marketing
                </span>
                <span className="inline-block bg-corporate-navy text-white text-xs font-semibold px-3 py-1 rounded-full ml-2">
                  Social Media
                </span>
              </div>
            </div>
            {/* Design Project 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-2xl hover:scale-[1.01]">
              <Image
                src="https://placehold.co/800x500/1A346F/ffffff?text=App+UI%2FUX"
                alt="Mobile app user interface UI/UX redesign mockup by YM Solutions"
                className="w-full h-48 object-cover"
                width={800}
                height={500}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-corporate-navy mb-2">
                  Mobile App UI/UX Redesign
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Overhauled a mobile app&apos;s interface to be more intuitive,
                  resulting in a <strong>30%</strong> increase in user retention
                  and session time.
                </p>
                <span className="inline-block bg-corporate-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                  UI/UX
                </span>
                <span className="inline-block bg-corporate-navy text-white text-xs font-semibold px-3 py-1 rounded-full ml-2">
                  Mobile App
                </span>
              </div>
            </div>
          </div>
        );
      case 'game':
        return (
          <div
            id="game-content"
            className="project-tab-content active grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Game Project 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-2xl hover:scale-[1.01]">
              <Image
                src="https://placehold.co/800x500/1A346F/ffffff?text=Mobile+Game"
                alt="Mobile puzzle game development project 'BlockShift' gameplay"
                className="w-full h-48 object-cover"
                width={800}
                height={500}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-corporate-navy mb-2">
                  Mobile Puzzle Game &quot;BlockShift&quot;
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Developed a hyper-casual mobile game that achieved{' '}
                  <strong>100k+ downloads</strong> in the first quarter with
                  high user ratings.
                </p>
                <span className="inline-block bg-corporate-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Unity
                </span>
                <span className="inline-block bg-corporate-navy text-white text-xs font-semibold px-3 py-1 rounded-full ml-2">
                  Mobile Game
                </span>
              </div>
            </div>
            {/* Game Project 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-2xl hover:scale-[1.01]">
              <Image
                src="https://placehold.co/800x500/E67E22/ffffff?text=Educational+Game"
                alt="2D educational game development screenshot for 'MathWiz' kids game"
                className="w-full h-48 object-cover"
                width={800}
                height={500}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-corporate-navy mb-2">
                  Educational Kids Game &quot;MathWiz&quot;
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Created an interactive 2D game for tablets that makes learning
                  mathematics fun, adopted by several school districts.
                </p>
                <span className="inline-block bg-corporate-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Educational
                </span>
                <span className="inline-block bg-corporate-navy text-white text-xs font-semibold px-3 py-1 rounded-full ml-2">
                  2D Game
                </span>
              </div>
            </div>
            {/* Game Project 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-2xl hover:scale-[1.01]">
              <Image
                src="https://placehold.co/800x500/1A346F/ffffff?text=VR+Experience"
                alt="VR architectural visualization walkthrough in Unreal Engine"
                className="w-full h-48 object-cover"
                width={800}
                height={500}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-corporate-navy mb-2">
                  VR Architectural Visualization
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Built an immersive VR prototype allowing clients to walk
                  through architectural designs before construction begins.
                </p>
                <span className="inline-block bg-corporate-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                  VR
                </span>
                <span className="inline-block bg-corporate-navy text-white text-xs font-semibold px-3 py-1 rounded-full ml-2">
                  Unreal Engine
                </span>
              </div>
            </div>
          </div>
        );
      case 'video':
        return (
          <div
            id="video-content"
            className="project-tab-content active grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Video Project 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-2xl hover:scale-[1.01]">
              <Image
                src="https://placehold.co/800x500/E67E22/ffffff?text=Promo+Video"
                alt="SaaS promotional video editing example frame"
                className="w-full h-48 object-cover"
                width={800}
                height={500}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-corporate-navy mb-2">
                  SaaS Promotional Video Series
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Edited a series of product demo videos that increased website
                  lead conversions by <strong>20%</strong>.
                </p>
                <span className="inline-block bg-corporate-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Promo Video
                </span>
                <span className="inline-block bg-corporate-navy text-white text-xs font-semibold px-3 py-1 rounded-full ml-2">
                  Video Editing
                </span>
              </div>
            </div>
            {/* Video Project 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-2xl hover:scale-[1.01]">
              <Image
                src="https://placehold.co/800x500/1A346F/ffffff?text=Event+Highlight"
                alt="Video editing example for corporate event highlight reel"
                className="w-full h-48 object-cover"
                width={800}
                height={500}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-corporate-navy mb-2">
                  Corporate Event Highlight Reel
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Produced a high-energy highlight video from a 3-day
                  conference, used to promote next year&apos;s event and secure
                  sponsors.
                </p>
                <span className="inline-block bg-corporate-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Corporate
                </span>
                <span className="inline-block bg-corporate-navy text-white text-xs font-semibold px-3 py-1 rounded-full ml-2">
                  Event Video
                </span>
              </div>
            </div>
            {/* Video Project 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-2xl hover:scale-[1.01]">
              <Image
                src="https://placehold.co/800x500/E67E22/ffffff?text=YouTube+Content"
                alt="YouTube channel video editing service example thumbnail"
                className="w-full h-48 object-cover"
                width={800}
                height={500}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-corporate-navy mb-2">
                  YouTube Channel Content Package
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Provide ongoing weekly video editing for a popular tech
                  channel, helping grow their subscriber base by{' '}
                  <strong>150%</strong> in one year.
                </p>
                <span className="inline-block bg-corporate-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                  YouTube
                </span>
                <span className="inline-block bg-corporate-navy text-white text-xs font-semibold px-3 py-1 rounded-full ml-2">
                  Content Creation
                </span>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

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
        <div
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10 scroll-animate"
          style={{ transitionDelay: '100ms' }}
        >
          <button
            className={`project-tab border-2 border-transparent px-4 py-2 rounded-lg font-semibold transition-colors duration-300 ${
              activeTab === 'web' ? 'active' : ''
            }`}
            onClick={() => setActiveTab('web')}
          >
            Web Development
          </button>
          <button
            className={`project-tab border-2 border-transparent px-4 py-2 rounded-lg font-semibold transition-colors duration-300 ${
              activeTab === 'design' ? 'active' : ''
            }`}
            onClick={() => setActiveTab('design')}
          >
            Graphic Design
          </button>
          <button
            className={`project-tab border-2 border-transparent px-4 py-2 rounded-lg font-semibold transition-colors duration-300 ${
              activeTab === 'game' ? 'active' : ''
            }`}
            onClick={() => setActiveTab('game')}
          >
            Game Development
          </button>
          <button
            className={`project-tab border-2 border-transparent px-4 py-2 rounded-lg font-semibold transition-colors duration-300 ${
              activeTab === 'video' ? 'active' : ''
            }`}
            onClick={() => setActiveTab('video')}
          >
            Video Editing
          </button>
        </div>
        <div className="scroll-animate" style={{ transitionDelay: '200ms' }}>
          {renderTabContent()}
        </div>
        <div
          className="text-center mt-12 scroll-animate"
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
