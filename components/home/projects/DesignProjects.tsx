import { DesignProject } from '@/lib/data/project-data';
import Image from 'next/image';

const DesignProjects = ({ projects }: { projects: DesignProject[] }) => {
  return (
    // Masonry-style grid for visual focus
    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
      {projects.map((project) => (
        <div
          key={project.id}
          className="group relative overflow-hidden rounded-xl shadow-lg break-inside-avoid"
        >
          <Image
            src={project.imageUrl}
            alt={project.altText}
            width={800}
            height={800} // Using a square-ish aspect ratio works well for masonry
            className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <h3 className="text-white text-2xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              {project.title}
            </h3>
            <p
              className="text-corporate-accent text-lg font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
              style={{ transitionDelay: '100ms' }}
            >
              {project.client}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DesignProjects;
