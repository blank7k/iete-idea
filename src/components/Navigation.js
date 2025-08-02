import React from 'react';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-20 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-white font-bold text-xl">IETE Committee</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-white hover:text-cyan-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
                Home
              </a>
              <a href="#about" className="text-white hover:text-cyan-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
                About
              </a>
              <a href="#projects" className="text-white hover:text-cyan-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
                Projects
              </a>
              <a href="#contact" className="text-white hover:text-cyan-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 