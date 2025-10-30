'use client';

import Image from "next/image";

// This component is styled to match the ServicesSection theme.
// It uses standard <img> and <a> tags for compatibility.

// Interface for a single logo
interface Logo {
  src: string;
  alt: string;
  href?: string;
}

// Props for the component
interface TrustedClientsProps {
  logos: Logo[];
}

/**
 * A responsive component to display client logos, themed to match the
 * website's design (based on ServicesSection).
 */
export default function TrustedClients({ logos }: TrustedClientsProps) {
  return (
    // Use styling from ServicesSection (padding, bg color)
    <section id="trusted-clients" className="py-16 md:py-24 bg-light-bg">
      {/* Use styling from ServicesSection (container width) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Use title structure from ServicesSection */}
        <div className="text-center mb-16 scroll-animate">
          <p className="text-corporate-accent font-semibold uppercase tracking-widest mb-2">
            Companies that trust us
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-corporate-navy">
            Our Trusted Brands
          </h2>
        </div>

        {/* Logo layout from your original component */}
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-8 md:gap-x-16">
          {logos.map((logo, idx) => {
            // Use a standard <img> tag
            const logoContent = (
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160} // Set a fixed width for consistency
                height={64} // Set a fixed height for consistency
                className="object-contain w-auto h-10 md:h-16" // Using your specified height
                loading="lazy" // Added for performance
              />
            );

            return (
              <div
                key={idx}
                // Adding a subtle hover effect that fits the theme
                className="opacity-70 hover:opacity-100 transition-opacity duration-300 ease-in-out"
              >
                {logo.href ? (
                  // Use a standard <a> tag for links
                  <a
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${logo.alt}`}
                  >
                    {logoContent}
                  </a>
                ) : (
                  // Render a div if no link is provided
                  <div aria-label={logo.alt}>{logoContent}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

