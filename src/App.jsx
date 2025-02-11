import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css';

// Components
import LandingPage from './components/LandingPage';
import InteractiveHeart from './components/InteractiveHeart';
import CountdownTimer from './components/CountdownTimer';
import PhotoGallery from './components/PhotoGallery';
import LoveLetter from './components/LoveLetter';
import Timeline from './components/Timeline';
import LoveQuiz from './components/LoveQuiz';
import MusicPlayer from './components/MusicPlayer';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for smooth entrance
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="loading-heart"
        >
          ❤️
        </motion.div>
      </div>
    );
  }

  return (
    <div className="app">
      <LandingPage />
      <InteractiveHeart />
      <CountdownTimer targetDate="2025-02-14T00:00:00" />
      <PhotoGallery />
      <LoveLetter />
      <Timeline />
      <LoveQuiz />
      <MusicPlayer />
      <Footer />
    </div>
  );
}

export default App;
