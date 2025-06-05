import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
export function Footer() {
  return <footer className="px-6 py-16 md:px-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">More than design</h2>
      <p className="text-gray-400 max-w-3xl mx-auto mb-12">
        We elevate brands with intuitive website and digital product (SaaS) user
        interface (UI/UX) crafted to engage users and elevate brand product.
        From clean, modern logo, a calming color palette and minimal yet bold
        typography, social media templates, marketing flyers, brochures,
        business cards and lots more. We also redesign existing website for
        better UX, making it more user friendly, mobile responsive and visually
        aligned with the brand. We specialize in making brands stand out from
        the rest of its competition, significantly, ensuring brand product not
        only looks stunning but functions flawlessly and seamlessly.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a href="#contact" className="inline-flex items-center text-gray-300 hover:text-white transition-colors">
          Reach out via mail
        </a>
        <a href="#projects" className="inline-flex items-center bg-purple-900/50 hover:bg-purple-900/70 text-white px-6 py-2 rounded-full transition-colors">
          See all projects <ArrowRightIcon className="ml-1 w-4 h-4" />
        </a>
      </div>
    </footer>;
}