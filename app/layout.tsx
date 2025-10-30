import type { Metadata, Viewport } from 'next'; // 1. Import Viewport
import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react'; // Added for completeness

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

// Define the base URL for metadata
const siteUrl = 'https://ymsolutions.in';

export const metadata: Metadata = {
  // Use metadataBase to define the canonical URL
  metadataBase: new URL(siteUrl),

  // Title template for dynamic page titles (e.g., "Services | YM Solutions")
  title: {
    default:
      'YM Solutions | Web, Design, SEO, Social Media Management, Game & Video Editing', // Corrected typo
    template: '%s | YM Solutions',
  },
  description:
    'YM Solutions delivers business growth through expert web development, professional graphic design, game development, and polished video editing. Based in Delhi.',

  // --- 2. 'viewport' line is REMOVED from here ---

  // SEO directives
  robots: 'index, follow',
  publisher: 'YM Solutions',

  // Keywords
  keywords:
    'web development, graphic design, game development, video editing, digital agency, custom web design, brand identity, logo design, mobile game development, full-stack development, corporate video production, youtube video editor, YM Solutions, business growth, branding, web agency, Delhi agency',

  // Canonical URL for the root (handled by metadataBase and alternates)
  alternates: {
    canonical: '/',
  },

  // Favicon and app icons (handled by metadata)
  icons: {
    icon: '/images/logo.jpg',
  },

  // Open Graph (for social sharing - Facebook, LinkedIn, etc.)
  openGraph: {
    title: 'YM Solutions | Web, Design, Game & Video Editing Agency',
    description:
      'YM Solutions delivers business growth through expert web development, professional graphic design, game development, and polished video editing.',
    type: 'website',
    url: '/', // Uses metadataBase
    images: [
      {
        url: '/YM_logo.jpg', // Assumes this is in /public/YM_logo.jpg
        width: 800,
        height: 600,
        alt: 'YM Solutions Logo',
      },
    ],
    siteName: 'YM Solutions',
  },

  // Twitter Card (for sharing on X/Twitter)
  twitter: {
    card: 'summary_large_image',
    title: 'YM Solutions | Web, Design, Game & Video Editing Agency',
    description:
      'YM Solutions delivers business growth through expert web development, professional graphic design, game development, and polished video editing.',
    images: ['/YM_logo.jpg'], // Uses metadataBase
  },
};

// --- 3. ADD THIS NEW 'viewport' EXPORT ---
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

// JSON-LD Schema for rich results in Google
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'YM Solutions',
  url: siteUrl,
  logo: `${siteUrl}/YM_logo.jpg`,
  telephone: '+91 93102 56281',
  email: 'contact@ymsolutions.in',
  description:
    'YM Solutions delivers business growth through expert web development, professional graphic design, game development, and polished video editing.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Digital Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Web Design & Development',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Graphic Design & Branding',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Game Development',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Video Editing',
        },
      },
    ],
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=61575130954126',
    'https://www.instagram.com/ymsolutionsofficial/',
    'https://www.linkedin.com/company/ymsolutionsofficial/',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}