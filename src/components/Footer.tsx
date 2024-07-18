import React from 'react';
import './css/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="social-media">
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
      </div>
      <div className="quick-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
      <div className="contact-info">
        <p>Contact us at info@handdogsocial.com</p>
      </div>
      <div className="newsletter">
        <p>Sign up for our newsletter:</p>
        <input type="email" placeholder="Your email" />
        <button>Subscribe</button>
      </div>
    </footer>
  );
};

export default Footer;
