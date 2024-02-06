import react from 'react';
import './portfolio.css';
import { Link, useNavigate } from 'react-router-dom';

import Footer from "./../../components/footer/Footer";

import lfsmockup from "./../../assets/lfslc/mockup.jpg";
import epilogmockup from "./../../assets/epilog/epimockup.jpg";

function Portfolio() {

  const navigate = useNavigate();

  const navigateToEpilog = () => {
    navigate('/project-epilog');
  };

  const navigateToLFSLC = () => {
    navigate('/project-lfslc');
  };

  return (
    <div className="footer-container">
      <div className="padding-container">
        <div className="header-spacer-top"></div>
        <div className="intro_section">
          <p>&#128075; Hi there!</p>
          <div className="header-text-spacer"></div>
          <p>
            I'm a UI/UX designer with full-stack dev. experience who uses their 
            background in engineering to create inclusive digital experiences.
          </p>
        </div>
        <div className="header-spacer-bottom"></div>
        <div className="projects">
          <h2>&#127793; Selected Work</h2>
          <div className="header-text-spacer"></div>
          <div className="proj-cols">
            <div className="proj-left-col">
              <div className="thumbnail-overlay" onClick={navigateToEpilog}>
                <img src={epilogmockup} alt="epilog mockup" className="overlay-img"/>
                <div className="button-overlay">
                  <p className="overlay-text-epi">View</p>
                </div>
              </div>
              <div className="header-text-spacer"></div>
              <h3 className="port-subheading">EpiLog - Seizure Tracking App</h3>
              <p>Providing a platform for people with epilepsy to track their condition.</p>
              <div className="col-spacing"></div>
            </div>
            <div className="proj-right-col">
              <div className="thumbnail-overlay" onClick={navigateToLFSLC}>
                <img src={lfsmockup} alt="lfs mockup" className="overlay-img"/>
                <div className="button-overlay">
                  <p className="overlay-text-lfslc">View</p>
                </div>
              </div>
              <div className="header-text-spacer"></div>
              <h3 className="port-subheading">UBC LFS LC Website Redesign</h3>
              <p>Refreshing an internal faculty website to better serve its audience.</p>
            </div>
          </div>

        </div>
      </div>

      <Footer />

    </div>
  )
}

export default Portfolio;