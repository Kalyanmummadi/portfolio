import React from 'react';
import './Header.css';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <h1 className="logo">KALYAN MUMMADI</h1>
        <ul className="nav-links">
          <li><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
          <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
          <li><Link to="certificates" smooth={true} duration={500}>Certificates</Link></li>
          <li><Link to="Education" smooth={true} duration={500}>Education</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>

        </ul>
      </nav>
    </header>
  );
};

export default Header;
