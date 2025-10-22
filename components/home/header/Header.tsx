import Image from 'next/image';

export default function Header() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-light-bg pt-20 pb-28 md:pt-32 md:pb-40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="md:order-1 order-2 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 text-corporate-navy text-shadow-pro scroll-animate">
              <span className="text-corporate-accent">
                Building Your Brand.
              </span>
            </h1>
            <h2
              className="text-xl sm:text-2xl font-semibold mb-6 text-corporate-navy tracking-wide scroll-animate"
              style={{ transitionDelay: '100ms' }}
            >
              Your one-stop solution for all digital needs.
            </h2>
            <p
              className="text-lg sm:text-xl font-light mb-10 text-gray-600 scroll-animate"
              style={{ transitionDelay: '200ms' }}
            >
              YM Solutions is your creative growth partner, leveraging expert{' '}
              <strong>
                web development, compelling design, video editing and immersive
                media
              </strong>{' '}
              to elevate your brand in the digital landscape.
            </p>
            <a
              href="#contact"
              className="cta-button-pro inline-block bg-corporate-navy text-white font-bold px-10 py-4 rounded-lg text-lg hover:bg-corporate-accent transition duration-300 transform shadow-xl scroll-animate"
              style={{ transitionDelay: '300ms' }}
            >
              Request a Consultation
            </a>
          </div>
          <div className="order-1 md:order-2 relative overflow-hidden rounded-xl shadow-2xl border-b-4 border-corporate-accent scroll-animate">
            <video
              className="w-full h-full object-cover rounded-xl"
              autoPlay
              muted
              loop
              playsInline
              poster="/images/600x400/1A346F/ffffff?text=Loading+Media..."
            >
              <source src="/videos/header.mp4" type="video/mp4" />
              <Image
                src="/images/header-fallback.jpg"
                alt="YM Solutions digital strategy dashboard showing results for web, game, design and video projects"
                width={600}
                height={400}
                className="w-full h-auto rounded-xl"
              />
            </video>
            <div className="absolute inset-0 bg-corporate-navy opacity-10 rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
