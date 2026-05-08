import SectionTitle from '../components/SectionTitle';
import React from 'react';

function About() {
  return (
    <section id="about" className="section section--muted">
      <div className="container two-columns">
        <div className="band-image">
          <img src="/assets/Band.jpg" alt="Swarm Of Hatred 2025" />
        </div>

        <div>
          <SectionTitle
            eyebrow="About"
            title="Darkness, dissonance and devotion"
            text="Swarm Of Hatred was conceived in 2009 in Santiago, Chile, as a solitary expression of dissonance and hostility. 
            In 2011, the project was reborn under its current name, embracing a more focused and obscure vision. The debut manifestation, The Brotherhood Of The Black Blood (2014), marked the emergence of its sound, followed by Shrine Of Negativity (2018), expanding its sonic and conceptual depth. After years of silence, Obsidian Corridors (2021) surfaced as a transitional work, bridging past and future. A new full-length is currently in preparation."
          />

          <p>
            Our purpose is a demonstration of Hatred.<br/>
            Our action is a wrathful propagation of Chaos.<br/>
            Our principles are development of hate for the masses.<br/>
            Our message is religions shall be destroyed.
          </p>
          <hr/>
          <p>
            <b>Members:</b><br/>
            SDP - Guitars & Vocals<br/>
            CHJ - Lead Guitars<br/>
            Benjamin Aguilera - Bass<br/>
            Machinegun - Drums<br/>
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
