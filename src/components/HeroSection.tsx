import React from 'react';
import { Button } from "@/components/ui/button";
import BgImg from "../assets/efmainc.jpg"; // Example image, replace with your own

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative h-[90vh] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" 
        style={{ 
          backgroundImage: `url(${BgImg})`,
          filter: "brightness(0.5)"
        }}>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            Fresh From Our <span className="text-yellow-300">Farm</span> To Your Table
          </h1>
          <p className="text-xl mb-8 text-white opacity-90">
            Experience the true taste of nature with our organically grown produce & livestock.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="btn-primary bg-farm-green text-white px-8 py-3 text-lg">
              Explore Our Products
            </Button>
            <Button variant="outline" className="bg-transparent border-2 border-white text-white px-8 py-3 text-lg hover:bg-yellow-300 hover:text-farm-green transition-all">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white">
        <span className="text-sm mb-2">Scroll Down</span>
        <svg className="animate-bounce w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
