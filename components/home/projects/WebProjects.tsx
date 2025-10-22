import { WebProject } from '@/lib/data/project-data';
import Image from 'next/image';

const WebProjects = ({ projects }: { projects: WebProject[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-2xl hover:-translate-y-1"
        >
          <Image
            src={project.imageUrl}
            alt={project.altText}
            width={800}
            height={500}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold text-corporate-navy mb-2">
              {project.title}
            </h3>
            <p
              className="text-gray-600 mb-4 text-sm"
              dangerouslySetInnerHTML={{ __html: project.description }}
            />
            <div>
              {project.tags.map((tag, index) => (
                <span
                  key={tag}
                  className={`inline-block text-white text-xs font-semibold px-3 py-1 rounded-full ${index > 0 ? 'ml-2' : ''} ${
                    index % 2 === 0
                      ? 'bg-corporate-accent'
                      : 'bg-corporate-navy'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WebProjects;
