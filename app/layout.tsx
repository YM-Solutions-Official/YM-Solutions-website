import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const siteUrl = 'https://ymsolutions.in';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'YM Solutions | Web, Design, SEO, Social Media Management, Game & Video Editing',
    template: '%s | YM Solutions',
  },
  description: 'YM Solutions delivers business growth through expert web development, professional graphic design, game development, and polished video editing. Based in Delhi.',
  robots: 'index, follow',
  publisher: 'YM Solutions',
  keywords: 'web development, graphic design, game development, video editing, digital agency, custom web design, brand identity, logo design, mobile game development, full-stack development, corporate video production, youtube video editor, YM Solutions, business growth, branding, web agency, Delhi agency',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/images/logo.jpg',
  },
  openGraph: {
    title: 'YM Solutions | Web, Design, Game & Video Editing Agency',
    description: 'YM Solutions delivers business growth through expert web development, professional graphic design, game development, and polished video editing.',
    type: 'website',
    url: '/',
    images: [
      {
        url: '/YM_logo.jpg',
        width: 800,
        height: 600,
        alt: 'YM Solutions Logo',
      },
    ],
    siteName: 'YM Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YM Solutions | Web, Design, Game & Video Editing Agency',
    description: 'YM Solutions delivers business growth through expert web development, professional graphic design, game development, and polished video editing.',
    images: ['/YM_logo.jpg'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};


const GTM_ID = 'GTM-5BXTM22S';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'YM Solutions',
  url: siteUrl,
  logo: `${siteUrl}/YM_logo.jpg`,
  telephone: '+91 93102 56281',
  email: 'contact@ymsolutions.in',
  description: 'YM Solutions delivers business growth through expert web development, professional graphic design, game development, and polished video editing.',
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
        {/* Google Tag Manager - Head Script */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {/* Google Tag Manager - Body NoScript */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}