import React from 'react';

const ProjectsPage = () => {

  const projects = [
    {
      title: "Smart Home Automation",
      description: "IoT-based home automation system with voice control and mobile app integration.",
      tech: ["Arduino", "ESP32", "React Native", "Firebase"],
      color: "cyan"
    },
    {
      title: "PCB Design & Manufacturing",
      description: "Custom circuit board design and prototyping for various electronic applications.",
      tech: ["KiCad", "Eagle", "PCB Manufacturing", "SMT Assembly"],
      color: "yellow"
    },
    {
      title: "Drone Control System",
      description: "Autonomous drone with computer vision and GPS navigation capabilities.",
      tech: ["Python", "OpenCV", "Raspberry Pi", "Flight Controller"],
      color: "purple"
    },
    {
      title: "AI-Powered Robotics",
      description: "Machine learning algorithms for robotic arm control and object recognition.",
      tech: ["TensorFlow", "ROS", "Computer Vision", "Python"],
      color: "green"
    },
    {
      title: "Energy Management System",
      description: "Smart grid monitoring and renewable energy optimization platform.",
      tech: ["IoT", "Data Analytics", "Cloud Computing", "Machine Learning"],
      color: "red"
    },
    {
      title: "Digital Signal Processing",
      description: "Real-time audio and signal processing for communication systems.",
      tech: ["MATLAB", "DSP", "FPGA", "Verilog"],
      color: "blue"
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">

      {/* Background Circuits */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 border border-cyan-400 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-yellow-400 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Explore our innovative electronics projects that push the boundaries of technology and engineering.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-${project.color}-900/20 to-${project.color}-700/20 backdrop-blur-sm border border-${project.color}-500/30 rounded-xl p-6 hover:scale-105 transition-all duration-300 group cursor-pointer`}
            >
              <div className={`w-12 h-12 bg-gradient-to-br from-${project.color}-400 to-${project.color}-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-blue-200 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`px-3 py-1 bg-${project.color}-500/20 text-${project.color}-300 text-sm rounded-full border border-${project.color}-500/30`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage; 