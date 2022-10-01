import React from 'react';
import './App.css';
import About from './components/about/About';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';
import Services from './components/services/Services';
import Sidebar from './components/sidebar/Sidebar';

const App = () => {
  return (
    <>
      <Sidebar />
      <main className='main'>
        <Home />
        <About />
        <Resume />
        <Portfolio />
        <Blog />
        <Contact />
      </main>
    </>
  )
}

export default App;
