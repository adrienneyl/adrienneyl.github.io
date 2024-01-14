import React from 'react';
import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import './lfslc.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import Footer from "./../../components/footer/Footer";

import widemockup from '../../assets/lfslc/widemockup.jpg';

import oldhome from '../../assets/lfslc/oldhome.jpg';
import oldbooking from '../../assets/lfslc/oldbooking.jpg';
import oldsupport from '../../assets/lfslc/oldsupport.jpg';
import oldteaching from '../../assets/lfslc/oldteach.jpg';
import oldtech from '../../assets/lfslc/oldtech.jpg';
import oldevents from '../../assets/lfslc/oldevents.jpg';

import newhome from '../../assets/lfslc/newhome.jpg';
import newbooking from '../../assets/lfslc/newbooking.jpg'; 
import newsupport from '../../assets/lfslc/newsupport.jpg';
import newteaching from '../../assets/lfslc/newteach.jpg';  
import newtech from '../../assets/lfslc/newtech.jpg';
import newevents from '../../assets/lfslc/newevents.jpg';

import pia from '../../assets/lfslc/pia.jpg';
import nia from '../../assets/lfslc/nia.jpg';

import home_wf from '../../assets/lfslc/hpwf.jpg';
import booking_wf from '../../assets/lfslc/bpwf.jpg';
import resource_wf from '../../assets/lfslc/rwf.jpg';

function Proto({picState}) {
  switch(picState) {
    case 0:
      return (
        <div className="two_col_cont">
          <img src={oldhome} alt="old home page" />
          <img src={newhome} alt="new home page" />
        </div>
      )

    case 1:
      return (
        <div className="two_col_cont">
          <img src={oldbooking} alt="old booking page" />
          <img src={newbooking} alt="new booking page" />
        </div>
      )

    case 2:
      return (
        <div className="two_col_cont">
          <img src={oldsupport} alt="old support page" />
          <img src={newsupport} alt="new support page" />
        </div>
      )

    case 3:
      return (
        <div className="two_col_cont">
          <img src={oldteaching} alt="old teaching page" />
          <img src={newteaching} alt="new teaching page" />
        </div>
      )

    case 4:
      return (
        <div className="two_col_cont">
          <img src={oldtech} alt="old tech page" />
          <img src={newtech} alt="new tech page" />
        </div>
      )

    case 5:
      return (
        <div className="two_col_cont">
          <img src={oldevents} alt="old events page" />
          <img src={newevents} alt="new events page" />
        </div>
      )

    default:
      return (
        <div className="two_col_cont">
          <img src={oldhome} alt="old home page" />
          <img src={newhome} alt="new home page" />
        </div>
      )
  }
}

function Lfslc() {
  const [picState, setPicState] = useState(0);

  const homeStyle = picState === 0 ? "toggle-button-dark" : "toggle-button-light";
  const bookingStyle = picState === 1 ? "toggle-button-dark" : "toggle-button-light";
  const supportStyle = picState === 2 ? "toggle-button-dark" : "toggle-button-light";
  const teachStyle = picState === 3 ? "toggle-button-dark" : "toggle-button-light";
  const techStyle = picState === 4 ? "toggle-button-dark" : "toggle-button-light";
  const eventStyle = picState === 5 ? "toggle-button-dark" : "toggle-button-light";

  return (
    <div className="footer-container">

      <div className="proj-col-container">

        <div className="proj-content-container" id="overview">
          <div>
            <img src={widemockup} alt="lfs mockup" />
            <h1 className="proj-title">UBC LFS LC Website</h1>
          </div>
          <div className="column-container">
            <div className="col-left">
              <h2 className="proj-heading">Project Overview</h2>
              <p>
                The UBC LFS Learning Centre offers IT assistance and multimedia services to 
                UBC's LFS (Land and Food Systems) faculty members, staff, and graduate students. 
                I led and implemented the entire redesign as an intern at the Learning Centre.
              </p>
            </div>
            <div className="col-right">
              <h2 className="proj-heading">Role</h2>
              <ul>
                <li>UI/UX Design</li>
                <li>Front-end Development</li>
              </ul>
            </div>
          </div>
          <div className="content-spacer" id="purpose"></div>
          <div className="proj-body-container">
            <h2 className="proj-heading">Why was a redesign needed?</h2>
            <ul>
              <li>
                Information was difficult to find as a result of poor information architecture
              </li>
              <li>
                Many pages lacked a clear purpose or call to action (CTA)
              </li>
              <li>
                Branding was inconsistent with the faculty's new branding
              </li>
            </ul>
          </div>
          <div className="content-spacer" id="redesign"></div>
          <div className="proj-body-container">
            <h2 className="proj-heading">The Redesign</h2>
            <p>
              Below is a side by side comparison of old and redesigned versions of pages from the website.
              Key changes include improved information architecture, as well as updated visuals.
            </p>
            <div className="content-spacer"></div>
            <div className="center">
              <div className="slide-show">
                <button onClick={() => setPicState(0)} className={homeStyle}>Home</button>
                <button onClick={() => setPicState(1)} className={bookingStyle}>Booking</button>
                <button onClick={() => setPicState(2)} className={supportStyle}>Support Catalogue</button>
                <button onClick={() => setPicState(3)} className={teachStyle}>Teaching Resources</button>
                <button onClick={() => setPicState(4)} className={techStyle}>Tech Resources</button>
                <button onClick={() => setPicState(5)} className={eventStyle}>Events</button>
              </div>
              <div className="content-spacer"></div>
              <div className="thin-content-spacer"></div>
              <div className="two_col_cont">
                <div className="center-text">
                  <h3>PREVIOUS</h3>
                </div>
                <div className="center-text">
                  <h3>NEW</h3>
                </div>
              </div>
              <div className="content-spacer"></div>
              <Proto picState={picState} />
            </div>
          </div>
          <div className="content-spacer" id="process"></div>
          <div className="proj-body-container">
            <h2 className="proj-heading-spacer">The Design Process</h2>
            <h3 className="proj-subheading">Initial User Research</h3>
            <p>
              I started off the project by conducting quick usability tests with my colleagues 
              at the Learning Centre and faculty staff to understand where the user experience
              could be improved. I observed the following:
            </p>
            <div className="content-spacer"></div>
            <div className="check-col-cont">
              <div className="check-col">
                <FontAwesomeIcon icon={faCircleCheck} size="2xl" className="check-icon" />
                <p>Top-level pages were clear and easy to navigate to</p>
                <div className="content-spacer"></div>
              </div>
              <div className="check-col">
                <FontAwesomeIcon icon={faCircleXmark} size="2xl" className="check-icon" />
                <p>All other pages were difficult to navigate to</p>
                <div className="content-spacer"></div>
              </div>
            </div>
            <div className="thin-content-spacer"></div>
            <div className="content-spacer"></div>
            <h3 className="proj-subheading">Previous Information Architecture State</h3>
            <p>
              It was evident that the information architecture needed to be improved. Below is a map
              of the previous information architecture. In the process of creating this map, I noticed
              that the main pages themselves lacked relevant information or clear CTAs - most of the
              information was contained in sub-pages that required extra clicks to navigate to.
            </p>
            <div className="content-spacer"></div>
            <p>
              Main pages/categories are shown in filled-blue and the bullet points detail the sections 
              of each main page. Sub-pages of each category are outlined in blue.
            </p>
            <div className="thin-content-spacer"></div>
            <img src={pia} alt="previous state diagram" />
            <div className="content-spacer"></div>
            <h3 className="proj-subheading">New Information Architecture State</h3>
            <p>
              To improve the information architecture, I restructured the website to have fewer sub-pages by
              either removing and condensing redundant information or re-assigning sub-pages to a different 
              subcategory. This helped to reduce the number of clicks required to navigate to a page and 
              made each page of the website more focused and purposeful. 
            </p>
            <div className="content-spacer"></div>
            <p>
              Below is the updated information architecture. Highlighted in yellow are the changes that were made.
              In comparison to the previous state, this new state has fewer sub-pages.
            </p>
            <div className="thin-content-spacer"></div>
            <img src={nia} alt="new state diagram" />
            <div className="content-spacer"></div>
            <h3 className="proj-subheading">Laying Out the Content</h3>
            <p>
              Below are a few selected mid-fidelity wireframes from the design process. I especially focused on
              refreshing the homepage to better serve as a landing page that highlighted the most significant sections
              of the website.
            </p>
            <div className="content-spacer"></div>
            <div className="three_col_cont">
              <img src={home_wf} alt="home page wireframe"/>
              <img src={booking_wf} alt="booking page wireframe" />
              <img src={resource_wf} alt="resource page wireframe" />
            </div>
            <div className="content-spacer" id="feedback"></div>
            <div>
              <h2 className="proj-heading">User Feedback</h2>
              <p>
                While I was unable to conduct usability tests after the redesign due to time constraints, 
                one of my colleagues at the Learning Centre conducted a short analytics before and after 
                comparison. He found that overall, page conversion rates and user flows through the website 
                had improved greatly.
              </p>
            </div>
            <div className="content-spacer" id="final"></div>
            <div>
              <h2 className="proj-heading">Final Product</h2>
              <p>
                Click <a href="https://lc.landfood.ubc.ca/" target="_blank" rel="noreferrer noopener">here</a> to 
                view the website (subject to change and may not necessarily reflect my design if updated).
              </p>
            </div>
          </div>

        </div>

        <div className="proj-toc-container">   
          <HashLink to="/project-lfslc#overview">
            <p>Overview</p>
          </HashLink>
          <HashLink to="/project-lfslc#purpose">
            <p>Why a Redesign?</p>
          </HashLink>
          <HashLink to="/project-lfslc#redesign">
            <p>Redesign</p>  
          </HashLink>
          <HashLink to="/project-lfslc#process">
            <p>Design Process</p>
          </HashLink>
          <HashLink to="/project-lfslc#feedback">
            <p>User Feedback</p>
          </HashLink>
          <HashLink to="/project-lfslc#final">
            <p>Final Product</p>
          </HashLink>
        </div>

      </div>
    
      <Footer />
      
    </div>

  )
}

export default Lfslc;