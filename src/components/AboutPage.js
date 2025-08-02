import React from 'react';

const AboutPage = () => {
  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background Circuits */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 border border-cyan-400 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-yellow-400 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Spline Animation */}
          <div className="w-full lg:w-1/2 h-[500px] relative">
            <spline-viewer 
              url="https://prod.spline.design/fJ2ptJKzT-sDkpfO/scene.splinecode" 
              background="transparent"
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0
              }}
            ></spline-viewer>
          </div>
          
          {/* Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                IETE Committee
              </span>
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              We are a passionate team of electronics enthusiasts dedicated to fostering innovation, 
              knowledge sharing, and technological advancement in the field of electronics and 
              telecommunications engineering.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-black bg-opacity-30 rounded-lg p-6 border border-cyan-400">
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Innovation</h3>
                <p className="text-gray-300">Pushing the boundaries of electronics technology through creative solutions and cutting-edge research.</p>
              </div>
              <div className="bg-black bg-opacity-30 rounded-lg p-6 border border-yellow-400">
                <h3 className="text-xl font-bold text-yellow-400 mb-3">Excellence</h3>
                <p className="text-gray-300">Maintaining the highest standards in engineering practices and professional development.</p>
              </div>
              <div className="bg-black bg-opacity-30 rounded-lg p-6 border border-green-400">
                <h3 className="text-xl font-bold text-green-400 mb-3">Collaboration</h3>
                <p className="text-gray-300">Building strong partnerships with industry leaders and academic institutions worldwide.</p>
              </div>
              <div className="bg-black bg-opacity-30 rounded-lg p-6 border border-purple-400">
                <h3 className="text-xl font-bold text-purple-400 mb-3">Learning</h3>
                <p className="text-gray-300">Providing continuous learning opportunities and skill development for our members.</p>
              </div>
            </div>
            <button className="btn-primary group">
              <span className="flex items-center gap-2">
                Learn More
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
