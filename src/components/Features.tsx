import React from 'react';
import './css/Features.css';
import { FaDog, FaUsers, FaCrown } from 'react-icons/fa';

const Features: React.FC = () => {
  return (
    <section id="features" className="features">
      <h2>Why Join HandDogSocial?</h2>
      <div className="features-grid">
        <div className="feature-item">
          <FaDog className="feature-icon" />
          <h3>Token Utility</h3>
          <p>Use our ERC20 token to boost your social media presence.</p>
        </div>
        <div className="feature-item">
          <FaUsers className="feature-icon" />
          <h3>Community Engagement</h3>
          <p>Connect with like-minded individuals and grow together.</p>
        </div>
        <div className="feature-item">
          <FaCrown className="feature-icon" />
          <h3>Exclusive Content</h3>
          <p>Access premium content and resources available only to members.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
