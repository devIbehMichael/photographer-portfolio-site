import React from 'react';
import { PORTFOLIO_IMAGES } from '../constants';
import { motion } from 'framer-motion';

const GalleryItem: React.FC<{ photo: any; index: number }> = ({ photo, index }) => {
  return (
    <motion.div 
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index % 3 * 0.1, ease: "easeOut" }}
      className="relative group overflow-hidden mb-8 break-inside-avoid"
    >
      <div className="overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          src={photo.url}
          alt={photo.title}
          className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
        />
      </div>
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-center p-4">
        <h3 className="text-2xl font-serif text-white italic mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          {photo.title}
        </h3>
        <p className="text-xs uppercase tracking-widest text-neutral-300 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
          {photo.category}
        </p>
      </div>
    </motion.div>
  );
};

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-premium-charcoal px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-serif text-white">Selected Works</h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-neutral-400 mt-4 md:mt-0 max-w-sm text-sm leading-relaxed"
          >
            A curated collection of moments frozen in time, exploring the boundaries between reality and art.
          </motion.p>
        </div>

        {/* Masonry Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {PORTFOLIO_IMAGES.map((photo, index) => (
            <GalleryItem key={photo.id} photo={photo} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;