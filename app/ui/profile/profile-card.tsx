interface ProfileCardProps {
  title: string;
  subtitle: string;
  date: string;
  link: string;
  image?: React.ReactNode;
  children: React.ReactNode;
}

export function ProfileCard({
  title,
  subtitle,
  date,
  link,
  image,
  children,
}: ProfileCardProps) {


  return (
    <a href={link}>
      <div className="p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
        <div className="flex gap-4">
          {image && <div className="w-12 h-12 flex-shrink-0 self-center">{image}</div>}
          <div className="min-w-0 flex-grow">
            <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:gap-4 mb-2">
              <div className="min-w-0">
                <h3 className="font-medium">{title}</h3>
                <p className="text-gray-600 mt-1">{subtitle}</p>
              </div>
              <p className="text-sm text-gray-500 whitespace-nowrap flex-shrink-0">{date}</p>
            </div>
            <div className="text-gray-600 text-sm mt-2">{children}</div>
          </div>
        </div>
      </div>
    </a>
  );
}
