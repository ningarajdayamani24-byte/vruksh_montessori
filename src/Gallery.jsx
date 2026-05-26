import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 1. IMPORT YOUR IMAGES AT THE TOP
import slide1 from './assets/slide1.jpg';
import slide2 from './assets/slide2.jpg';
import slide3 from './assets/slide3.jpg';

import gal1 from './assets/gal1.jpg';
import gal2 from './assets/gal2.jpg';
import gal3 from './assets/gal3.jpg';
import gal4 from './assets/gal4.jpg';
import gal5 from './assets/gal5.jpg';
import gal6 from './assets/gal6.jpg';

// 2. REFERENCE THE IMPORTED VARIABLES
const slides = [slide1, slide2, slide3];
const galleryImages = [gal1, gal2, gal3, gal4, gal5, gal6];

export default function Gallery() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % slides.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ backgroundColor: '#E4C5A9', minHeight: '100vh', paddingBottom: '50px' }}>
      
      {/* 1. Moving Slideshow Section */}
      <div style={styles.slideshowContainer}>
        <AnimatePresence mode='wait'>
          <motion.img 
            key={index}
            src={slides[index]}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={styles.slideImg}
          />
        </AnimatePresence>
      </div>

      {/* 2. Masonry Grid Section */}
      <div style={{ padding: '50px 5%' }}>
        <h2 style={{ textAlign: 'center', color: '#433028', fontSize: '3rem', marginBottom: '40px' }}>Our Moments</h2>
        <div style={styles.masonryGrid}>
          {galleryImages.map((src, i) => (
            <motion.div key={i} whileHover={{ scale: 1.03 }} style={styles.gridItem}>
              <img src={src} alt="Gallery" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  slideshowContainer: { height: '500px', width: '100%', overflow: 'hidden', position: 'relative' },
  slideImg: { width: '100%', height: '100%', objectFit: 'cover', position: 'absolute' },
  masonryGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', gridAutoRows: '300px', gridAutoFlow: 'dense' },
  gridItem: { borderRadius: '15px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }
};