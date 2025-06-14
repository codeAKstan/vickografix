import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  skills: string[];
}
export function ProjectCard({
  title,
  description,
  image,
  skills
}: ProjectCardProps) {
  return <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800 mb-12">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">Q</span>
            </div>
            <h3 className="font-semibold text-xl">{title}</h3>
          </div>
          <p className="text-gray-400 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {skills.map((skill, index) => <span key={index} className="bg-purple-900/50 text-purple-300 px-4 py-1 rounded-full text-xs">
                {skill}
              </span>)}
          </div>
       
           <a href="#projects" className="inline-flex items-center text-sm bg-purple-900/50 hover:bg-purple-900/70 px-4 py-3 rounded-full font-medium transition-colors" style={{ background: 'linear-gradient(to right, #29015A, #FF5003)' }}>
            <span>View project</span>
            <img src="/arrow.svg" alt="arrow" className="ml-1 w-4 h-4" />

          </a>
        </div>
        <div className="md:w-2/3">
          <div className="rounded-xl overflow-hidden border border-gray-800">
            <img src={image} alt={title} className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </div>;
}