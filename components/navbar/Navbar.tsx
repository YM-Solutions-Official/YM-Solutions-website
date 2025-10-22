'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Mobile Menu Sub-Component
const MobileMenu = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    // Cleanup on unmount
    return () => document.body.classList.remove('no-scroll');
  }, [isOpen]);

  const handleLinkClick = () => {
    // We let the global SmoothScrollHandler handle the event
    onClose();
  };

  return (
    <div
      id="mobile-menu-overlay"
      className={`mobile-menu-overlay ${isOpen ? 'active' : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="mobile-menu-content">
        <button
          id="mobile-menu-close"
          className="mobile-menu-close"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div className="pt-16 pb-8 px-6">
          <Link
            href="#home"
            onClick={handleLinkClick}
            className="block py-4 text-lg font-medium text-gray-700 hover:text-corporate-navy transition duration-150 border-b border-gray-100"
          >
            Home
          </Link>
          <Link
            href="#services"
            onClick={handleLinkClick}
            className="block py-4 text-lg font-medium text-gray-700 hover:text-corporate-navy transition duration-150 border-b border-gray-100"
          >
            Services
          </Link>
          <Link
            href="#process"
            onClick={handleLinkClick}
            className="block py-4 text-lg font-medium text-gray-700 hover:text-corporate-navy transition duration-150 border-b border-gray-100"
          >
            Our Process
          </Link>
          <Link
            href="#projects"
            onClick={handleLinkClick}
            className="block py-4 text-lg font-medium text-gray-700 hover:text-corporate-navy transition duration-150 border-b border-gray-100"
          >
            Our Work
          </Link>
          <Link
            href="#contact"
            onClick={handleLinkClick}
            className="block py-4 text-lg font-medium text-gray-700 hover:text-corporate-navy transition duration-150 border-b border-gray-100"
          >
            Contact
          </Link>
          <Link
            href="#contact"
            onClick={handleLinkClick}
            className="block mt-6 text-center bg-corporate-navy text-white px-5 py-3 rounded-lg hover:bg-opacity-90 transition duration-150 shadow-md font-semibold"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </div>
  );
};

// Main Navbar Component
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close menu on 'Escape' key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-between items-center py-4 md:py-5">
            <Link href="#home" className="flex items-center space-x-2">
              <Image
                src="/images/logo.jpg" // Assumes /public/YM_logo.jpg
                alt="YM Solutions Logo"
                width={40}
                height={40}
                className="w-10 h-10 rounded-lg shadow-md"
              />
              <h4 className="text-2xl font-bold text-black">Solutions</h4>
            </Link>
            <div className="hidden md:flex space-x-8 items-center text-sm">
              <Link
                href="#home"
                className="text-gray-600 hover:text-corporate-navy transition duration-150 font-medium"
              >
                Home
              </Link>
              <Link
                href="#services"
                className="text-gray-600 hover:text-corporate-navy transition duration-150 font-medium"
              >
                Services
              </Link>
              <Link
                href="#process"
                className="text-gray-600 hover:text-corporate-navy transition duration-150 font-medium"
              >
                Our Process
              </Link>
              <Link
                href="#projects"
                className="text-gray-600 hover:text-corporate-navy transition duration-150 font-medium"
              >
                Our Work
              </Link>
              <Link
                href="#contact"
                className="text-white bg-corporate-accent px-5 py-2 rounded-lg hover:bg-opacity-90 transition duration-150 shadow-md font-semibold"
              >
                Start a Project
              </Link>
            </div>
            <button
              id="mobile-menu-button"
              className="md:hidden p-2 text-corporate-navy hover:text-corporate-accent focus:outline-none rounded-md"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              )}
            </button>
          </nav>
        </div>
      </header>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

export default Navbar;
