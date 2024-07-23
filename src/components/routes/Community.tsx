import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './css/Community.css';

interface Metrics {
  instagram: { current: number; target: number };
  twitter: { current: number; target: number };
  telegram: { current: number; target: number };
}

const Community: React.FC = () => {
  const [metrics, setMetrics] = useState<Metrics>({
    instagram: { current: 0, target: 10000 },
    twitter: { current: 0, target: 5000 },
    telegram: { current: 0, target: 2000 },
  });

  useEffect(() => {
    // Function to fetch data from APIs
    const fetchData = async () => {
      try {
        const instagramData = await axios.get('INSTAGRAM_API_URL');
        const twitterData = await axios.get('TWITTER_API_URL');
        const telegramData = await axios.get('TELEGRAM_API_URL');
        
        setMetrics({
          instagram: { current: instagramData.data.followers_count, target: 10000 },
          twitter: { current: twitterData.data.followers_count, target: 5000 },
          telegram: { current: telegramData.data.members_count, target: 2000 },
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    // Fetch data periodically every 5 minutes
    const interval = setInterval(fetchData, 300000);
    return () => clearInterval(interval);
  }, []);

  const renderCylinder = (platform: string, data: { current: number; target: number }) => (
    <div className="cylinder-container" key={platform}>
      <div className="cylinder" title={`${data.current} / ${data.target}`}>
        <div
          className="fill"
          style={{ height: `${(data.current / data.target) * 100}%` }}
        ></div>
        <div className="cylinder-label">
          {data.current} / {data.target}
        </div>
      </div>
      <div className="cta">
        <p>Join us on {platform} and help us reach our target!</p>
        <button className='cta-button' onClick={() => window.open(`https://www.${platform}.com`, '_blank')}>Join {platform}</button>
      </div>
    </div>
  );

  return (
    <section>
      <div className="community-container">
      {renderCylinder('Instagram', metrics.instagram)}
      {renderCylinder('Twitter', metrics.twitter)}
      {renderCylinder('Telegram', metrics.telegram)}
    </div>
    </section>
  );
};

export default Community;
