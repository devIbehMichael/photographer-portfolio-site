import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-premium-black py-8 border-t border-neutral-900">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600 uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} Lumina Photography.</p>
        <p className="mt-2 md:mt-0">Designed with passion.</p>
      </div>
    </footer>
  );
};

export default Footer;