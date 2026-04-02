import SectionTitle from '../components/SectionTitle';
import { bandData } from '../data/siteData';
import SocialLinks from '../components/SocialLinks';
import React from 'react';

function Contact() {
  return (
    <section id="contact" className="section section--muted">
      <div className="container contact-box">
        <SectionTitle
          eyebrow="Contact"
          title="Booking, press and inquiries"
          text=""
        />

        <a className="contact-email" href={`mailto:${bandData.contactEmail}`}>
          {bandData.contactEmail}
        </a>

        <SocialLinks />
      </div>
    </section>
  );
}

export default Contact;
