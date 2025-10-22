export default function MissionSection() {
  return (
    <section id="mission" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center scroll-animate">
          <p className="text-corporate-accent font-semibold uppercase tracking-widest mb-4">
            Our Philosophy
          </p>
          {/* --- FIX: Escaped the apostrophes --- */}
          <h2 className="text-3xl sm:text-4xl font-bold text-corporate-navy mb-6">
            We&apos;re More Than an Agency; We&apos;re Your Strategic Partner.
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We believe true digital success comes from a partnership built on
            shared goals. Our mission is to integrate seamlessly with your team,
            combining strategic insights with creative execution to build
            digital experiences that deliver{' '}
            <strong>tangible results and drive sustainable growth.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
