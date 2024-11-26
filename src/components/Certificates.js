import React from 'react';
import './Certificates.css'; // Ensure this file exists for styling

const Certificates = () => {
  return (
    <section id="certificates" className="certificates-section">
      <h2>My Certificates</h2>
      <div className="certificates-grid">
        <div className="certificate">
          
          <a href="https://certificates.ccbp.in/academy/developer-foundations?id=ZLEMVQJJBF" target="_blank" rel="noopener noreferrer">
            <img src="/developer.png" alt="Certificate 1" />
          </a>
        </div>
        <div className="certificate">
         
          <a href="https://certificates.ccbp.in/academy/javascript-essentials?id=XUGAPOKXCC" target="_blank" rel="noopener noreferrer">
            <img src="/javaScript.png" alt="Certificate 2" />
          </a>
        </div>
        <div className="certificate">
          
          <a href="https://certificates.ccbp.in/academy/programming-foundations-with-python?id=XEQEHRESNK" target="_blank" rel="noopener noreferrer">
            <img src="/python.png" alt="Certificate 3" />
          </a>
        </div>
        <div className="certificate">
          
          <a href="hhttps://certificates.ccbp.in/academy/introduction-to-databases?id=QZHYFVIDPGttps://certificates.ccbp.in/academy/programming-foundations-with-python?id=XEQEHRESNK" target="_blank" rel="noopener noreferrer">
            <img src="/sql.png" alt="Certificate 3" />
          </a>
        </div>
        <div className="certificate">
         
          <a href="https://certificates.ccbp.in/academy/build-your-own-responsive-website?id=PQBIBPCPYJ" target="_blank" rel="noopener noreferrer">
            <img src="/bootstrap.png" alt="Certificate 3" />
          </a>
        </div>
        <div className="certificate">
         
          <a href="https://cerhttps://certificates.ccbp.in/academy/dynamic-web-application?id=FPKWKNWYEXtificates.ccbp.in/academy/build-your-own-responsive-website?id=PQBIBPCPYJ" target="_blank" rel="noopener noreferrer">
            <img src="/javaScript (2).png" alt="Certificate 3" />
          </a>
        </div>
        <div className="certificate">
         
         <a href="https://cerhttps://certificates.ccbp.in/academy/dynamic-web-application?id=FPKWKNWYEXtificates.ccbp.in/academy/build-your-own-responsive-website?id=PQBIBPCPYJ" target="_blank" rel="noopener noreferrer">
           <img src="/AWS.png" alt="Certificate 3" />
         </a>
       </div>
        
        {/* Add more certificates as needed */}
      </div>
    </section>
  );
};

export default Certificates;
