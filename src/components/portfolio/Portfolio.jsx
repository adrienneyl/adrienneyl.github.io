import react from 'react';
import './portfolio.css';
import { Link } from 'react-router-dom';

import Footer from "./../../components/footer/Footer";

import lfsmockup from "./../../assets/lfslc/mockup.jpg";
import epilogmockup from "./../../assets/epilog/epimockup.jpg";

function Portfolio() {
  return (
    <div className="footer-container">
      <div className="padding-container">
        <div className="header-spacer-top"></div>
        <div className="intro_section">
          <p>&#128075; Hi there!</p>
          <div className="header-text-spacer"></div>
          <p>
            I'm a UI/UX designer and full-stack developer who uses their background in
            engineering to create inclusive digital experiences.
          </p>
        </div>
        <div className="header-spacer-bottom"></div>
        <div className="projects">
          <h2>Selected Work</h2>
          <div className="header-text-spacer"></div>
          <div className="proj-cols">
            <div className="proj-left-col">
              <img src={epilogmockup} alt="epilog mockup"></img>
              <div className="header-text-spacer"></div>
              <h3 className="port-subheading">EpiLog - Seizure Tracking App</h3>
              <p>Providing a platform for people with epilepsy to track their condition.</p>
              <p>
                <Link to="/project-epilog">View</Link>
              </p>
            </div>
            <div className="proj-right-col">
              <img src={lfsmockup} alt="lfs mockup"/>
              <div className="header-text-spacer"></div>
              <h3 className="port-subheading">UBC LFS LC Website Redesign</h3>
              <p>Refreshing an internal faculty website to better serve its audience.</p>
              <p>
                <Link to="/project-lfslc">View</Link>
              </p>
            </div>
          </div>

        </div>
      </div>

      <Footer />

    </div>
  )
}

export default Portfolio;