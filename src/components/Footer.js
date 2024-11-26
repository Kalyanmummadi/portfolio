import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <h3>Connect with me</h3>
        <div className="social-icons">
          <a href="https://github.com/Kalyanmummadi" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://www.linkedin.com/in/kalyan-mummadi-626801238/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://www.instagram.com/k_a_l_y_a_n02/?hl=en" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      </div>
      <p>&copy; {new Date().getFullYear()} Kalyanmummadi. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
