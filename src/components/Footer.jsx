import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <motion.div
        className="footer-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="footer-message">
          <p>Forever and always, Kaju.</p>
          <p>I love you more than words can express.</p>
        </div>
        
        <motion.div 
          className="heart-icon"
          animate={{ 
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          ❤️
        </motion.div>
        
        <p className="copyright">
          Made with love for my dearest Kaju
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
