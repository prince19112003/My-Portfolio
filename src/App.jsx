import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Cursor from './components/Cursor'

const App = () => {
  return (
    <div className='bg-[#0e0c1e] w-full '>
      <Cursor/>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Contact />

    </div>
  );
};

export default App;
