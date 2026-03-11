"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const products = [
  {
    title: "Stabilized Asset Notes",
    description: "Secured notes on stabilized assets, prioritizing capital preservation and current income through defined payment priority."
  },
  {
    title: "Semi-Stabilized Asset Notes",
    description: "Senior notes on assets in refinance or repositioning phases, offering higher returns in exchange for defined execution and timing risk."
  },
  {
    title: "Construction Notes",
    description: "Notes for construction or stabilization completion, with returns reflecting construction and delivery risk tied to defined milestones."
  }
];

export default function ProductStructures() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    // Removed min-h-[600px] and let it naturally size, making it much more compact
    <section className="grid grid-cols-1 lg:grid-cols-2 bg-[#013220]">
      {/* Image Container */}
      <div className="relative w-full h-[300px] lg:h-full overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2070&q=80" 
          alt="Institutional Real Estate Team" 
          fill
          className="object-cover object-center grayscale-[15%] contrast-[105%] brightness-[95%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A3F28]/40 to-transparent mix-blend-multiply"></div>
      </div>
      
      {/* Content Container - Reduced vertical padding significantly */}
      <div className="flex flex-col justify-center py-12 px-8 lg:py-[60px] lg:px-[60px]">
        <h2 className="text-3xl lg:text-4xl font-medium font-serif text-white mb-3">
          Sylvan's Products
        </h2>
        <p className="text-base text-gray-300 mb-8 leading-relaxed">
          Each structure serves a distinct purpose while operating under the same contractual, reporting, and disclosure framework.
        </p>
        
        <div className="flex flex-col">
          {products.map((product, index) => {
            const isActive = activeIndex === index;
            
            return (
              <div 
                key={index} 
                className={`border-b border-white/15 ${index === 0 ? 'border-t' : ''}`}
              >
                {/* Reduced padding inside the accordion header */}
                <div 
                  className="py-4 flex justify-between items-center cursor-pointer group"
                  onClick={() => setActiveIndex(index)}
                >
                  <h3 className={`text-lg font-medium font-sans transition-colors duration-300 ${isActive ? 'text-[#D9B44A]' : 'text-white'}`}>
                    {product.title}
                  </h3>
                  <span className={`text-xl font-light transition-all duration-300 ${isActive ? 'rotate-45 text-[#D9B44A]' : 'text-white'}`}>
                    +
                  </span>
                </div>
                
                <div 
                  className={`overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
                    isActive ? 'max-h-[150px] pb-5' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-400 text-[0.95rem] leading-[1.6] max-w-[95%] lg:max-w-[90%]">
                    {product.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}