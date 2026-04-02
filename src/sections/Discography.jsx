import React, { useMemo, useRef } from 'react';
import SectionTitle from '../components/SectionTitle';
import { releases } from '../data/siteData';

function Discography() {
  const orderedReleases = useMemo(() => {
    return [...releases].reverse();
  }, []);

  const trackRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    isDown.current = true;
    startX.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeft.current = trackRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
  };

  const handleMouseUp = () => {
    isDown.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.2;
    trackRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <section id="discography" className="section section--muted">
      <div className="container">
        <SectionTitle
          eyebrow="Discography"
          title="Manifestations of Hatred"
          text="Recorded assaults across time."
        />

        <div
          ref={trackRef}
          className="release-carousel"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {orderedReleases.map((release) => (
            <article
              key={`${release.title}-${release.year}`}
              className="release-card"
            >
              <div className="release-card__image">
                <img src={release.cover} alt={release.title} draggable="false" />
              </div>

              <div className="release-card__content">
                <span className="release-card__meta">
                  {release.year} · {release.format}
                </span>
                <h3>{release.title}</h3>
                <p>{release.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Discography;