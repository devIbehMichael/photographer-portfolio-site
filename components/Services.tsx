import React from 'react';
import { SERVICES } from '../constants';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ServiceItem: React.FC<{ service: any; index: number }> = ({ service, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group border-t border-neutral-800 py-12 transition-all duration-700 hover:bg-neutral-900/30"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-baseline md:items-center gap-6">
        <h3 className="text-3xl font-serif text-white group-hover:pl-4 transition-all duration-500 w-full md:w-1/3">
          {service.title}
        </h3>
        <p className="text-neutral-500 text-sm md:text-base font-light max-w-lg w-full md:w-1/3">
          {service.description}
        </p>
        <div className="flex items-center justify-between w-full md:w-auto gap-8">
          <span className="text-neutral-300 font-serif italic text-lg">{service.priceStart}+</span>
          <ArrowUpRight className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-premium-charcoal pt-32 pb-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 mb-16"
      >
        <h2 className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-4">Expertise</h2>
        <h3 className="text-4xl font-serif text-white">Services</h3>
      </motion.div>
      
      <div className="w-full border-b border-neutral-800">
        {SERVICES.map((service, index) => (
          <ServiceItem key={index} service={service} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Services;