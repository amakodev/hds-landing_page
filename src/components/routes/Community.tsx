import React from 'react';
import './css/Community.css';
import instagramImage from '../../assets/hero-image.jpg';
import twitterImage from '../../assets/hero-image.jpg';
import telegramImage from '../../assets/hero-image.jpg';

const Community: React.FC = () => {
  const renderSection = (platform: string, image: string, description: string, link: string) => (
    <div className="social-section" key={platform} style={{ backgroundImage: `url(${image})` }}>
      <div className="overlay">
        <h2>{platform}</h2>
        <p>{description}</p>
        <button className='cta-button' onClick={() => window.open(link, '_blank')}>Join {platform}</button>
      </div>
    </div>
  );

  return (
    <section className="community" style={{flexDirection: 'row'}}>
      {renderSection('Instagram', instagramImage, 'Follow us on Instagram and stay updated with our latest photos and stories.', 'https://www.instagram.com')}
      {renderSection('Twitter', twitterImage, 'Follow us on Twitter for the latest news and updates.', 'https://www.twitter.com')}
      {renderSection('Telegram', telegramImage, 'Join our Telegram community for exclusive discussions and updates.', 'https://www.telegram.org')}
    </section>
  );
};

export default Community;
