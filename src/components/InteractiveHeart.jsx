import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/InteractiveHeart.css';

const InteractiveHeart = () => {
  const [activePromise, setActivePromise] = useState(null);
  
  const promises = [
    "I promise to make you feel loved every day",
    "I promise to be there for you in every moment",
    "I promise to always make you smile",
    "I promise to cherish every moment with you",
    "I promise to be your best friend forever",
  ];

  const handleHeartClick = (index) => {
    setActivePromise(activePromise === index ? null : index);
  };

  return (
    <section className="heart-section section">
      <h2 className="section-title">Promises from My Heart</h2>
      <div className="heart-container">
        <div className="interactive-heart">
          {promises.map((promise, index) => (
            <motion.div
              key={index}
              className={`heart-segment ${activePromise === index ? 'active' : ''}`}
              onClick={() => handleHeartClick(index)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence>
                {activePromise === index && (
                  <motion.div
                    className="promise-text"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{promise}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        <motion.p 
          className="heart-instruction"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Click on each part of the heart to reveal my promises to you ❤️
        </motion.p>
      </div>
    </section>
  );
};

export default InteractiveHeart;
