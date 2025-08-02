import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <HeroSection />
      <AboutPage />
      <ProjectsPage />
      <Footer />
    </div>
  );
}

export default App; 