import React from "react";

const AppFooter: React.FC = () => {
  return (
    <footer className="AppFooter">
      <div className="social-media">
        <a href="#">Instagram</a>
        <a href="#">X</a>
        <a href="#">Telegram</a>
      </div>
      <div className="quick-links">
        <a href="#">Whitepaper</a>
        <a href="#">RoadMap</a>
      </div>
      <div className="contact-info">
        <p>HOWL US at <a href="mailto:info@handdogsocial.com">info@handdogsocial.com</a></p>
      </div>
      <div className="newsletter">
        <p>Subscribe to our <span>newsletter</span>:</p>
        <input type="email" placeholder="Your email" />
        <button className="cta-button">Subscribe</button>
      </div>
    </footer>
  );
};

export default AppFooter;
