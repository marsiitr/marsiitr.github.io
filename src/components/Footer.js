import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column logo-column">
          <img src="logo.png" alt="MaRS Logo" />
        </div>
        
        <div className="footer-column title-column">
          <h3>Models and Robotics Section, IIT Roorkee</h3>
        </div>

        <div className="footer-column contact-column">
          <div className="contact-content">
            <h4>Contact Us</h4>
            <p>2nd floor, New SAC Building</p>
            <p>Opp. Kasturba Bhawan</p>
            <p>IIT Roorkee</p>
            <p>Roorkee, Uttarakhand 247667</p>
            <p>Email: mars@iitr.ac.in</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Copyright MaRS. All Rights Reserved</p>
        <p>Designed by MaRS-IITR</p>
      </div>
    </footer>
  );
};

export default Footer;
