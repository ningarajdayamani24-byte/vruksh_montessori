import React from 'react';
import { motion } from 'framer-motion';
import { Wave } from './components/Wave';

// Imports
import logo from './assets/vruksh-logo.png';
import bgImage from './assets/hero-bg.jpg';
import whoWeAreImg from './assets/vruksh-who-we-are.jpg';
import whatWeDoImg from './assets/vruksh-what-we-do.jpg';
import ourMotiveImg from './assets/vruksh-our-motive.jpg';

export default function Home() {
  const schoolName = "Vruksh Montessori School";

  const cardData = [
    { img: whoWeAreImg, title: "Who We Are", text: "Vruksh Montessori is a nurturing community dedicated to the holistic development of every child. We believe in creating a prepared, inclusive environment that fosters social, emotional, and intellectual growth. By respecting the child’s unique rhythm, we ensure that every student feels valued, understood, and inspired to discover their true potential." },
    { img: whatWeDoImg, title: "What We Do", text: "We implement the authentic Montessori method, moving away from rote memorization toward hands-on exploration. Our classrooms are 'Prepared Environments' stocked with specialized tactile materials that allow children to master complex concepts in Mathematics, Language, and Practical Life skills through self-directed, joy-based learning." },
    { img: ourMotiveImg, title: "Our Motive", text: "Our ultimate goal is to empower the next generation to become independent, confident, and compassionate global citizens. We prioritize curiosity, critical thinking, and a sense of responsibility, aiming to spark a lifelong love for learning that extends far beyond the classroom, shaping characters prepared for the challenges of tomorrow." }
  ];

  const testimonials = [
    { name: "Anjali Verma", text: "The transformation we have seen in our daughter is incredible. She is so independent and loves going to school every day." },
    { name: "Rahul Desai", text: "The educators at Vruksh don't just teach; they observe and guide. My son has developed a deep love for mathematics." },
    { name: "Priya Sharma", text: "Finding a school that respects a child's individuality was our priority. Vruksh exceeded our expectations." }
  ];

  return (
    <div style={{ backgroundColor: '#E4C5A9', minHeight: '100vh' }}>
      
      {/* 1. Hero Section */}
      <section style={styles.hero}>
        <img src={bgImage} alt="Hero" style={styles.heroBg} />
        <div style={styles.overlay} />
        <Wave />
        
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={styles.heroContent}>
          <motion.div 
            animate={{ y: [0, -30, 0], rotate: [0, 5, -5, 0] }} 
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            style={styles.logoBox}
          >
            <img src={logo} alt="Logo" style={styles.logoImg} />
          </motion.div>

          <motion.h1 style={styles.h1}>
            {schoolName.split("").map((char, i) => (
              <motion.span key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }}>{char}</motion.span>
            ))}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 1.5, duration: 0.8 }}
            style={styles.tagline}
          >
            Where learning takes root.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. Info Cards */}
      <section id="about" style={styles.section}>
        <div style={styles.grid}>
          {cardData.map((card, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }} style={styles.card}>
              <img src={card.img} style={styles.cardImg} />
              <div style={{ padding: '25px' }}>
                <h2 style={{ color: '#433028' }}>{card.title}</h2>
                <p style={{ marginTop: '15px', lineHeight: '1.7', color: '#333' }}>{card.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Testimonials */}
      <section id="voice-of-community" style={{...styles.section, backgroundColor: '#dccdbf'}}>
        <h2 style={{ textAlign: 'center', fontSize: '3rem', color: '#433028', marginBottom: '40px' }}>Voices of Our Community</h2>
        <div style={styles.grid}>
          {testimonials.map((t, i) => (
            <motion.div 
              key={i} 
              whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(142, 89, 73, 0.2)" }} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ delay: i * 0.2 }} 
              style={{ ...styles.card, borderLeft: '6px solid #8E5949' }}
            >
              <div style={{ padding: '30px' }}>
                <p style={{ fontStyle: 'italic', lineHeight: '1.8', color: '#555' }}>"{t.text}"</p>
                <h4 style={{ marginTop: '20px', color: '#8E5949' }}>— {t.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Contact Section */}
      <section id="contact-us" style={styles.contactSection}>
        <div style={styles.contactContent}>
          <h2 style={styles.sectionTitle}>Contact Us</h2>
          <div style={styles.infoBox}>
            <p><strong>Address:</strong><br /> Plot no: 60, Sangana Basava Nilaya, <br /> Harikrishna Nagar, Santosh Colony, <br /> New Jewargi Road, Kalaburagi.</p>
            <p><strong>Phone:</strong> 9590068999, 8073439543</p>
            <p><strong>Email:</strong> Vrukshmontessori@gmail.com</p>
            <p><strong>Instagram:</strong> <a href="https://www.instagram.com/vrukush_montessori_school" target="_blank" rel="noreferrer">@vrukush_montessori_school</a></p>
          </div>
        </div>
        <div style={styles.mapBox}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.816041695505!2d76.84883497500599!3d17.329883583526683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5970c0c0c0c0c%3A0x0!2sVruksh%20Montessori%20School!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin" 
            width="100%" 
            height="400" 
            style={{ border: 0, borderRadius: '15px' }} 
            allowFullScreen="" 
            loading="lazy"
            title="School Location"
          ></iframe>
        </div>
      </section>

      {/* 5. Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerGrid}>
          <div>
            <h2 style={{ color: '#E4C5A9', marginBottom: '15px' }}>Vruksh.</h2>
            <p style={{ color: '#DCCDBF', lineHeight: '1.6' }}>Cultivating a lifelong love for learning through the authentic Montessori method.</p>
          </div>
          <div>
            <h3 style={{ color: '#E4C5A9', marginBottom: '15px' }}>Visit Us</h3>
            <p style={{ color: '#DCCDBF', lineHeight: '1.6' }}>
              Plot no: 60, Sangana Basava Nilaya,<br />
              Harikrishna Nagar, Santosh Colony,<br />
              New Jewargi Road, Kalaburagi.
            </p>
          </div>
          <div>
            <h3 style={{ color: '#E4C5A9', marginBottom: '15px' }}>Connect</h3>
            <p style={{ color: '#DCCDBF', lineHeight: '1.6' }}>
              📞 95900 68999<br />
              ✉️ Vrukshmontessorischool@gmail.com<br />
              Instagram: @vruksh_montessori_school
            </p>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #5D3A31', color: '#DCCDBF' }}>
          © 2026 Vruksh Montessori School. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

const styles = {
  hero: { height: '100vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', overflow: 'hidden' },
  heroBg: { position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', opacity: '0.5' },
  overlay: { position: 'absolute', width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(228, 197, 169, 0.3) 0%, rgba(228, 197, 169, 0.9) 100%)' },
  heroContent: { zIndex: 1, padding: '20px' },
  logoBox: { width: '220px', height: '220px', margin: '0 auto 20px' },
  logoImg: { width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', border: '6px solid #fff', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' },
  h1: { fontSize: '4.5rem', color: '#433028', marginBottom: '10px' },
  tagline: { fontSize: '2rem', fontStyle: 'italic', color: '#433028', backgroundColor: 'rgba(255, 255, 255, 0.4)', padding: '10px 20px', borderRadius: '50px', display: 'inline-block', fontWeight: '600', textShadow: '0px 2px 4px rgba(0,0,0,0.1)' },
  section: { padding: '50px 5%' },
  contactSection: { display: 'flex', flexWrap: 'wrap', gap: '40px', padding: '80px 5%', backgroundColor: '#FAF7F2' },
  contactContent: { flex: '1', minWidth: '300px' },
  infoBox: { lineHeight: '2', color: '#433028' },
  mapBox: { flex: '1', minWidth: '300px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' },
  sectionTitle: { color: '#433028', fontSize: '2.5rem', marginBottom: '20px' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' },
  card: { backgroundColor: '#fff', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', transition: 'all 0.3s ease' },
  cardImg: { width: '100%', height: '220px', objectFit: 'cover' },
  footer: { padding: '60px 5%', backgroundColor: '#433028', color: '#fff', marginTop: '50px' },
  footerGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }
};