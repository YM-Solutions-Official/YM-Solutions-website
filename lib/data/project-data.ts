// This file centralizes all project data, making it easy to add, remove, or edit projects.

export interface WebProject {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
  tags: string[];
  category: string;
  duration: string;
  demoUrl?: string;
}
export interface DesignProject {
  id: number;
  title: string;
  client: string;
  imageUrl: string;
  altText: string;
  category: string;
  software: string[];
  objective: string;
  year: string;
  imageRatio: 'square' | 'landscape' | 'portrait';
}
export interface GameProject {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
  platforms: ('mobile' | 'desktop' | 'vr')[];
  engine: 'Unity' | 'Unreal Engine' | 'Godot' | 'Custom';
  genre: string;
  duration: string;
  status: 'Completed' | 'In Development' | 'Prototype';
  demoUrl?: string;
}

export interface VideoProject {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
  type: string;
  client: string;
  role: string[];
  duration: string;
  year: string;
  software: string[];
  videoUrl?: string;
}

export const webProjects: WebProject[] = [
  {
    id: 1,
    title: 'Luxury Hotel Booking Portal',
    description:
      'Developed a visually stunning website with an integrated real-time booking engine, increasing direct bookings by <strong>40%</strong>. Features include dynamic pricing, instant availability checks, and seamless payment integration.',
    imageUrl: '/images/projects/web-hotel.png',
    altText: 'Luxury hotel booking portal interface with booking calendar',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis'],
    category: 'Full-Stack',
    duration: '3 months',
    demoUrl: 'https://hotel-demo.ym-solutions.com',
  },
  {
    id: 2,
    title: 'Bespoke Product Showcase',
    description:
      'Designed and built a sleek, modern e-commerce site focused on high-quality product visualization and a seamless user journey. Implemented advanced filtering and 360° product views.',
    imageUrl: '/images/projects/web-ecommerce.png',
    altText: 'Modern e-commerce website with product showcase gallery',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Shopify API'],
    category: 'Frontend',
    duration: '2 months',
    demoUrl: 'https://ecommerce-demo.ym-solutions.com',
  },
  {
    id: 3,
    title: 'Modern Education Platform',
    description:
      'Created an accessible and intuitive portal for a K-12 school, improving communication between faculty, students, and parents. Features include grade tracking, assignment submission, and real-time notifications.',
    imageUrl: '/images/projects/web-education.png',
    altText: 'Education platform dashboard with student progress tracking',
    tags: ['Vue.js', 'Laravel', 'MySQL', 'WebSockets'],
    category: 'Web App',
    duration: '4 months',
  },
  {
    id: 4,
    title: 'Healthcare Management System',
    description:
      'Built a comprehensive healthcare platform for patient records, appointment scheduling, and telemedicine capabilities. HIPAA compliant with advanced security features.',
    imageUrl: '/images/projects/web-healthcare.png',
    altText: 'Healthcare management system dashboard',
    tags: ['Angular', 'Python', 'PostgreSQL', 'Docker'],
    category: 'Enterprise',
    duration: '6 months',
  },
];

export const designProjects: DesignProject[] = [
  {
    id: 1,
    title: 'Global Brand Identity',
    client: 'Fintech Corp',
    imageUrl: '/images/projects/graphic/combo pack tavika brand.png',
    altText:
      'Complete brand identity system for Fintech Corp including logo, colors, and typography',
    category: 'Brand Identity',
    software: ['Adobe Illustrator', 'Photoshop', 'InDesign'],
    objective:
      'Create a modern, trustworthy brand identity for a financial technology startup targeting global markets.',
    year: '2024',
    imageRatio: 'square',
  },
  {
    id: 2,
    title: 'Marketing Campaign Assets',
    client: 'LaunchGood',
    imageUrl: '/images/projects/graphic/the darkest side of social media 1.jpg',
    altText:
      'Marketing campaign assets including social media graphics, banners, and print materials',
    category: 'Marketing Design',
    software: ['Figma', 'After Effects', 'Photoshop'],
    objective:
      'Develop eye-catching marketing materials for a product launch campaign across digital and print channels.',
    year: '2024',
    imageRatio: 'portrait',
  },
  {
    id: 3,
    title: 'Mobile App UI/UX Redesign',
    client: 'ConnectApp',
    imageUrl: '/images/projects/graphic/characters/Girl.png',
    altText:
      'Mobile app user interface redesign showing before and after screens',
    category: 'UI/UX Design',
    software: ['Figma', 'ProtoPie', 'Adobe XD'],
    objective:
      'Redesign the user experience to improve engagement and reduce user drop-off rates by 35%.',
    year: '2023',
    imageRatio: 'landscape',
  },
  {
    id: 4,
    title: 'Sprite Social Media Ad',
    client: 'Sprite',
    imageUrl: '/images/projects/graphic/Post and mockups/ADS.png',
    altText:
      'Social media advertisement for a can of Sprite with a lime splash',
    category: 'Packaging Design', // Or 'Social Media Design'
    software: ['Illustrator', 'Dimension', 'Photoshop'],
    objective:
      'Create a vibrant and refreshing advertisement for a social media campaign.',
    year: '2023',
    imageRatio: 'square',
  },
  {
    id: 5,
    title: 'Hot Dog Stand Poster',
    client: 'Local Food Vendor',
    imageUrl: '/images/projects/graphic/Post and mockups/Hot dog mockup .png',
    altText: 'Poster advertisement for a hot dog stand, price $50',
    category: 'Marketing Design',
    software: ['Illustrator', 'Photoshop'],
    objective: 'Design an eye-catching poster for a street food vendor.',
    year: '2023',
    imageRatio: 'square',
  },
  {
    id: 6,
    title: 'Bass Tubes Product Ad',
    client: 'Mechaniq',
    imageUrl: '/images/projects/graphic/9.jpg',
    altText:
      'Advertisement for Mechaniq bass tubes with product specifications',
    category: 'Marketing Design', // Or 'Social Media Design'
    software: ['Photoshop', 'Illustrator'],
    objective: 'Design a product specification ad for car audio equipment.',
    year: '2023',
    imageRatio: 'landscape', // This matches the aspect ratio in your screenshot
  },
];

export const gameProjects: GameProject[] = [
  {
    id: 1,
    title: 'BlockShift',
    description:
      'A hyper-casual mobile puzzle game that achieved <strong>100k+ downloads</strong> in the first quarter with high user ratings. Features intuitive swipe controls and progressively challenging levels.',
    imageUrl: '/images/projects/game-blockshift.png',
    altText:
      "Colorful mobile puzzle game 'BlockShift' showing block-matching gameplay",
    platforms: ['mobile'],
    engine: 'Unity',
    genre: 'Puzzle',
    duration: '4 months',
    status: 'Completed',
    demoUrl: 'https://play.google.com/store/apps/details?id=com.ym.blockshift',
  },
  {
    id: 2,
    title: 'MathWiz Adventures',
    description:
      'An interactive 2D educational game for tablets that makes learning mathematics fun. Adopted by several school districts and featured in educational publications.',
    imageUrl: '/images/projects/game-mathwiz.png',
    altText:
      "Educational game 'MathWiz Adventures' showing character and math problems",
    platforms: ['mobile'],
    engine: 'Unity',
    genre: 'Educational',
    duration: '6 months',
    status: 'Completed',
  },
  {
    id: 3,
    title: 'ArchViz Explorer',
    description:
      'An immersive VR prototype allowing clients to walk through architectural designs before construction begins. Features real-time lighting and material changes.',
    imageUrl: '/images/projects/game-vr-archviz.png',
    altText: 'VR architectural visualization showing modern building interior',
    platforms: ['vr'],
    engine: 'Unreal Engine',
    genre: 'Simulation',
    duration: '3 months',
    status: 'Prototype',
  },
];

export const videoProjects: VideoProject[] = [
  {
    id: 1,
    title: 'SaaS Promotional Video Series',
    description:
      'Edited a series of product demo videos that increased website lead conversions by <strong>20%</strong>. Created multiple versions for different target audiences and platforms.',
    imageUrl: '/images/projects/video-promo.png',
    altText:
      'SaaS product promotional video showing software interface animations',
    type: 'Promo Video',
    client: 'CloudSoft Inc.',
    role: ['Video Editor', 'Motion Designer'],
    duration: '2:30',
    year: '2024',
    software: ['Premiere Pro', 'After Effects', 'DaVinci Resolve'],
  },
  {
    id: 2,
    title: 'Corporate Event Highlight Reel',
    description:
      "Produced a high-energy highlight video from a 3-day conference, used to promote next year's event. Featured speaker highlights, attendee interviews, and behind-the-scenes moments.",
    imageUrl: '/images/projects/video-event.png',
    altText:
      'Corporate event highlight reel showing speaker presentations and audience',
    type: 'Event Coverage',
    client: 'Tech Summit 2024',
    role: ['Lead Editor', 'Color Grader'],
    duration: '3:15',
    year: '2024',
    software: ['Final Cut Pro', 'After Effects', 'Photoshop'],
  },
  {
    id: 3,
    title: 'Tech Channel Content Package',
    description:
      'Provide ongoing weekly video editing for a popular tech channel, helping grow their subscriber base by <strong>150%</strong>. Includes thumbnails, animations, and sound design.',
    imageUrl: '/images/projects/video-youtube.png',
    altText:
      'YouTube tech review video with product unboxing and specifications',
    type: 'YouTube Content',
    client: 'TechReview Channel',
    role: ['Video Editor', 'Sound Designer'],
    duration: '12:45',
    year: '2023-2024',
    software: ['Premiere Pro', 'Audition', 'Photoshop'],
  },
];
