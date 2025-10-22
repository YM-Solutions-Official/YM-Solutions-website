import Image from 'next/image';
import { Smartphone, Monitor, Code } from 'lucide-react'; // Example icons
import { GameProject } from '@/lib/data/project-data';

// A simple component to render platform icons
const PlatformIcons = ({
  platforms,
}: {
  platforms: ('mobile' | 'desktop' | 'vr')[];
}) => (
  <div className="flex items-center space-x-2">
    {platforms.includes('mobile') && (
      <span title="Mobile">
        <Smartphone className="w-5 h-5 text-gray-400" />
      </span>
    )}
    {platforms.includes('desktop') && (
      <span title="Desktop">
        <Monitor className="w-5 h-5 text-gray-400" />
      </span>
    )}
    {platforms.includes('vr') && (
      <span title="VR">
        <Code className="w-5 h-5 text-gray-400" />
      </span>
    )}
  </div>
);

const GameProjects = ({ projects }: { projects: GameProject[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-white rounded-xl shadow-lg overflow-hidden group"
        >
          <div className="relative">
            <Image
              src={project.imageUrl}
              alt={project.altText}
              width={800}
              height={500}
              className="w-full h-56 object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-corporate-navy">
                {project.title}
              </h3>
              <span className="bg-corporate-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                {project.engine}
              </span>
            </div>
            <p
              className="text-gray-600 mb-4 text-sm"
              dangerouslySetInnerHTML={{ __html: project.description }}
            />
            <div className="border-t pt-3 flex justify-between items-center">
              <p className="text-xs text-gray-500 font-semibold">PLATFORMS</p>
              <PlatformIcons platforms={project.platforms} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameProjects;
