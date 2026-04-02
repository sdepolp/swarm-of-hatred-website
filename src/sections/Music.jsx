import SectionTitle from '../components/SectionTitle';
import { bandData } from '../data/siteData';
import React from 'react';

function Music() {
  return (
    <section id="music" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Music"
          title="Stream the invocation"
          text=""
        />

        <div className="embed-card">
          <iframe
            title="Swarm Of Hatred music player"
            src={bandData.musicEmbed}
            seamless
            className="music-embed"
          />
        </div>
      </div>
    </section>
  );
}

export default Music;
