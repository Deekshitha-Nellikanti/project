import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-[90vh] flex items-center bg-white">
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
        <div className="bg-[#f8f8f8] h-full"></div>
        <div className="hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Hero"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-xl">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
            Minimal Design.<br />Maximum Impact.
          </h1>
          <p className="text-lg text-gray-600 mb-8 font-light">
            Curated collection of premium essentials for the modern lifestyle.
          </p>
          <button className="group bg-black text-white px-8 py-4 rounded-none flex items-center space-x-2 hover:bg-gray-900 transition-colors">
            <span>Explore Collection</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;