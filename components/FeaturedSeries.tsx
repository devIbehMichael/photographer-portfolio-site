import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FEATURED_SERIES } from '../constants';
import { Series } from '../types';
import { X, ArrowRight } from 'lucide-react';

const SeriesModal: React.FC<{ series: Series; onClose: () => void }> = ({ series, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md overflow-y-auto"
    >
      <div className="relative w-full h-full p-4 md:p-8 overflow-y-scroll">
        <button
          onClick={onClose}
          className="fixed top-6 right-6 z-50 text-white/70 hover:text-white transition-colors bg-black/20 p-2 rounded-full backdrop-blur-sm"
        >
          <X size={32} />
        </button>

        <div className="max-w-7xl mx-auto pt-20 pb-20">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-16"
          >
            <p className="text-neutral-500 text-sm tracking-[0.3em] uppercase mb-4">{series.year} — Series</p>
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-6">{series.title}</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">{series.description}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {series.images.map((img, idx) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                className={`${img.aspect === 'landscape' ? 'md:col-span-2' : ''}`}
              >
                <img src={img.url} alt={img.title} className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                <p className="text-neutral-500 text-xs mt-2 uppercase tracking-wider text-right">{img.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const FeaturedSeries: React.FC = () => {
  const [selectedSeries, setSelectedSeries] = useState<Series | null>(null);

  return (
    <section id="featured-series" className="py-24 bg-premium-black border-t border-neutral-900">
      <div className="container mx-auto px-6 mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-12"
        >
          Curated Collections
        </motion.h2>

        <div className="flex flex-col gap-24">
          {FEATURED_SERIES.map((series, index) => (
            <motion.div 
              key={series.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="group relative cursor-pointer"
              onClick={() => setSelectedSeries(series)}
            >
              <div className="relative aspect-[21/9] overflow-hidden w-full">
                <motion.img
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  src={series.coverUrl}
                  alt={series.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                />
                
                {/* Overlay Text */}
                <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full bg-gradient-to-t from-black/90 to-transparent">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-neutral-400 text-xs tracking-[0.2em] uppercase mb-2">{series.year}</p>
                      <h3 className="text-4xl md:text-6xl font-serif text-white group-hover:translate-x-4 transition-transform duration-500">
                        {series.title}
                      </h3>
                    </div>
                    <div className="hidden md:flex items-center gap-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <span className="uppercase tracking-widest text-sm">View Series</span>
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedSeries && (
          <SeriesModal series={selectedSeries} onClose={() => setSelectedSeries(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default FeaturedSeries;