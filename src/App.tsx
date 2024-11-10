import React from 'react';
import Hero from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { Projects } from './components/Projects';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <CustomCursor />
      <ScrollToTop />
      <Hero />
      <ServicesSection />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;