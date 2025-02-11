import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import '../styles/LandingPage.css';

const LandingPage = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Happy Valentine's Day, Kaju",
        "My Love, My Heart",
        "You're the love of my life",
        "And I can't wait to make more memories with you"
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      startDelay: 500,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <motion.div 
      className="landing-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="landing-content">
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Happy Valentine's Day, Kaju
        </motion.h1>
        
        <motion.div
          className="typed-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <span ref={typedRef}></span>
        </motion.div>

        <motion.p
          className="love-message"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          Happy Valentine's Day, my dearest Kaju. You're the love of my life, 
          and I can't wait to make more memories with you. Every moment with you 
          is a treasure, and my heart beats only for you.
        </motion.p>
      </div>
      
      <div className="floating-hearts">
        {[...Array(15)].map((_, index) => (
          <motion.div
            key={index}
            className="heart"
            initial={{ y: '100vh', x: Math.random() * window.innerWidth }}
            animate={{ 
              y: '-100vh',
              x: Math.random() * window.innerWidth,
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'linear'
            }}
          >
            ❤️
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default LandingPage;
