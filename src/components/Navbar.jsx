import { bandData } from '../data/siteData';
import React from 'react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Music', href: '#music' },
  { label: 'Discography', href: '#discography' },
  { label: 'Live', href: '#live' },
  { label: 'Contact', href: '#contact' }
];

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#top" className="navbar__brand">
          {bandData.name}
        </a>

        <nav className="navbar__nav" aria-label="Main navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
