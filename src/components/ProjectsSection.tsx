import React from 'react';
import { ProjectCard } from './ProjectCard';
import { ArrowRightIcon } from 'lucide-react';
export function ProjectsSection() {
  return <section className="px-6 py-16 md:px-12">
    <div className="inline-flex items-center space-x-2 mb-6 bg-black/50 px-3 py-1.5 rounded-full relative before:absolute before:inset-0 before:rounded-full before:p-[0.5px] before:bg-gradient-to-r before:from-[#FFE3E9CC] before:via-[#FFE3E91A] before:to-[#FFE3E900] before:-z-10">
      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
      <span className="text-sm text-gray-300">Projects</span>
    </div>
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
      Raw ideas. Real brands.
      <br />
      Real users. Real results.
    </h2>
    <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16">
      Every project is a step in my mission to design with purpose,
      highlighting my journey in shaping bold identities and seamless digital
      experiences.
    </p>
    <div className="space-y-12">
      <ProjectCard title="Quiz to Cash" description="Turn your time into earnings! Watch videos, complete surveys, and engage with content to earn real crypto rewards; fast, easy, and transparent." image="https://images.unsplash.com/photo-1579869847514-7c1a19d2d2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" skills={['Website User Interface design', 'Logo Design', 'Social Media design', 'User experience design']} />
      <ProjectCard title="Luxura" description="Where Comfort Meets Convenience - a premium hotel booking platform with intuitive user experience and elegant design." image="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" skills={['Website User Interface design', 'Logo Design', 'Social Media design', 'User experience design']} />
      <ProjectCard title="Quiz to Cash 2.0" description="Turn your time into earnings! Watch videos, complete surveys, and engage with content to earn real crypto rewards; fast, easy, and transparent." image="https://images.unsplash.com/photo-1579869847514-7c1a19d2d2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" skills={['Website User Interface design', 'Logo Design', 'Social Media design', 'User experience design']} />
    </div>
  </section>;
}