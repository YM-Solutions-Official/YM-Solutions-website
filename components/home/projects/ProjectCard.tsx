import { Project } from '@/lib/types/projects';
import Image from 'next/image';
import Link from 'next/link';

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { title, description, imageUrl, tags, url } = project;

  const cardContent = (
    <>
      <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="text-xl font-bold text-corporate-navy mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4 grow">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-corporate-accent/20 text-corporate-accent px-2 py-1 rounded-full font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  );

  // Render as a link if URL is provided, otherwise just a div
  return url ? (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col"
    >
      {cardContent}
    </Link>
  ) : (
    <div className="bg-white p-4 rounded-xl shadow-md flex flex-col">
      {cardContent}
    </div>
  );
};

export default ProjectCard;
