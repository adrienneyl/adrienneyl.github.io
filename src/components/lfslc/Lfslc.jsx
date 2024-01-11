import React from 'react';
import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import './lfslc.css';

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
                I led the redesign and implemented the changes with input and feedback from my 
                colleagues at the Learning Centre, as well as faculty members and staff.
              </p>
            </div>
            <div className="col-right">
              <h2 className="proj-heading">Role</h2>
              <ul>
                <li>UX Designer</li>
                <li>UI Designer</li>
                <li>Front-end Developer</li>
              </ul>
            </div>
          </div>
          <div className="proj-body-container">
            <h2 className="proj-heading">Why was a redesign needed?</h2>
            <ul>
              <li>Information was laid out in a way that did not highlight any specific points or 
                sections to the user, making it incredibly difficult to skim
              </li>
              <li>
                Many pages lacked call to actions - users were often unsure of the page’s purpose 
                and where to go or what to do next
              </li>
              <li>
                The website lacked visuals and was extremely text-heavy, making the layout very 
                cluttered and difficult to navigate
              </li>
              <li>
                There were many standalone pages that were created but never maintained or updated
              </li>
              <li>
                The faculty had just changed its branding identity and the website was out of sync 
                with said changes
              </li>
            </ul>
          </div>
          <div className="proj-body-container">
            <h2 className="proj-heading">The Redesign</h2>
            <p>
              Shown below is a side by side comparison of the old and redesigned version of a 
              selection of pages from the website. Some of the key changes include improved 
              information architecture, as well as new visuals that are consistent with the 
              faculty’s new branding.
            </p>
            <h3 className="proj-subheading">Pages</h3>
            <div>
              <div className="slide-show">
                <button onClick={() => setPicState(0)}>Home</button>
                <button onClick={() => setPicState(1)}>Booking</button>
                <button onClick={() => setPicState(2)}>Support Catalogue</button>
                <button onClick={() => setPicState(3)}>Teaching Resources</button>
                <button onClick={() => setPicState(4)}>Tech Resources</button>
                <button onClick={() => setPicState(5)}>Events</button>
              </div>
              <Proto picState={picState} />
            </div>
          </div>
          <div>
            <h1>The Design Process</h1>
            <h2>Initial User Research</h2>
            <p>
              I started off the project by conducting some usability tests with my colleagues 
              at the Learning Centre and faculty staff, as I was previously told that the website 
              was very disorganized and hard to navigate. After fully exploring the website on 
              my own and becoming familiar with the old design, I asked each colleague and faculty 
              staff to show me how they would navigate to specific pages, specifically a top-level 
              page, a sub-category page, and a specific sub-page. 
            </p>
            <h3>Results</h3>
            <ul>
              <li>Top-level pages were navigated to without any extra clicks 100% of the time</li>
              <li>Sub-category pages were navigated to without any extra clicks 70% of the time</li>
              <li>Specific sub-pages were navigated to without any extra clicks 30% of the time</li>
            </ul>
            <p>
              From these observations, I found that users were often looking for sub-category pages 
              in different categories than the one it was currently listed in. Additionally, specific 
              sub-pages were difficult to navigate to and users often had to click through multiple 
              extraneous pages to find what they were looking for.
            </p>
            <h2>Previous State</h2>
            <p>
              Given the observations from the initial user research, I identified that the information 
              architecture could likely be improved on. I started off by mapping out the website 
              structure as denoted by the navigation bar and by observing the sections present on 
              each main category page. As I did this, I noticed that the main pages themselves lacked 
              relevant information or clear CTAs - most of the information was contained in sub-pages 
              that required extra clicks to navigate to.
            </p>
            <p>
              Below is the previous organization of the pages on the website. The main pages/categories 
              are shown in filled-blue and the bullet points detail the sections of each main page. 
              Sub-pages of each category are outlined in blue.
            </p>
            <img src={pia} alt="previous state diagram" />
            <h2>New State</h2>
            <p>
              After analyzing the current website state, it became apparent that the website would 
              benefit from a restructuring. I began this process by re-establishing the categories that 
              were most valuable to visitors of the website. I identified that the booking and events 
              categories, as well as the homepage were most essential to visitors to the website. I 
              further identified that a majority of the resources and news posts would be directly 
              linked to by a Learning Centre staff member - these categories would therefore serve 
              more as information repositories, rather than pages for users to explore. Once the 
              significance of each category was identified, I proceeded to reorganize and refactor 
              each page.
            </p>
            <p>
              Below is the current organization of the pages on the website. Highlighted in yellow 
              are the changes that were made to the existing state. In comparison to the previous state, 
              this new state also has fewer sub-pages. Many of those sub-pages were extraneous or no 
              longer being maintained and therefore could be removed or condensed into other pages.
            </p>
            <img src={nia} alt="new state diagram" />
            <h2>Laying Out the Content</h2>
            <div className="three_col_cont">
              <img src={home_wf} alt="home page wireframe"/>
              <img src={booking_wf} alt="booking page wireframe" />
              <img src={resource_wf} alt="resource page wireframe" />
            </div>
            <div>
              <h1>User Feedback</h1>
              <p>
                While I was unable to conduct usability tests after the redesign due to time constraints, 
                one of my colleagues at the Learning Centre conducted a short analytics before and after 
                comparison. He found that overall, page conversion rates and user flows through the website 
                had improved and that users were now able to find what they needed on the website more frequently.
              </p>
            </div>
            <div>
              <h1>Final Product</h1>
              <p>
                Below is a selection of the final designs for the webpages. Click here to view the website 
                (design is subject to change and may not necessarily reflect my design).
              </p>
            </div>
          </div>

        </div>

        <div className="proj-toc-container">   
          <HashLink to="/project-lfslc#overview">
            <p>Overview</p>
          </HashLink>
          <p>Why a Redesign?</p>
          <p>Redesign</p>
          <p>Design Process</p>
          <p>User Feedback</p>
          <p>Final Product</p>
        </div>

      </div>
    
      <Footer />
      
    </div>

  )
}

export default Lfslc;