import React from 'react';
import './css/SignUpIncentives.css';

const SignUpIncentives: React.FC = () => {
  return (
    <section id="sign-up" className="sign-up-incentives">
      <h2>Get Exclusive Benefits</h2>
      <ul>
        <li>Bonus Tokens</li>
        <li>Exclusive Content</li>
        <li>Premium Resources</li>
      </ul>
      <button className="cta-button">Sign Up Now</button>
    </section>
  );
};

export default SignUpIncentives;
