interface ProjectCardProps {
  title: string;
  status: string;
  tech: string[];
  description: string;
  link: string;
  preview?: string;
}

export default function ProjectCard({
  title,
  status,
  tech,
  description,
  link,
  preview,
}: ProjectCardProps) {
  return (
    <div className="p-6 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-xl font-medium text-gray-900">{title}</h2>
        <span
          className={`px-3 py-1 rounded-full text-sm ${status === 'Completed'
              ? 'bg-green-100 text-green-800'
              : 'bg-yellow-100 text-yellow-800'
            }`}
        >
          {status}
        </span>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((techItem) => (
          <span
            key={techItem}
            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
          >
            {techItem}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-600 hover:text-gray-900"
        >
          View Source →
        </a>
        {preview && (
          <a
            href={preview}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Live Preview →
          </a>
        )}
      </div>
    </div>
  );
}
