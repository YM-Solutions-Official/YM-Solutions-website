'use client';

import { useState } from 'react';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Popup({ isOpen, onClose }: PopupProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('https://formspree.io/f/xvgwvkjq', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setMessage('Thank you! Your message has been sent successfully.');
        e.currentTarget.reset();
        setTimeout(() => {
          onClose();
          setMessage('');
        }, 3000);
      } else {
        setMessage('Oops! There was a problem submitting your form.');
      }
    } catch (error) {
      // --- FIX 1: Used the 'error' variable ---
      console.error('Form submission error:', error); // Log the error for debugging
      setMessage('Oops! There was a network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay active">
      <div className="popup-content">
        <button onClick={onClose} className="popup-close">
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
        <h3 className="text-2xl font-bold text-corporate-navy mb-4">
          How can we help you?
        </h3>

        {/* --- FIX 2: Escaped the apostrophes --- */}
        <p className="text-gray-600 mb-6">
          Let us know what you&apos;re looking for, and we&apos;ll reply with a
          personalized solution.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="popup-name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="popup-name"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-corporate-navy focus:border-corporate-navy"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="popup-email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="popup-email"
              name="email"
              placeholder="your.email@example.com"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-corporate-navy focus:border-corporate-navy"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="popup-service"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Service of Interest
            </label>
            <select
              id="popup-service"
              name="service"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-corporate-navy focus:border-corporate-navy"
            >
              <option value="">Select a service...</option>
              <option value="web_development">Web Design & Development</option>
              <option value="graphic_design">Graphic Design & Branding</option>
              <option value="game_development">Game Development</option>
              <option value="video_editing">Video Editing</option>
              <option value="other">Other Inquiry</option>
            </select>
          </div>
          <div className="mb-6">
            <label
              htmlFor="popup-message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Brief Message
            </label>
            <textarea
              id="popup-message"
              name="message"
              rows={3}
              placeholder="Tell us about your project needs..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-corporate-navy focus:border-corporate-navy"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-corporate-navy text-white font-bold py-3 rounded-lg hover:bg-corporate-accent transition duration-300 shadow-xl disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Get Started'}
          </button>
          {message && (
            <p
              className={`mt-4 text-center font-medium ${message.includes('Thank you') ? 'text-green-600' : 'text-red-600'}`}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
