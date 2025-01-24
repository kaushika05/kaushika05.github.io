interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  tech: string[];
}

export const ProjectCard = ({ title, description, image, link, tech }: ProjectCardProps) => {
  return (
    <div className="w-full h-[500px] group">
      <div className="relative w-full h-full bg-dark rounded-xl overflow-hidden
        border-2 border-magenta transition-all duration-300 ease-in-out
        group-hover:border-neon group-hover:shadow-[0_0_30px_rgba(0,255,221,0.3)]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300">
          <h3 className="text-2xl font-comic text-sunny mb-4">{title}</h3>
          <p className="text-white font-comic mb-4 text-sm line-clamp-3">
            {description}
          </p>
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {tech.map((t) => (
                <span key={t} className="px-2 py-1 bg-dark/80 border border-neon rounded-full text-xs text-neon">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <a
            href={link}
            className="inline-block px-6 py-2 bg-magenta text-white rounded-lg
            hover:bg-neon hover:text-dark transition-colors duration-300"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};