import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/about/About';
import Lfslc from './components/lfslc/Lfslc';
import Epilog from './components/epilog/Epilog';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/project-lfslc" element={<Lfslc />} />
        <Route path="/project-epilog" element={<Epilog />} />
      </Routes>
      
    </div>
  );
}

export default App;
