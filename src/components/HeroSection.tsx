import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
export function HeroSection() {
  return <section className="relative px-6 py-16 md:px-12 md:py-24 overflow-hidden">
      {/* Background Text Effect */}
      <div className="absolute inset-0 overflow-hidden opacity-10 select-none pointer-events-none">
        <div className="text-[180px] md:text-[220px] font-black leading-none tracking-tighter text-gray-700">
          <div className="whitespace-nowrap">UIUXDESIGN</div>
          <div className="whitespace-nowrap -mt-16">UIUXDESIGN</div>
          <div className="whitespace-nowrap -mt-16">UIUXDESIGN</div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16 relative z-10">
        <div className="md:w-1/2 pt-8">
          <div className="inline-flex items-center space-x-2 mb-6 bg-black/50 px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="text-sm text-gray-300">Available for work</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Creative designer transforming ideas into{' '}
            <span className="text-pink-500">'Functional'</span> Interfaces
          </h1>
          <div className="space-y-4 text-gray-300 mb-8">
            <p className="text-lg">
              I'm <strong>Victor Chibuzo</strong>, a product UI/UX/XI and Brand
              Identity designer with over 5+ years of experience.
            </p>
            <p>
              I specialize in creating impactful user interfaces that align user
              needs with business objectives.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#book-call" className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-full font-medium transition-colors">
              Book a call
            </a>
            <a href="#projects" className="flex items-center space-x-2 text-white bg-purple-900/50 hover:bg-purple-900/70 px-6 py-3 rounded-full font-medium transition-colors">
              <span>See all projects</span>
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="rounded-2xl overflow-hidden border border-gray-800">
            <img src="https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Designer workspace" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>;
}