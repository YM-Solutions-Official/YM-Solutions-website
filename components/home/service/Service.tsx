export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate">
          <p className="text-corporate-accent font-semibold uppercase tracking-widest mb-2">
            Our Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-corporate-navy">
            Core Digital Services
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg card-hover border-t-4 border-corporate-navy scroll-animate">
            <div className="mb-5 text-corporate-navy">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              Web Design & Development
            </h3>
            <p className="text-gray-600 mb-4">
              High-performance, visually stunning websites that drive engagement
              and conversions.
            </p>
            <ul className="text-sm space-y-2 text-gray-600">
              <li>• Custom E-Commerce Solutions</li>
              <li>• Corporate & Portfolio Websites</li>
              <li>• CMS & API Integration</li>
              <li>• Maintenance & Support Plans</li>
            </ul>
          </div>

          <div
            className="bg-white p-8 rounded-xl shadow-lg card-hover border-t-4 border-corporate-accent scroll-animate"
            style={{ transitionDelay: '100ms' }}
          >
            <div className="mb-5 text-corporate-accent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              Graphic Design & Branding
            </h3>
            <p className="text-gray-600 mb-4">
              Memorable brand identities with compelling visuals that capture
              attention and communicate value.
            </p>
            <ul className="text-sm space-y-2 text-gray-600">
              <li>• Logo Design & Brand Guidelines</li>
              <li>• Marketing & Social Media Assets</li>
              <li>• UI/UX for Web & Mobile</li>
              <li>• Print & Packaging Design</li>
            </ul>
          </div>

          <div
            className="bg-white p-8 rounded-xl shadow-lg card-hover border-t-4 border-corporate-navy scroll-animate"
            style={{ transitionDelay: '200ms' }}
          >
            <div className="mb-5 text-corporate-navy">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              Immersive Game Development
            </h3>
            <p className="text-gray-600 mb-4">
              Engaging games for mobile, web, and desktop platforms, from
              concept to launch.
            </p>
            <ul className="text-sm space-y-2 text-gray-600">
              <li>• Unity & Unreal Engine Dev</li>
              <li>• 2D & 3D Game Creation</li>
              <li>• Hyper-casual & Mobile Games</li>
              <li>• AR/VR Experiences</li>
            </ul>
          </div>

          <div
            className="bg-white p-8 rounded-xl shadow-lg card-hover border-t-4 border-corporate-accent scroll-animate"
            style={{ transitionDelay: '300ms' }}
          >
            <div className="mb-5 text-corporate-accent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              Expert Video Editing
            </h3>
            <p className="text-gray-600 mb-4">
              Transforming raw footage into polished, professional videos ready
              for any platform.
            </p>
            <ul className="text-sm space-y-2 text-gray-600">
              <li>• Promotional & Corporate Videos</li>
              <li>• YouTube & Social Content</li>
              <li>• Motion Graphics & Titles</li>
              <li>• Color Grading & Sound Design</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
