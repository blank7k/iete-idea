import React from 'react';

const HeroSection = () => {
  const handleExploreClick = () => {
    // Scroll to next section or navigate
    const nextSection = document.querySelector('.h-screen');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleJoinUsClick = () => {
    // Handle join us action
    alert('Join Us functionality will be implemented here!');
  };

    return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center overflow-hidden">
      {/* Animated Background Circuits */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Left Circuit Board */}
        <div className="absolute left-0 top-0 w-1/3 h-full opacity-20">
          <svg className="w-full h-full" viewBox="0 0 400 800">
            <defs>
              <pattern id="leftGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="cyan" strokeWidth="1" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#leftGrid)" />
            
            {/* Left Circuit Paths */}
            <path
              d="M 50 100 L 150 100 L 150 200 L 250 200 L 250 300 L 350 300"
              stroke="cyan"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
              strokeDashoffset="0"
              style={{
                animation: 'dash 3s linear infinite'
              }}
            />
            
            <path
              d="M 100 400 L 200 400 L 200 500 L 300 500"
              stroke="cyan"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="3,3"
              strokeDashoffset="0"
              style={{
                animation: 'dash 2.5s linear infinite reverse'
              }}
            />
            
            {/* Left Circuit Nodes */}
            <circle cx="150" cy="100" r="3" fill="cyan" className="animate-ping" />
            <circle cx="250" cy="200" r="3" fill="cyan" className="animate-ping" style={{ animationDelay: '0.5s' }} />
            <circle cx="350" cy="300" r="3" fill="cyan" className="animate-ping" style={{ animationDelay: '1s' }} />
            <circle cx="200" cy="400" r="2" fill="cyan" className="animate-ping" style={{ animationDelay: '0.3s' }} />
            <circle cx="300" cy="500" r="2" fill="cyan" className="animate-ping" style={{ animationDelay: '0.8s' }} />
          </svg>
        </div>
        
        {/* Right Circuit Board */}
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-20">
          <svg className="w-full h-full" viewBox="0 0 400 800">
            <defs>
              <pattern id="rightGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="yellow" strokeWidth="1" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#rightGrid)" />
            
            {/* Right Circuit Paths */}
            <path
              d="M 50 150 L 150 150 L 150 250 L 250 250 L 250 350 L 350 350"
              stroke="yellow"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
              strokeDashoffset="0"
              style={{
                animation: 'dash 2.5s linear infinite reverse'
              }}
            />
            
            <path
              d="M 100 450 L 200 450 L 200 550 L 300 550"
              stroke="yellow"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="3,3"
              strokeDashoffset="0"
              style={{
                animation: 'dash 3s linear infinite'
              }}
            />
            
            {/* Right Circuit Nodes */}
            <circle cx="150" cy="150" r="3" fill="yellow" className="animate-ping" />
            <circle cx="250" cy="250" r="3" fill="yellow" className="animate-ping" style={{ animationDelay: '0.5s' }} />
            <circle cx="350" cy="350" r="3" fill="yellow" className="animate-ping" style={{ animationDelay: '1s' }} />
            <circle cx="200" cy="450" r="2" fill="yellow" className="animate-ping" style={{ animationDelay: '0.3s' }} />
            <circle cx="300" cy="550" r="2" fill="yellow" className="animate-ping" style={{ animationDelay: '0.8s' }} />
          </svg>
        </div>
        
        {/* Floating Electronics Chips */}
        <div className="absolute top-20 left-1/4 w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg opacity-30 animate-bounce" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-1/4 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-lg opacity-30 animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-60 left-1/3 w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg opacity-30 animate-bounce" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-80 right-1/3 w-7 h-7 bg-gradient-to-br from-green-400 to-emerald-400 rounded-lg opacity-30 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-100 left-1/2 w-9 h-9 bg-gradient-to-br from-red-400 to-pink-400 rounded-lg opacity-30 animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Data Streams */}
        <div className="absolute top-32 left-1/4 text-xs text-cyan-300 font-mono animate-pulse">1010</div>
        <div className="absolute top-52 right-1/4 text-xs text-yellow-300 font-mono animate-pulse" style={{ animationDelay: '0.5s' }}>1101</div>
        <div className="absolute top-72 left-1/3 text-xs text-purple-300 font-mono animate-pulse" style={{ animationDelay: '1s' }}>0110</div>
        <div className="absolute top-92 right-1/3 text-xs text-green-300 font-mono animate-pulse" style={{ animationDelay: '1.5s' }}>1001</div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-slide-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              IETE Committee
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-blue-200 mb-8 font-light">
            Innovation. Circuitry. Excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleExploreClick}
              className="btn-primary group"
            >
              <span className="flex items-center gap-2">
                Explore
                <svg 
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            
            <button
              onClick={handleJoinUsClick}
              className="btn-secondary group"
            >
              <span className="flex items-center gap-2">
                Join Us
                <svg 
                  className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="scroll-indicator">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
        <p className="text-white text-sm mt-2 text-center opacity-70">Scroll to explore</p>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-purple-400 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-cyan-400 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default HeroSection; 