import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}>
        <h1>Hi, I'm KALYAN MUMMADI</h1>
        <p>Full-Stack Developer | Innovator | Tech Enthusiast</p>
      </motion.div>
      <motion.img 
        src="profilePic.png" 
        alt="Profile" 
        initial={{ scale: 0 }} 
        animate={{ scale: 1 }} 
        transition={{ duration: 1 }} 
        
      />
    </section>
  );
};

export default Hero;
