import SectionTitle from '../components/SectionTitle';
import { liveDates } from '../data/siteData';
import React from 'react';

function Live() {
  return (
    <section id="live" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Live"
          title="Upcoming rituals"
        />

        <div className="live-list">
          {liveDates.map((show) => (
            <article key={`${show.date}-${show.city}`} className="live-item">
              <div>
                <p className="live-item__date">{show.date}</p>
                <h3>{show.city}</h3>
                <p>{show.venue}</p>
              </div>
              <p className="live-item__note">{show.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Live;
