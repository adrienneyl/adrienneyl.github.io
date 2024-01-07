import react from 'react';
import './portfolio.css';
import { Link } from 'react-router-dom';

import Footer from "./../../components/footer/Footer";

import lfsmockup from "./../../assets/lfslc/mockup.jpg";

function Portfolio() {
  return (
    <div className="footer-container">
      <div className="padding-container">
        <div className="intro_section">
          <p>
            Hi there! I'm a UI/UX designer and full-stack developer who uses their background in
            engineering to create inclusive digital experiences.
          </p>
        </div>

        <div className="projects">
          <h1>Selected Work</h1>
          <div className="proj-cols">
            <div className="proj-left-col">
              <img></img>
              <p>EpiLog - Seizure Tracking App</p>
              <p>Providing a platform for people with epilepsy to track their condition.</p>
              <p>
                <Link to="/project-epilog">View</Link>
              </p>
            </div>
            <div className="proj-right-col">
              <img src={lfsmockup} alt="lfs mockup"/>
              <p>UBC LFS LC Website Redesign</p>
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