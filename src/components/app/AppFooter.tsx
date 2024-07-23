import React from "react";

const AppFooter: React.FC = () => {
  return (
    <footer className="AppFooter">
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
        <p>Subscribe to our <span>newsletter</span>:</p>
        <input type="email" placeholder="Your email" />
        <button>Subscribe</button>
      </div>
    </footer>
  );
};

export default AppFooter;
