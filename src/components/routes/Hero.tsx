import React from 'react';
import './css/Hero.css';
import heroImage from '../../assets/hero-image.jpg';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="hero" style={{backgroundImage: `url(${heroImage})`}}>
      <div className="hero-content">
        <h1>Hey Top Dawg!</h1>
        <p>Who tf you Hangin with?</p>
        <Link to="/about"><button className="cta-button">Who?</button></Link>
        <Link to="/how"><button className="cta-button">$HDS</button></Link>
      </div>
    </section>
  );
};

export default Hero;
