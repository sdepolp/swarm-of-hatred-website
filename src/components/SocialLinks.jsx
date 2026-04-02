import { bandData } from '../data/siteData';
import React from 'react';

function SocialLinks() {
  const entries = Object.entries(bandData.socials);

  return (
    <div className="social-links">
      {entries.map(([name, url]) => (
        <a key={name} href={url} target="_blank" rel="noreferrer">
          {name}
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
