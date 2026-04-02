import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} Swarm Of Hatred. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
