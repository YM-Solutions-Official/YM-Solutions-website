// This file centralizes all project data, making it easy to add, remove, or edit projects.

export interface WebProject {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
  tags: string[];
}

export interface DesignProject {
  id: number;
  title: string;
  client: string;
  imageUrl: string;
  altText: string;
}

export interface GameProject {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
  platforms: ('mobile' | 'desktop' | 'vr')[];
  engine: 'Unity' | 'Unreal Engine';
}

export interface VideoProject {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
  type: string;
}

export const webProjects: WebProject[] = [
  {
    id: 1,
    title: 'Luxury Hotel Booking Portal',
    description:
      'Developed a visually stunning website with an integrated real-time booking engine, increasing direct bookings by <strong>40%</strong>.',
    imageUrl: '/images/projects/web-hotel.png',
    altText:
      'Web development project for luxury hotel booking portal interface',
    tags: ['Hospitality', 'Web App'],
  },
  {
    id: 2,
    title: 'Bespoke Product Showcase',
    description:
      'Designed and built a sleek, modern e-commerce site focused on high-quality product visualization and a seamless user journey.',
    imageUrl: '/images/projects/web-ecommerce.png',
    altText: 'E-commerce web design for bespoke product showcase gallery',
    tags: ['eCommerce', 'Branding'],
  },
  {
    id: 3,
    title: 'Modern Education Platform',
    description:
      'Created an accessible and intuitive portal for a K-12 school, improving communication between faculty, students, and parents.',
    imageUrl: '/images/projects/web-education.png',
    altText: 'Web development screenshot for modern K-12 education platform',
    tags: ['Education', 'CMS'],
  },
];

export const designProjects: DesignProject[] = [
  {
    id: 1,
    title: 'Global Brand Identity',
    client: 'Fintech Corp',
    imageUrl: '/images/projects/design-branding.png',
    altText: 'Graphic design examples for global brand identity development',
  },
  {
    id: 2,
    title: 'Marketing Campaign Assets',
    client: 'LaunchGood',
    imageUrl: '/images/projects/design-marketing.png',
    altText:
      'Marketing asset graphic design examples for product launch campaign',
  },
  {
    id: 3,
    title: 'Mobile App UI/UX Redesign',
    client: 'ConnectApp',
    imageUrl: '/images/projects/design-uiux.png',
    altText: 'Mobile app user interface UI/UX redesign mockup by YM Solutions',
  },
  {
    id: 4,
    title: 'Packaging Design',
    client: 'EcoFoods',
    imageUrl: '/images/projects/design-packaging.png',
    altText: 'Eco-friendly packaging design for an organic food brand',
  },
];

export const gameProjects: GameProject[] = [
  {
    id: 1,
    title: 'BlockShift',
    description:
      'A hyper-casual mobile puzzle game that achieved <strong>100k+ downloads</strong> in the first quarter with high user ratings.',
    imageUrl: '/images/projects/game-blockshift.png',
    altText: "Mobile puzzle game development project 'BlockShift' gameplay",
    platforms: ['mobile'],
    engine: 'Unity',
  },
  {
    id: 2,
    title: 'MathWiz',
    description:
      'An interactive 2D game for tablets that makes learning mathematics fun, adopted by several school districts.',
    imageUrl: '/images/projects/game-mathwiz.png',
    altText:
      "2D educational game development screenshot for 'MathWiz' kids game",
    platforms: ['mobile'],
    engine: 'Unity',
  },
  {
    id: 3,
    title: 'ArchViz Explorer',
    description:
      'An immersive VR prototype allowing clients to walk through architectural designs before construction begins.',
    imageUrl: '/images/projects/game-vr-archviz.png',
    altText: 'VR architectural visualization walkthrough in Unreal Engine',
    platforms: ['vr'],
    engine: 'Unreal Engine',
  },
];

export const videoProjects: VideoProject[] = [
  {
    id: 1,
    title: 'SaaS Promotional Video Series',
    description:
      'Edited a series of product demo videos that increased website lead conversions by <strong>20%</strong>.',
    imageUrl: '/images/projects/video-promo.png',
    altText: 'SaaS promotional video editing example frame',
    type: 'Promo Video',
  },
  {
    id: 2,
    title: 'Corporate Event Highlight Reel',
    description:
      "Produced a high-energy highlight video from a 3-day conference, used to promote next year's event.",
    imageUrl: '/images/projects/video-event.png',
    altText: 'Video editing example for corporate event highlight reel',
    type: 'Event Coverage',
  },
  {
    id: 3,
    title: 'Tech Channel Content Package',
    description:
      'Provide ongoing weekly video editing for a popular tech channel, helping grow their subscriber base by <strong>150%</strong>.',
    imageUrl: '/images/projects/video-youtube.png',
    altText: 'YouTube channel video editing service example thumbnail',
    type: 'YouTube Content',
  },
];
