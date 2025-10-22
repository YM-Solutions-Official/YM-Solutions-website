'use client';

import { useState, FormEvent } from 'react';

const Contact = () => {
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);
    setMessage('');
    setIsError(false);

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setMessage('Thank you! Your message has been sent successfully.');
        setIsError(false);
        form.reset();
        setTimeout(() => setMessage(''), 5000);
      } else {
        const responseData = await response.json();
        setMessage(
          responseData.errors
            ? responseData.errors
                .map((e: { message: string }) => e.message)
                .join(', ')
            : 'Oops! There was a problem submitting your form.'
        );
        setIsError(true);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setMessage('Oops! There was a network error. Please try again later.');
      setIsError(true);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:space-x-12">
          <div className="lg:w-1/2 mb-10 lg:mb-0 scroll-animate">
            <p className="text-corporate-accent font-semibold uppercase tracking-widest mb-2">
              Let&apos;s Get Started
            </p>
            <h2 className="text-4xl font-bold text-corporate-navy mb-6">
              Discuss Your Next Project.
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              Start the conversation about your next project. Tell us about your
              challenges and objectives, and we will formulate a personalized
              plan to achieve your desired results.
            </p>
            <div className="space-y-4 font-medium">
              <a
                href="mailto:contact@ymsolutions.in"
                className="flex items-center text-gray-700 hover:text-corporate-navy transition"
              >
                <svg
                  className="w-6 h-6 mr-3 text-corporate-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <span>contact@ymsolutions.in</span>
              </a>
              <a
                href="tel:+919310256281"
                className="flex items-center text-gray-700 hover:text-corporate-navy transition"
              >
                <svg
                  className="w-6 h-6 mr-3 text-corporate-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* FIX: Replaced the broken SVG path with a correct one for a phone icon */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+91 93102 56281</span>
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 bg-light-bg p-8 rounded-xl shadow-2xl scroll-animate">
            <form
              id="contact-form"
              action="https://formspree.io/f/xvgwvkjq"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Arun Kumar"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-corporate-navy focus:border-corporate-navy"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@gmail.com"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-corporate-navy focus:border-corporate-navy"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-corporate-navy focus:border-corporate-navy"
                >
                  <option value="">Select a service...</option>
                  <option value="web_development">
                    Web Design & Development
                  </option>
                  <option value="graphic_design">
                    Graphic Design & Branding
                  </option>
                  <option value="game_development">Game Development</option>
                  <option value="video_editing">Video Editing</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Briefly describe your goals and expected timeline."
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-corporate-navy focus:border-corporate-navy"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-corporate-navy text-white font-bold py-3 rounded-lg hover:bg-corporate-accent transition duration-300 shadow-xl disabled:opacity-70"
              >
                {isSending ? 'Sending...' : 'Submit Inquiry'}
              </button>
              {message && (
                <p
                  id="form-message"
                  className={`mt-4 text-center font-medium ${
                    isError ? 'text-red-600' : 'text-green-600'
                  }`}
                >
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
