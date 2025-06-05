import React from 'react';
export function BrandsSection() {
  return <section className="px-6 py-16 md:px-12 text-center overflow-hidden">
      <p className="text-gray-400 mb-2">
        Over the years, I've had the privilege of shaping the visual success of
        amazing brands
      </p>
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll-x gap-8 md:gap-12 mt-10 whitespace-nowrap">
          {/* Double the logos to create seamless loop */}
          {[...Array(2)].map((_, setIndex) => <div key={setIndex} className="flex items-center gap-8 md:gap-12">
              <div className="opacity-60 hover:opacity-100 transition-opacity">
                <img src="https://cdn.worldvectorlogo.com/logos/red-bull-1.svg" alt="Red Bull" className="h-8 w-auto" />
              </div>
              <div className="opacity-60 hover:opacity-100 transition-opacity">
                <img src="https://cdn.worldvectorlogo.com/logos/uber-15.svg" alt="Uber" className="h-8 w-auto" />
              </div>
              <div className="opacity-60 hover:opacity-100 transition-opacity">
                <img src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" alt="MongoDB" className="h-8 w-auto" />
              </div>
              <div className="opacity-60 hover:opacity-100 transition-opacity">
                <img src="https://cdn.worldvectorlogo.com/logos/john-deere-logo.svg" alt="John Deere" className="h-8 w-auto" />
              </div>
              <div className="opacity-60 hover:opacity-100 transition-opacity">
                <img src="https://cdn.worldvectorlogo.com/logos/swiggy.svg" alt="Swiggy" className="h-8 w-auto" />
              </div>
              <div className="opacity-60 hover:opacity-100 transition-opacity">
                <img src="https://cdn.worldvectorlogo.com/logos/bp-4.svg" alt="BP" className="h-8 w-auto" />
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}