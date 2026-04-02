import { bandData } from '../data/siteData';
import SocialLinks from '../components/SocialLinks';
import React from 'react';

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__overlay" />
      <div className="hero__image" aria-hidden="true">
        <img src="/calaca-swarm.png" alt="" />
      </div>

      <div className="container hero__content">
        <p className="hero__eyebrow">Official Site</p>
        <h1>{bandData.name}</h1>
        <p className="hero__tagline">
          {bandData.tagline} · {bandData.location}
        </p>
        <p className="hero__text">{bandData.description}</p>

        <div className="hero__actions">
          <a href="#music" className="btn btn--primary">Listen</a>
          <a href="#contact" className="btn btn--ghost">Contact</a>
        </div>

        <SocialLinks />
      </div>
    </section>
  );
}

export default Hero;