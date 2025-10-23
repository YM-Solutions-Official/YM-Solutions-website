import { DesignProject } from '@/lib/data/project-data';
import Image from 'next/image';

const DesignProjectsHome = ({ projects }: { projects: DesignProject[] }) => {
  console.log(projects);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {projects.map((project) => (
        <div
          key={project.id}
          className="group relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
        >
          <Image
            src={project.imageUrl}
            alt={project.altText}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
            <div className="text-white">
              <h3 className="text-sm font-semibold leading-tight">
                {project.title}
              </h3>
              <p className="text-xs text-gray-300 mt-1">{project.client}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DesignProjectsHome;
