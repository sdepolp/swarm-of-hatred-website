import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Music from './sections/Music';
import Discography from './sections/Discography';
import Live from './sections/Live';
import Contact from './sections/Contact';
import React from 'react';

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Music />
        <Discography />
        
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
