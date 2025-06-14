import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
export function Header() {
  return <header className="px-6 py-4 md:px-12 flex items-center justify-between">
    <div className="flex items-center">
      <div className="w-25 h-25 rounded-full flex items-center justify-center">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-15 h-14 object-contain"
        />
      </div>
    </div>
    <nav className="hidden md:flex items-center space-x-8">
      <div className="flex items-center space-x-8">
        <a href="#projects" className="font-bold text-white relative">
          Projects
          <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
        </a>
        <a href="#about" className="font-bold text-gray-400 hover:text-white transition-colors">
          About
        </a>
        <a href="#ui-ux" className="font-bold text-gray-400 hover:text-white transition-colors">
          UI/UX
        </a>
        <a href="#branding" className="font-bold text-gray-400 hover:text-white transition-colors">
          Branding
        </a>
      </div>
    </nav>
    <div className="flex items-center space-x-4">
      <a href="#resume" className="hidden md:block font-medium text-white hover:text-gray-200 text-2xl transition-colors bg-white/10 backdrop-blur-[55px] px-4 py-2 rounded-full shadow-[10px_10px_15px_rgba(255,255,255,0.05)]" style={{ boxShadow: '10px 10px 15px 0px rgba(255,255,255,0.1) inset, 0px -5px 10px 0px rgba(66,85,255,0.1) inset' }}>
        My Resume
      </a>
      <a href="#contact" className="text-white px-4 py-2 rounded-full flex items-center text-2xl font-medium transition-colors" style={{ background: 'linear-gradient(to right, #29015A, #FF5003)' }}>
        Contact Me
        <img src="/arrow.svg" alt="arrow" className="ml-1 w-4 h-4" />
      </a>
    </div>
  </header>;
}