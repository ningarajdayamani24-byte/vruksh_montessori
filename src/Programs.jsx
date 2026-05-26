import React from 'react';
import { motion } from 'framer-motion';

// Import your images - ensure these are in your src/assets folder
import preNurseryImg from './assets/pre-nursery.jpg';
import nurseryImg from './assets/nursery.jpg';
import lkgImg from './assets/lkg.jpg';
import ukgImg from './assets/ukg.jpg';
import featureImg from './assets/your-image.jpg';

export default function Programs() {
  const googleFormUrl = "https://forms.gle/6Kxp3JagLnsXxSw68";

  const programs = [
    { img: preNurseryImg, age: "2 – 3 Years", title: "Pre-Nursery / Playgroup", description: "A gentle introduction to school life, focusing on sensory exploration, building social trust, and early language development through play." },
    { img: nurseryImg, age: "3 – 4 Years", title: "Nursery", description: "Children begin to engage with the 'Prepared Environment,' developing fine motor skills, practical life habits, and a foundational love for learning." },
    { img: lkgImg, age: "4 – 5 Years", title: "Lower Kindergarten (LKG)", description: "Focuses on early literacy and numeracy, promoting independence and critical thinking through hands-on Montessori materials." },
    { img: ukgImg, age: "5 – 6 Years", title: "Upper Kindergarten (UKG)", description: "Refining complex academic concepts, confidence building, and emotional maturity, preparing students for the transition to primary school." }
  ];

  return (
    <div style={{ backgroundColor: '#E4C5A9', minHeight: '100vh', padding: '50px 5%' }}>
      
      {/* PERFECTLY CENTERED HEADING */}
      <div style={styles.headerContainer}>
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={styles.title}>
          Our Programs
          <div style={styles.underline} />
        </motion.h1>
      </div>
      
      {/* Program Grid */}
      <div style={styles.grid}>
        {programs.map((prog, i) => (
          <motion.div key={i} whileHover={{ y: -10 }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} style={styles.card}>
            <img src={prog.img} alt={prog.title} style={styles.cardImg} />
            <div style={{ padding: '25px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <div style={styles.badge}>{prog.age}</div>
              <h2 style={styles.cardTitle}>{prog.title}</h2>
              <p style={{ marginTop: '15px', lineHeight: '1.7', color: '#333', flexGrow: 1 }}>{prog.description}</p>
              
              {/* Linked Apply Now Button */}
              <a href={googleFormUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <button style={styles.button}>Apply Now</button>
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Featured Section */}
      <section style={styles.featuredSection}>
        <div style={styles.featuredText}>
          <h2 style={{ color: '#433028', fontSize: '2.5rem', marginBottom: '20px' }}>Rooted in Excellence</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333', marginBottom: '25px' }}>
            At Vruksh Montessori, we believe that education is not just about filling a bucket, but lighting a fire. 
            Our environment is carefully curated to spark curiosity, allowing children to explore at their own 
            pace while developing the confidence to take on the world.
          </p>
          <a href={googleFormUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <button style={styles.button}>Schedule a Campus Tour</button>
          </a>
        </div>
        <div style={styles.imageBox}>
          <img src={featureImg} alt="School Environment" style={styles.featuredImg} />
        </div>
      </section>
    </div>
  );
}

const styles = {
  headerContainer: { display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '60px', width: '100%' },
  title: { color: '#433028', fontSize: '4rem', letterSpacing: '1px', textShadow: '2px 2px 4px rgba(0,0,0,0.1)', textAlign: 'center', margin: 0 },
  underline: { height: '4px', width: '60%', backgroundColor: '#8E5949', margin: '10px auto 20px', borderRadius: '2px' },
  cardTitle: { color: '#433028', marginTop: '10px', fontSize: '1.6rem', fontWeight: '800', lineHeight: '1.2' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginBottom: '80px', maxWidth: '1300px', marginInline: 'auto' },
  card: { backgroundColor: '#fff', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column' },
  cardImg: { width: '100%', height: '200px', objectFit: 'cover' },
  badge: { display: 'inline-block', backgroundColor: '#E4C5A9', padding: '5px 15px', borderRadius: '20px', color: '#433028', fontWeight: 'bold' },
  button: { marginTop: '25px', padding: '12px 24px', backgroundColor: '#8E5949', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem', transition: 'background 0.3s ease' },
  featuredSection: { display: 'flex', alignItems: 'center', gap: '40px', backgroundColor: '#fff', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', maxWidth: '1300px', marginInline: 'auto' },
  featuredText: { flex: '1' },
  imageBox: { flex: '1', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.15)' },
  featuredImg: { width: '100%', height: '400px', objectFit: 'cover' }
};