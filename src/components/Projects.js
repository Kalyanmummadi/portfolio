import React from 'react';
import './Projects.css';
import { motion } from 'framer-motion';



const Projects = () => {
  return (
    <section className="projects">
     <div className="projects1">
      <h1 className='head'>Projects</h1>
      <div className='project-container'>
        <div className='project-card'>
          <h1 className='head1'>FOOD MUNCH WEBSITE</h1>
          <img src='/food.png' alt='food website'/>
          <p className='para'>Developed a responsive website for Food Store where users can see a list of food items,<br></br> detailed information
          about a food item, offers</p>
          <a href='https://mkfood.ccbp.tech/' target='_blank' rel="noopener noreferrer">CLICK HERE</a>
          
        </div>
        <div className='project-card'>
          <h1 className='head1'>Weather app</h1>
          <img src='/weather.png' alt='weather'/>
          <p className='para'>A weather website used to check the weather report of cites by their name.</p>
          
          <a href='https://mkweather.ccbp.tech/' target='_blank' rel="noopener noreferrer">CLICK HERE</a>
          
        </div>
      </div>
     </div>
    </section>
  );
};

export default Projects;
