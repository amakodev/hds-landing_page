import React from 'react';
import './css/Community.css';

const Community: React.FC = () => {
  return (
    <section id="community" className="community">
      <h2>Join the Pack</h2>
      <div className="testimonials">
        <div className="testimonial">
          <p>"HandDogSocial has revolutionized my social media game!"</p>
          <p>- Community Member 1</p>
        </div>
        <div className="testimonial">
          <p>"I love the exclusive content and the supportive community."</p>
          <p>- Community Member 2</p>
        </div>
        <div className="testimonial">
          <p>"The ERC20 tokens are a game changer for social media presence."</p>
          <p>- Community Member 3</p>
        </div>
      </div>
    </section>
  );
};

export default Community;
