import React from 'react';
import './css/HowItWorks.css';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="how-it-works">
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
    </section>
  );
};

export default HowItWorks;
