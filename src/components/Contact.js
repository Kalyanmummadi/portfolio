import React from 'react';
import './Contact.css';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <motion.form 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required></textarea>
        <motion.button 
          whileHover={{ scale: 1.05 }} 
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contact;
