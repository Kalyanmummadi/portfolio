import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2>My Education</h2>
      <div className="education-timeline">
        <div className="education-item fade-in">
          <h3>Bachelor of Technology in Computer Science</h3>
          <h4>Aurora's PG College</h4>
          <p>2023 - 2025</p>
          <p>CGPA : 7.0</p>
          
        </div>
        <div className="education-item fade-in delay-1">
          <h3>Bachelor of Technology in Computer Science</h3>
          <h4>Pragathi Degree College</h4>
          <p>2020 - 2023</p>
          <p>CGPA : 8.09</p>
          
        </div>
        <div className="education-item fade-in delay-2">
          <h3>Intermediate in MPC (Math, Physics, Chemistry)</h3>
          <h4> Sri Gayathri Junior College</h4>
          <p>2018 - 2020</p>
          <p>CGPA : 8.17</p>
         
        </div>
        <div className="education-item fade-in delay-3">
          <h3>High School</h3>
          <h4>Kallam Anji Reddy Vidhyalaya</h4>
          <p>Completed in 2018</p>
          <p>CGPA : 8.3</p>
        </div>
       
      </div>
    </section>
  );
};

export default Education;
