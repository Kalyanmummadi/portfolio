import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Skills.css';  // Ensure this file exists for styling

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false
    });
  }, []);

  return (
    <section id="skills" data-aos="fade-up">
      <h2>My Skills</h2>
      <div className="skills-container">
        <div className="skill-item" data-aos="zoom-in">
          <h3>HTML</h3>
          <progress className="progress-bar" value="95" max="100"></progress>
        </div>

        <div className="skill-item" data-aos="zoom-in" data-aos-delay="200">
          <h3>CSS</h3>
          <progress className="progress-bar" value="90" max="100"></progress>
        </div>

        <div className="skill-item" data-aos="zoom-in" data-aos-delay="400">
          <h3>JavaScript</h3>
          <progress className="progress-bar" value="90" max="100"></progress>
        </div>

        <div className="skill-item" data-aos="zoom-in" data-aos-delay="600">
          <h3>Bootstrap</h3>
          <progress className="progress-bar" value="100" max="100"></progress>
        </div>

        <div className="skill-item" data-aos="zoom-in" data-aos-delay="800">
          <h3>Python</h3>
          <progress className="progress-bar" value="95" max="100"></progress>
        </div>

        <div className="skill-item" data-aos="zoom-in" data-aos-delay="1000">
          <h3>SQL</h3>
          <progress className="progress-bar" value="100" max="100"></progress>
        </div>

        <div className="skill-item" data-aos="zoom-in" data-aos-delay="1200">
          <h3>Node.js</h3>
          <progress className="progress-bar" value="85" max="100"></progress>
        </div>

        <div className="skill-item" data-aos="zoom-in" data-aos-delay="1400">
          <h3>Express.js</h3>
          <progress className="progress-bar" value="85" max="100"></progress>
        </div>

        <div className="skill-item" data-aos="zoom-in" data-aos-delay="1600">
          <h3>React.js</h3>
          <progress className="progress-bar" value="50" max="100"></progress>
        </div>

        <div className="skill-item" data-aos="zoom-in" data-aos-delay="1800">
          <h3>Git</h3>
          <progress className="progress-bar" value="100" max="100"></progress>
        </div>
      </div>
    </section>
  );
};

export default Skills;

