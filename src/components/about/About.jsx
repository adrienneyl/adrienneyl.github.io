import React from "react";
import { Link } from "react-router-dom";
import "./about.css";

import Footer from "./../../components/footer/Footer";

import icon from "./../../assets/real_face.png";

import cafe from "./../../assets/photos/cafe.jpg";
import florist from "./../../assets/photos/florist.jpg";
import needle from "./../../assets/photos/needle.jpg";
import path from "./../../assets/photos/path.jpg";
import pathway from "./../../assets/photos/pathway.jpg";
import silverbell from "./../../assets/photos/silverbell.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


function About() {
  return (
    <div className="footer-container">
      <div className="padding-container">

        <div className="header-spacer-top"></div>

        <div className="about-col-cont">
          <div className="about-card">

            <img src={icon} alt="icon" className="profile-icon" />

            <div className="thick-content-spacer"></div>

            <button className="resume-button">
              <a href="/resumes/DESIGN.pdf" download="ADRIENNE_LEUNG_DESIGN_RESUME">
                Product Design Resume
              </a>
            </button>

            <div className="content-spacer"></div>

            <button className="resume-button">
              <a href="/resumes/FULLSTACK.pdf" download="ADRIENNE_LEUNG_FULLSTACK_RESUME">Full-Stack Dev Resume</a>
            </button>

            <div className="thick-content-spacer"></div>

            <div className="contact-icons">
              <a href="https://www.linkedin.com/in/adrienne-leung/" target="_blank" rel="noreferrer noopener"> 
                <div className="contact-icon">
                  <FontAwesomeIcon icon={faLinkedin} size="2xl" />
                </div>
              </a>
              <a href="https://github.com/adrienneyl" target="_blank" rel="noreferrer noopener">
                <div className="contact-icon">
                  <FontAwesomeIcon icon={faGithub} size="2xl" />
                </div>
              </a>
              <a href="mailto:adrienne.yl07@gmail.com" target="_blank" rel="noreferrer noopener">
                <div className="contact-icon">
                  <FontAwesomeIcon icon={faEnvelope} size="2xl" />
                </div>
              </a>  
            </div>

          </div>

          <div className="about-desc">
            <p className="greeting">&#128075; Hi there - I'm Adrienne!</p>
            <div className="content-spacer"></div>
            <h2 className="proj-heading">&#127861; About Me</h2>
            <p>Here's a short-list of things that I am:</p>
            <ul>
              <li>a computer engineering student @ University of British Columbia (UBC)</li>
              <li>a self-taught UI/UX designer</li>
              <li>a full-stack developer</li>
              <li>a tech lead @ UBC Launch Pad</li>
              <li>a matcha lover and film photographer</li>
            </ul>
            <div className="content-spacer"></div>
            <div>
              <h2 className="proj-heading">&#128187; Skills</h2>
              <p>Here are some of the tools I use/things I can do:</p>
                <ul>
                  <li>Figma</li>
                  <li>UI/UX Design & Research</li>
                  <li>HTML/CSS/Javascript (React, Node, etc.)</li>
                  <li>Python, Java, Git (VCS)</li>
                </ul>
            </div>
          </div>
        </div>
        <div className="content-spacer"></div>
        <div className="about-col-cont">
          <div></div>
          <div>
            <h2 className="proj-heading">&#128247; Photography</h2>
            <p>Here's a small gallery of my favorite film photos I've ever taken:</p>
            <div className="content-spacer"></div>
            <div className="photo-four-col">
              <img src={florist} />
              <img src={needle} />
              <img src={pathway}/>
              <img src={path} />
            </div>
            <div className="thin-content-spacer"></div>
            <div className="photo-two-col">
              <img src={cafe} />
              <img src={silverbell} />
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default About;