import react from 'react';
import './portfolio.css';
import { Link } from 'react-router-dom';

function Portfolio() {
  return (
    <div>
      <div className="intro_section">
        <p>Hi there!</p>
        <p>I'm Adrienne, a UI/UX designer and full-stack developer who uses their background in engineering to create inclusive digital experiences.</p>
      </div>

      <div className="projects">
        <h1>Selected Work</h1>
        <div className="proj-cols">
          <div className="proj-left-col">
            <img></img>
            <p>EpiLog</p>
            <p>A mHealth mobile app that helps people with epilepsy track their epilepsy-related symptoms.</p>
            <p>
              <Link to="/project-epilog">View</Link>
            </p>
          </div>
          <div className="proj-right-col">
            <img></img>
            <p>UBC LFS LC Website</p>
            <p>Website redesign and rebranding for UBC LFS' Learning Centre.</p>
            <p>
              <Link to="/project-lfslc">View</Link>
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Portfolio;