import React from 'react';
import { Header } from './components/Header';
import { BannerImages } from './components/BannerImages';
import { HeroSection } from './components/HeroSection';
import { BrandsSection } from './components/BrandsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { Footer } from './components/Footer';
export function App() {
  return <div className="bg-black text-white min-h-screen w-full">
      <Header />
      <BannerImages />
      <main>
        <HeroSection />
        <BrandsSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>;
}