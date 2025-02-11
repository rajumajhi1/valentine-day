import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import '../styles/LoveLetter.css';

const LoveLetter = () => {
  const [showReply, setShowReply] = useState(false);
  const [reply, setReply] = useState('');
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        `My dearest Kaju,

        From the moment you entered my life, everything became more beautiful, more meaningful, and more complete. Your smile brightens my darkest days, and your love gives me strength I never knew I had.

        Every moment spent with you is a treasure I hold dear to my heart. Your kindness, your wit, and your beautiful soul make me fall in love with you more and more each day.

        You're not just my girlfriend; you're my best friend, my confidante, and my greatest adventure. I promise to always be there for you, to support your dreams, and to love you unconditionally.

        Happy Valentine's Day, my love. Here's to many more beautiful moments together.

        Forever yours,
        ❤️`
      ],
      typeSpeed: 40,
      showCursor: true,
      cursorChar: '|',
      loop: false
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const handleReplySubmit = (e) => {
    e.preventDefault();
    setShowReply(true);
  };

  return (
    <section className="letter-section section">
      <h2 className="section-title">My Love Letter to You</h2>
      
      <motion.div 
        className="letter-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="letter-content">
          <span ref={typedRef}></span>
        </div>

        {!showReply ? (
          <motion.div 
            className="reply-form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 15 }}
          >
            <h3>Write Back to Me</h3>
            <form onSubmit={handleReplySubmit}>
              <textarea
                value={reply}
                onChange={(e) => setReply(e.target.value)}
                placeholder="Type your message here..."
                rows="5"
              />
              <button type="submit" className="reply-button">
                Send Your Love ❤️
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div 
            className="reply-success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Message Sent! ❤️</h3>
            <p>Your love has been received!</p>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default LoveLetter;
