const Process = () => {
  return (
    <section id="process" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate">
          <p className="text-corporate-accent font-semibold uppercase tracking-widest mb-2">
            Our Method
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-corporate-navy">
            Your Journey to Digital Excellence
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-16 gap-12 text-center">
          <div className="process-step scroll-animate">
            <div className="w-20 h-20 rounded-full bg-light-bg text-corporate-navy flex items-center justify-center mx-auto mb-5 shadow-md">
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-corporate-navy">
              1. Discover & Strategize
            </h3>
            <p className="text-gray-600 text-sm">
              We dive deep into your brand, audience, and goals to build a
              clear, actionable roadmap for success.
            </p>
          </div>
          <div
            className="process-step scroll-animate"
            style={{ transitionDelay: '150ms' }}
          >
            <div className="w-20 h-20 rounded-full bg-light-bg text-corporate-navy flex items-center justify-center mx-auto mb-5 shadow-md">
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-corporate-navy">
              2. Design & Create
            </h3>
            <p className="text-gray-600 text-sm">
              Our team executes cutting-edge design and development, ensuring
              technical excellence and brand consistency.
            </p>
          </div>
          <div
            className="process-step scroll-animate"
            style={{ transitionDelay: '300ms' }}
          >
            <div className="w-20 h-20 rounded-full bg-light-bg text-corporate-navy flex items-center justify-center mx-auto mb-5 shadow-md">
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-corporate-navy">
              3. Develop & Deploy
            </h3>
            <p className="text-gray-600 text-sm">
              We ensure a flawless launch of your project, minimizing downtime
              and maximizing immediate impact.
            </p>
          </div>
          <div
            className="process-step scroll-animate"
            style={{ transitionDelay: '450ms' }}
          >
            <div className="w-20 h-20 rounded-full bg-light-bg text-corporate-navy flex items-center justify-center mx-auto mb-5 shadow-md">
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-corporate-navy">
              4. Optimize & Grow
            </h3>
            <p className="text-gray-600 text-sm">
              Our partnership continues with performance monitoring and
              strategic refinements to ensure sustained growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
