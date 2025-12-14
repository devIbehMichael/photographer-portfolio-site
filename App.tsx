import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import FeaturedSeries from './components/FeaturedSeries';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

const App: React.FC = () => {
  // Simple loading state for initial fade in
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate asset loading
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={`relative min-h-screen bg-premium-black transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      <CustomCursor />
      <Navbar />
      <Hero />
      <FeaturedSeries />
      <Gallery />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;