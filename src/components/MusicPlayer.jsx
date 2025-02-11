import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/MusicPlayer.css';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);
  const audioRef = useRef(null);
  const [volume, setVolume] = useState(0.5);

  const playlist = [
    {
      title: "Hey Minnale",
      artist: "Amaran",
      url: "./src/assets/audio1.mp3" // Replace with actual song URL
    },
    {
      title: "Jeene Laga Hoon",
      artist: "Ramaiya Vastavaiya",
      url: "./src/assets/audio2.mp3" // Replace with actual song URL
    },
    {
      title: "Zulfo se teri",
      artist: "LOVE",
      url: "./src/assets/audio3.mp3" // Replace with actual song URL
    }
  ];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.load();
      audioRef.current.play();
    }
  }, [currentSong, isPlaying]);

  const togglePlay = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const playNext = () => {
    setCurrentSong((prev) => (prev + 1) % playlist.length);
  };

  const playPrevious = () => {
    setCurrentSong((prev) => (prev - 1 + playlist.length) % playlist.length);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  return (
    <section className="music-section section">
      <h2 className="section-title">Our Love Songs</h2>
      
      <motion.div 
        className="music-player"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="song-info">
          <h3>{playlist[currentSong].title}</h3>
          <p>{playlist[currentSong].artist}</p>
        </div>

        <div className="controls">
          <button onClick={playPrevious} className="control-button">
            ⏮️
          </button>
          <button onClick={togglePlay} className="control-button play-button">
            {isPlaying ? '⏸️' : '▶️'}
          </button>
          <button onClick={playNext} className="control-button">
            ⏭️
          </button>
        </div>

        <div className="volume-control">
          <span>🔈</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="volume-slider"
          />
          <span>🔊</span>
        </div>

        <audio
          ref={audioRef}
          src={playlist[currentSong].url}
          onEnded={playNext}
        />

        <p className="music-message">
          These songs remind me of our beautiful moments together ❤️
        </p>
      </motion.div>
    </section>
  );
};

export default MusicPlayer;
