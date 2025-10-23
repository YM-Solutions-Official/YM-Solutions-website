import { WebProject } from '@/lib/data/project-data';
import Image from 'next/image';
import Link from 'next/link';

const WebProjectsHome = ({ projects }: { projects: WebProject[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div
          key={project.id}
          className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100"
        >
          <div className="relative overflow-hidden">
            <Image
              src={project.imageUrl}
              alt={project.altText}
              width={400}
              height={250}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 right-4">
              <span className="bg-corporate-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                {project.category}
              </span>
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-lg font-bold text-corporate-navy mb-2 group-hover:text-corporate-accent transition-colors">
              {project.title}
            </h3>
            <p
              className="text-gray-600 text-sm mb-3 line-clamp-2"
              dangerouslySetInnerHTML={{ __html: project.description }}
            />
            <div className="flex flex-wrap gap-1 mb-3">
              {project.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link
              href={`/work/web/${project.id}`}
              className="text-corporate-accent text-sm font-semibold hover:text-corporate-navy transition-colors"
            >
              View Case Study →
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WebProjectsHome;
