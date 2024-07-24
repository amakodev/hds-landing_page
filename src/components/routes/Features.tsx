import React from 'react';
import './css/Features.css';
import { FaDog, FaUsers, FaCrown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Features: React.FC = () => {
  return (
    <section className="features">
      <h2>Why Join HandDogSocial?</h2>
      <div className="card-grid">
        <div className="card">
          <FaDog className="icon" />
          <h3>Token Utility</h3>
          <p>Use our ERC20 token to boost your social media presence.</p>
        </div>
        <div className="card">
          <FaUsers className="icon" />
          <h3>Community Engagement</h3>
          <p>Connect with like-minded individuals and grow together.</p>
        </div>
        <div className="card">
          <FaCrown className="icon" />
          <h3>Exclusive Content</h3>
          <p>Access premium content and resources available only to members.</p>
        </div>
      </div>
      <Link to="/how"><button className="cta-button">How does it work?</button></Link>
    </section>
  );
};

export default Features;
