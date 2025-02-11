import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/PhotoGallery.css';

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Add your photos to the public/photos directory and list them here
  const photos = [
    {
      id: 1,
      url: './assets/img1.jpeg', // Place your photo in public/photos/your-photo-1.jpg
      caption: 'When i saw you, first sight love🤩😚!!'
    },
    {
      id: 2,
      url: './assets/img2.jpeg', // Place your photo in public/photos/your-photo-2.jpg
      caption: 'From this photo to FOREVER🤗🥰 !'
    },
    {
      id: 3,
      url: './assets/img3.jpeg', // Place your photo in public/photos/your-photo-2.jpg
      caption: 'My cuty baby😘'
    },
    {
      id: 4,
      url: './assets/img4.jpeg', // Place your photo in public/photos/your-photo-2.jpg
      caption: 'Only LOVE🙌❤'
    },
    {
      id: 5,
      url: './assets/img5.jpeg', // Place your photo in public/photos/your-photo-2.jpg
      caption: 'Happy Baby 🤞💕'
    },
    {
      id: 6,
      url: './assets/img6.jpeg', // Place your photo in public/photos/your-photo-2.jpg
      caption: 'I love You too 😍'
    },
    {
      id: 7,
      url: './assets/img7.jpeg', // Place your photo in public/photos/your-photo-2.jpg
      caption: 'Shadowww😘'
    },
    {
      id: 8,
      url: './assets/img8.jpeg', // Place your photo in public/photos/your-photo-2.jpg
      caption: 'Only U and ME❤😍'
    },
    {
      id: 9,
      url: './assets/img9.jpeg', // Place your photo in public/photos/your-photo-2.jpg
      caption: 'Two Babies😍'
    }
    
  ];

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  return (
    <section className="gallery-section section">
      <h2 className="section-title">Our Beautiful Memories</h2>
      
      <motion.div 
        className="photo-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {photos.map((photo) => (
          <motion.div
            key={photo.id}
            className="photo-item"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handlePhotoClick(photo)}
          >
            <img src={photo.url} alt={photo.caption} loading="lazy" />
            <div className="photo-overlay">
              <p>{photo.caption}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              onClick={e => e.stopPropagation()}
            >
              <img src={selectedPhoto.url} alt={selectedPhoto.caption} />
              <p className="modal-caption">{selectedPhoto.caption}</p>
              <button 
                className="modal-close"
                onClick={() => setSelectedPhoto(null)}
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <p className="gallery-message">
        Every picture tells a story of our love, Kaju. Click on any photo to relive our precious moments together. ❤️
      </p>
    </section>
  );
};

export default PhotoGallery;
