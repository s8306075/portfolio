import Image from "next/image";
import Link from 'next/link';
import { Project } from '../types';
import { Folder } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const visibleTech = project.techStack.slice(0, 3);
  const remainingCount = project.techStack.length - 3;

  return (
    <article className="h-full">
      <Link href={`/portfolio/${project.id}`} className="group block h-full" aria-labelledby={`project-title-${project.id}`}>
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-taupe/20 h-full flex flex-col">
          {/* Image Container */}
          <div className="relative h-64 overflow-hidden bg-taupe">
            <Image 
              src={project.thumbnail} 
              alt={`Screenshot of ${project.title} project`}
              width={800}
              height={600}
              loading="lazy" 
              className="w-full h-full object-cover transform group-hover:scale-105 group-hover:rotate-1 transition-transform duration-700 ease-out"
            />
            {/* Category Badge with Icon */}
            <div className="absolute top-4 right-4 bg-slate-100/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-navy uppercase tracking-wider shadow-sm z-10 flex items-center gap-1.5">
              <Folder size={12} className="text-navy" aria-hidden="true" />
              {project.category}
            </div>
            {/* Subtle Overlay for depth on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 pointer-events-none" aria-hidden="true"></div>
          </div>

          {/* Content - Left Aligned */}
          <div className="p-8 flex flex-col flex-grow items-start text-left">
            <div className="w-fit mb-4">
              <h3 id={`project-title-${project.id}`} className="text-xl font-bold text-charcoal transition-colors">
                {project.title}
              </h3>
              
              <div className="w-full h-px mt-2 bg-slate-100 group-hover:bg-taupe/70 transition-colors duration-300" aria-hidden="true"></div>
            </div>
            
            <p className="text-umber leading-relaxed mb-6 flex-grow">
              {project.shortDesc}
            </p>
            
            <div className="mt-auto pt-4 border-t border-gray-100 w-full flex items-center justify-between">
               <div className="flex flex-wrap gap-2" aria-label="Technologies used">
                 {visibleTech.map((tech, i) => (
                   <span key={i} className="text-xs text-umber bg-taupe/30 px-2 py-1 rounded-md border border-taupe/20">
                     {tech.name}
                   </span>
                 ))}
                 {remainingCount > 0 && (
                   <span className="text-xs text-umber bg-taupe/30 px-2 py-1 rounded-md border border-taupe/20 font-medium" aria-label={`${remainingCount} more technologies`}>
                     +{remainingCount}
                   </span>
                 )}
               </div>

               {/* Hover Prompt */}
               <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 text-sm font-semibold text-navy/70 whitespace-nowrap ml-2" aria-hidden="true">
                  查看案例 →
               </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ProjectCard;