import React, { useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax effect for the background image
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.3]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img
          src="https://picsum.photos/1920/1080?grayscale"
          alt="Cinematic Background"
          className="w-full h-full object-cover scale-110" // Initial scale for better parallax coverage
        />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto overflow-hidden">
        <motion.p 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
          className="text-sm md:text-base tracking-[0.3em] uppercase text-neutral-300 mb-6"
        >
          Visual Storyteller
        </motion.p>
        
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif text-white leading-tight mb-8"
          >
            Capturing the <br /> <span className="italic font-light text-premium-silver">Unspoken</span>
          </motion.h1>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.a 
          href="#gallery" 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-white opacity-60 hover:opacity-100 transition-opacity block"
        >
          <ArrowDown size={32} strokeWidth={1} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;