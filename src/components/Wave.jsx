import React from 'react';
import { motion } from 'framer-motion';

export const Wave = () => {
  return (
    <svg viewBox="0 0 1440 320" style={{ position: 'absolute', bottom: 0, width: '100%', zIndex: 0 }}>
      {/* Dark Layer - Slow and Deep */}
      <motion.path 
        fill="#AC9453" 
        animate={{ d: ["M0,160L80,180C160,200,320,240,480,224C640,208,800,136,960,112C1120,88,1280,112,1360,124L1440,136L1440,320L0,320Z", "M0,224L80,208C160,192,320,160,480,170.7C640,181,800,235,960,240C1120,245,1280,203,1360,181.3L1440,160L1440,320L0,320Z"] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut", repeatType: "reverse" }} 
      />
      
      {/* Mid Layer - Medium Speed */}
      <motion.path 
        fill="#cb935f" 
        animate={{ d: ["M0,256L120,224C240,192,480,128,720,138.7C960,149,1200,235,1320,277.3L1440,320L1440,320L0,320Z", "M0,128L120,160C240,192,480,256,720,245.3C960,235,1200,149,1320,106.7L1440,64L1440,320L0,320Z"] }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut", repeatType: "reverse" }} 
        style={{ opacity: 0.6 }}
      />
      
      {/* Light Layer - Fast and Sharp */}
      <motion.path 
        fill="#555E4D" 
        animate={{ d: ["M0,288L150,266.7C300,245,600,203,900,213.3C1200,224,1350,288,1440,320L1440,320L0,320Z", "M0,320L150,298.7C300,277,600,235,900,245.3C1200,256,1350,320,1440,320L1440,320L0,320Z"] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", repeatType: "reverse" }} 
        style={{ opacity: 0.4 }}
      />
    </svg>
  );
};