import React from 'react';
import './css/HowItWorks.css';
import { Link } from 'react-router-dom';

const HowItWorks: React.FC = () => {
  return (
    <section  className="how">
      <h2>How It Works</h2>
      <div className="steps">
        <div className="step">
          <h3>Step 1</h3>
          <p>Sign up and get your exclusive ERC20 tokens.</p>
        </div>
        <div className="step">
          <h3>Step 2</h3>
          <p>Use tokens to boost your social media presence.</p>
        </div>
        <div className="step">
          <h3>Step 3</h3>
          <p>Engage with the community and access exclusive content.</p>
        </div>
      </div>
      <Link to="/community"><button className="cta-button">Hang with the Dawgs!</button></Link>
    </section>
  );
};

export default HowItWorks;
