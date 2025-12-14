import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-premium-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <motion.img 
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 1 }}
                src="https://picsum.photos/800/1000?grayscale" 
                alt="Photographer Profile" 
                className="w-full h-full object-cover"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="absolute inset-0 border border-white/10 m-4 pointer-events-none"
              ></motion.div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <h4 className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-6">The Artist</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
              Obsessed with light, <br/>
              <span className="text-neutral-500">devoted to shadow.</span>
            </h2>
            <div className="space-y-6 text-neutral-400 font-light leading-relaxed">
              <p>
                Photography is not just about capturing what you see, but interpreting what you feel. 
                My journey began in the darkroom, understanding the chemistry of contrast and the weight of grain.
              </p>
              <p>
                Today, I work with brands and individuals who seek more than just an image—they seek a legacy. 
                My work has been featured in leading design publications and exhibited in galleries across Europe and Asia.
              </p>
              <p>
                I believe in the beauty of imperfection and the cinematic quality of everyday life.
              </p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, pathLength: 0 }}
              whileInView={{ opacity: 1, pathLength: 1 }}
              transition={{ delay: 0.5, duration: 1.5 }}
              className="mt-12"
            >
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Signature_sample.svg/1200px-Signature_sample.svg.png" className="h-12 invert opacity-70" alt="Signature" />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;