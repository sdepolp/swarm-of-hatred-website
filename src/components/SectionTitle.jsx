import React from 'react';

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="section-title">
      {eyebrow ? <span className="section-title__eyebrow">{eyebrow}</span> : null}
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

export default SectionTitle;
