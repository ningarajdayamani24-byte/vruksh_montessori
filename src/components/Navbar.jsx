import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path) => {
    if (path.startsWith('/#')) {
      const id = path.replace('/#', '');
      if (location.pathname === '/') {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/');
        setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  };

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }}
      style={{
        ...styles.nav,
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.7)' : 'transparent',
        backdropFilter: scrolled ? 'blur(15px)' : 'none',
        boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.1)' : 'none',
        padding: scrolled ? '15px 40px' : '25px 40px',
      }}
    >
      <div style={styles.brand}>Vruksh <span style={{fontWeight: 300}}>Montessori</span></div>
      
      <div style={styles.navLinks}>
        {[
          { name: 'Home', path: '/' },
          { name: 'Programs', path: '/programs' },
          { name: 'Gallery', path: '/gallery' },
          { name: 'Contact', path: '/#contact-us' }
        ].map(item => (
          <Link key={item.name} to={item.path} onClick={() => handleNavClick(item.path)} style={styles.link}>
            {item.name}
          </Link>
        ))}
      </div>

      <a href="https://forms.gle/6Kxp3JagLnsXxSw68" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        <motion.button 
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(142,89,73,0.4)' }} 
          whileTap={{ scale: 0.95 }} 
          style={styles.button}
        >
          Apply Now
        </motion.button>
      </a>
    </motion.nav>
  );
};

const styles = {
  nav: { 
    position: 'fixed', top: '20px', left: '5%', right: '5%', zIndex: 1000, 
    borderRadius: '30px', display: 'flex', justifyContent: 'space-between', 
    alignItems: 'center', transition: 'all 0.4s ease' 
  },
  brand: { fontSize: '1.5rem', fontWeight: '800', color: '#433028', cursor: 'pointer' },
  navLinks: { display: 'flex', gap: '30px' },
  link: { textDecoration: 'none', color: '#433028', fontWeight: '600', fontSize: '0.95rem', cursor: 'pointer' },
  button: { 
    padding: '12px 30px', borderRadius: '25px', border: 'none', 
    background: 'linear-gradient(135deg, #8E5949 0%, #5D3A31 100%)', 
    color: 'white', fontWeight: 'bold', cursor: 'pointer', 
    boxShadow: '0 4px 15px rgba(142,89,73,0.3)' 
  }
};