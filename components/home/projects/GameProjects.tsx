import { GameProject } from '@/lib/data/project-data';
import Image from 'next/image';
import { Smartphone, Monitor, Code } from 'lucide-react';

const PlatformIcons = ({
  platforms,
}: {
  platforms: ('mobile' | 'desktop' | 'vr')[];
}) => (
  <div className="flex items-center space-x-1">
    {platforms.includes('mobile') && (
      <Smartphone className="w-4 h-4 text-gray-400" />
    )}
    {platforms.includes('desktop') && (
      <Monitor className="w-4 h-4 text-gray-400" />
    )}
    {platforms.includes('vr') && <Code className="w-4 h-4 text-gray-400" />}
  </div>
);

const GameProjectsHome = ({ projects }: { projects: GameProject[] }) => {
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
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-bold text-corporate-navy">
                {project.title}
              </h3>
              <span className="bg-corporate-accent text-white text-xs font-bold px-2 py-1 rounded">
                {project.engine}
              </span>
            </div>
            <p
              className="text-gray-600 text-sm mb-3 line-clamp-2"
              dangerouslySetInnerHTML={{ __html: project.description }}
            />
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500 font-semibold">
                {project.genre}
              </span>
              <PlatformIcons platforms={project.platforms} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameProjectsHome;
