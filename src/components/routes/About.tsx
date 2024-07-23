import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../assets/animations/sm_tree.json';
import './css/About.css';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <section className="about" style={{flexDirection: 'row'}}>
      <div className="animation-column">
        <Lottie animationData={animationData} loop={true} />
      </div>
      <div className="text-column">
        <ul className="elegant-list">
          <li>Exclusive Community for Social Media Enthusiasts</li>
          <li>Innovative Crypto Solutions</li>
          <li>Support for Small Businesses and Entrepreneurs</li>
          <li>Latest Trends in Fashion and Style</li>
          <li>Engaging and Entertaining Animal Content</li>
        </ul>
        <Link to="/features"><button className="cta-button">What does it do?</button></Link>
      </div>
    </section>
  );
};

export default About;
