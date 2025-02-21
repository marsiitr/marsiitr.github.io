import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* <div className="footer-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252.30517801365994!2d77.8997746286519!3d29.866370452060757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb32bac1adc93%3A0x80bba7dd5e4d1a6a!2sStudents%20Activity%20Centre%20-%20SAC!5e0!3m2!1sen!2sin!4v1723493287738!5m2!1sen!2sin"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div> */}
        <div className="footer-logo">
          <img src="logo.png" alt="MaRS Logo" />
          <h3>Models and Robotics Section, IIT Roorkee</h3>
        </div>
        <div className="footer-contact">
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
