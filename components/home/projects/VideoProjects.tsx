import { VideoProject } from '@/lib/data/project-data';
import Image from 'next/image';

const VideoProjectsHome = ({ projects }: { projects: VideoProject[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div
          key={project.id}
          className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        >
          <div className="relative">
            <Image
              src={project.imageUrl}
              alt={project.altText}
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg
                className="w-12 h-12 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8.118v3.764a1 1 0 001.555.832l3.197-1.882a1 1 0 000-1.664l-3.197-1.882z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="p-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-corporate-accent">
              {project.type}
            </span>
            <h3 className="text-lg font-bold text-corporate-navy mt-1 mb-2">
              {project.title}
            </h3>
            <p
              className="text-gray-600 text-sm line-clamp-2"
              dangerouslySetInnerHTML={{ __html: project.description }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoProjectsHome;
