import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-premium-black relative">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-8">Let's Create Together</h2>
          <p className="text-neutral-400 text-lg font-light mb-12 max-w-xl mx-auto">
            Available for commissions worldwide. Currently booking for late 2024.
          </p>
          
          <motion.a 
            href="mailto:hello@lumina.com"
            whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#000000" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="inline-block border border-white/20 px-12 py-4 text-white uppercase tracking-widest text-sm"
          >
            Get in Touch
          </motion.a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left border-t border-neutral-800 pt-16"
        >
          <div>
            <h4 className="text-white font-serif text-xl mb-4">Studio</h4>
            <p className="text-neutral-500 font-light">
              1209 Arts District<br/>
              Los Angeles, CA
            </p>
          </div>
          <div>
            <h4 className="text-white font-serif text-xl mb-4">Socials</h4>
            <div className="flex flex-col space-y-2">
              <a href="#" className="text-neutral-500 hover:text-white transition-colors">Instagram</a>
              <a href="#" className="text-neutral-500 hover:text-white transition-colors">Behance</a>
              <a href="#" className="text-neutral-500 hover:text-white transition-colors">Twitter</a>
            </div>
          </div>
          <div>
             <h4 className="text-white font-serif text-xl mb-4">Phone</h4>
             <p className="text-neutral-500 font-light">+1 (555) 000-0000</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;