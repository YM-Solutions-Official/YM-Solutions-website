// Renamed from MissionSection to AboutSection for clarity
// Make sure you've added 'light-bg': '#f8fafc' to your tailwind.config.js
export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* --- Centered Text Block --- */}
        <div className="max-w-4xl mx-auto text-center scroll-animate">
          <p className="text-corporate-accent font-semibold uppercase tracking-widest mb-4">
            Our Philosophy
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-corporate-navy mb-6">
            We&apos;re More Than an Agency; We&apos;re Your Strategic Partner.
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We believe true digital success comes from a partnership built on
            shared goals. Our mission is to integrate seamlessly with your team,
            combining strategic insights with creative execution to deliver{' '}
            <strong>tangible results and drive sustainable growth.</strong>
          </p>
        </div>

        {/* --- COUNTER SECTION --- */}
        <div className="max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-x-8 text-center scroll-animate" style={{ transitionDelay: '200ms' }}>

          {/* Stat 1 */}
          <div className="border-b md:border-b-0 md:border-r border-gray-200 pb-8 md:pb-0 md:pr-8">
            <span className="block text-4xl font-bold text-corporate-navy">
              30+
            </span>
            <span className="block text-sm font-medium text-gray-500 uppercase tracking-wider mt-2">
              Projects Completed
            </span>
          </div>

          {/* Stat 2 */}
          <div className="border-b md:border-b-0 md:border-r border-gray-200 pb-8 md:pb-0 md:pr-8">
            <span className="block text-4xl font-bold text-corporate-navy">
              10+
            </span>
            <span className="block text-sm font-medium text-gray-500 uppercase tracking-wider mt-2">
              Happy Clients
            </span>
          </div>

          {/* Stat 3 */}
          <div>
            <span className="block text-4xl font-bold text-corporate-navy">
              1+
            </span>
            <span className="block text-sm font-medium text-gray-500 uppercase tracking-wider mt-2">
              Years of Experience
            </span>
          </div>

        </div>
        {/* --- END COUNTER SECTION --- */}
      </div>
    </section>
  );
}