import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
export function Header() {
  return <header className="px-6 py-4 md:px-12 flex items-center justify-between">
      <div className="flex items-center">
        <div className="w-15 h-15 rounded-full flex items-center justify-center">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-10 h-10 object-contain"
          />
        </div>
      </div>
      <nav className="hidden md:flex items-center space-x-8">
        <div className="flex items-center space-x-8">
          <a href="#projects" className="font-medium text-white relative">
            Projects
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
          </a>
          <a href="#about" className="font-medium text-gray-400 hover:text-white transition-colors">
            About
          </a>
          <a href="#ui-ux" className="font-medium text-gray-400 hover:text-white transition-colors">
            UI/UX
          </a>
          <a href="#branding" className="font-medium text-gray-400 hover:text-white transition-colors">
            Branding
          </a>
        </div>
      </nav>
      <div className="flex items-center space-x-4">
        <a href="#resume" className="hidden md:block font-medium text-white hover:text-gray-200 transition-colors">
          My Resume
        </a>
        <a href="#contact" className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-full flex items-center text-sm font-medium transition-colors">
          Contact Me
          <ArrowRightIcon className="ml-1 w-4 h-4" />
        </a>
      </div>
    </header>;
}