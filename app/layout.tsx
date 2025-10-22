import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'YM Solutions | Web, Design, Game & Video Editing Agency',
  description:
    'YM Solutions delivers business growth through expert web development, professional graphic design, game development, and polished video editing. Based in Delhi.',
  keywords:
    'web development, graphic design, game development, video editing, digital agency, custom web design, brand identity, logo design, mobile game development, full-stack development, corporate video production, youtube video editor, YM Solutions, business growth, branding, web agency, Delhi agency',
  openGraph: {
    title: 'YM Solutions | Web, Design, Game & Video Editing Agency',
    description:
      'YM Solutions delivers business growth through expert web development, professional graphic design, game development, and polished video editing.',
    type: 'website',
    url: 'https://ymsolutions.in/',
    images: 'https://ymsolutions.in/YM_logo.jpg',
    siteName: 'YM Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YM Solutions | Web, Design, Game & Video Editing Agency',
    description:
      'YM Solutions delivers business growth through expert web development, professional graphic design, game development, and polished video editing.',
    images: 'https://ymsolutions.in/YM_logo.jpg',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'YM Solutions',
  url: 'https://ymsolutions.in/',
  logo: 'https://ymsolutions.in/YM_logo.jpg',
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
        <link rel="canonical" href="https://ymsolutions.in/" />
        <link rel="icon" href="/YM_logo.jpg" type="image/x-icon" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
