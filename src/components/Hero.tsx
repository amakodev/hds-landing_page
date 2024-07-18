import React from 'react';
import './css/Hero.css';
import heroImage from '../assets/hero-image.jpg';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Unleash Your Social Presence with HandDogSocial</h1>
        <p>Join the exclusive community where social media meets crypto</p>
        <button className="cta-button">Get Started</button>
      </div>
      <img src={heroImage} alt="Hero" className="hero-image" />
    </section>
  );
};

export default Hero;
