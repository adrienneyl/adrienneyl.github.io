import react from 'react';
import { HashLink } from 'react-router-hash-link';
import './epilog.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen, faVideo, faBell, faCircleUser } from '@fortawesome/free-solid-svg-icons';

import Footer from "./../../components/footer/Footer";

import widemockup from "./../../assets/epilog/epiwidemockup.jpg";

import sketch1 from "./../../assets/epilog/sketch1.jpg";
import sketch2 from "./../../assets/epilog/sketch2.jpg";
import sketch3 from "./../../assets/epilog/sketch3.jpg";
import sketch4 from "./../../assets/epilog/sketch4.jpg";

import lofi1 from "./../../assets/epilog/lofi1.jpg";
import lofi2 from "./../../assets/epilog/lofi2.jpg";
import lofi3 from "./../../assets/epilog/lofi3.jpg";
import lofi4 from "./../../assets/epilog/lofi4.jpg";

import midfi1 from "./../../assets/epilog/midfi1.jpg";
import midfi2 from "./../../assets/epilog/midfi2.jpg";
import midfi3 from "./../../assets/epilog/midfi3.jpg";
import midfi4 from "./../../assets/epilog/midfi4.jpg";

import branding from "./../../assets/epilog/branding.jpg";

import hifi1 from "./../../assets/epilog/hifi1.jpg";
import hifi2 from "./../../assets/epilog/hifi2.jpg";
import hifi3 from "./../../assets/epilog/hifi3.jpg";
import hifi4 from "./../../assets/epilog/hifi4.jpg";
import hifi5 from "./../../assets/epilog/hifi5.jpg";
import hifi6 from "./../../assets/epilog/hifi6.jpg";

import epijournal from "./../../assets/epilog/epijournal.png";
import seitracker from "./../../assets/epilog/seizuretracker.png";

function Epilog() {
  return (
    <div className="footer-container">
      <div className="proj-col-container">

        <div className="proj-content-container">
          <div>
            <img src={widemockup} alt="epilog mockup" />
            <h1 className="proj-title">EpiLog</h1>
          </div>
          <div className="column-container">
            <div className="col-left">
              <h2 className="proj-heading">Project Overview</h2>
              <p>
                EpiLog is a mHealth mobile app with the purpose of helping people with epilepsy 
                track their seizures and other epilepsy-related symptoms. I worked with one other
                student designer through the entire process of research, ideation, prototyping,
                and testing.
              </p>
            </div>
            <div className="col-right">
              <h2 className="proj-heading">Role</h2>
              <ul>
                <li>UI/UX Design</li>
                <li>User research</li>
                <li>User testing</li>
              </ul>
            </div>
          </div>
          <div className="thin-content-spacer"></div>
          <div className="proj-body-container">
            <h2 className="proj-heading">Problem Space</h2>
            <p>
              Epilepsy is a neurological disorder that can result in seizures and other 
              long-lasting symptoms. Common treatments include medication, diets, and surgery. 
              Every person with epilepsy must be constantly alert for anything that 
              could be a symptom or trigger of an oncoming seizure. <b>Recognizing patterns in 
              triggers can benefit treatment</b> - an effective way to do this is by using an app 
              to track the condition.
            </p>
          </div>
          <div className="content-spacer" id="process"></div>
          <div className="proj-body-container">
            <h2 className="proj-heading">Design Process Overview</h2>
            <p>
              The design process for this project was a little different from your standard
              "design a mobile app for a client" project. Our stakeholder was a fellow student
              who had epilespy and had a list of proposed features she wanted the app to have.
              Hence, we verified her list via our own research and proceeded to design the app.
            </p>
            <div className="content-spacer" id="research"></div>
            <h3 className="proj-subheading">Research</h3>
            <p><b>Epilepsy is:</b></p>
            <ul>
              <li>characterized by seizures, symptoms, and triggers</li>
              <li>different for everyone who has it</li>
              <li>treatable with various methods</li>
            </ul>
            <div className="thin-content-spacer"></div>
            <p>
              Epilepsy symptoms and seizures can occur at any time and can result in medical
              emergencies - it is therefore paramount to <b>track and observe triggers</b> to 
              aid in recognizing potential symptoms and seizures to prevent them.
            </p>
            <div className="content-spacer"></div>
            <p><b>Market Research</b></p>
            <table className="epi-table">
              <tr>
                <td className="empty-cell"></td>
                <td className="empty-cell">
                  <img src={epijournal} alt="epilepsy journal app icon" className="app-icon" />
                </td>
                <td className="empty-cell">
                  <img src={seitracker} alt="seizure tracker app icon" className="app-icon" />
                </td>
              </tr>
              <tr>
                <th>Criteria</th>
                <th>Epilepsy Journal</th>
                <th>Seizure Tracker</th>
              </tr>
              <tr>
                <td>Track seizures (live or after)</td>
                <td>
                  <FontAwesomeIcon icon={faCircleCheck} size="2xl" />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCircleCheck} size="2xl" />
                </td>
              </tr>
              <tr>
                <td>Track symptoms only</td>
                <td>
                  <FontAwesomeIcon icon={faCircleXmark} size="2xl" />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCircleXmark} size="2xl" />
                </td>
              </tr>
              <tr>
                <td>Medication data*</td>
                <td>
                  <FontAwesomeIcon icon={faCircleCheck} size="2xl" />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCircleCheck} size="2xl" />
                </td>
              </tr>
              <tr>
                <td>Reminders (medication, refill, appointments)</td>
                <td>
                  <FontAwesomeIcon icon={faCircleXmark} size="2xl" />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCircleXmark} size="2xl" />
                </td>
              </tr>
              <tr>
                <td>Charts and graphs</td>
                <td>
                  <FontAwesomeIcon icon={faCircleCheck} size="2xl" />
                </td>
                <td>
                  <FontAwesomeIcon icon={faCircleCheck} size="2xl" />
                </td>
              </tr>
              <tr>
                <td>Pros</td>
                <td>Ability to directly export data into PDF</td>
                <td>Ability to sync with website interface</td>
              </tr>
              <tr>
                <td>Cons</td>
                <td>Confusing/outdated interface, lack of CTAs</td>
                <td>Confusing/outdated interface, lack of CTAs</td>
              </tr>
            </table>
            <div className="content-spacer"></div>
            <p>
              From analyzing what exists currently on the market, there is an opportunity to create
              a platform that expands upon existing features in a modern and intuitive interface, 
              inherently setting it apart from other competitors.
            </p>
            <div className="thick-content-spacer" id="ideation"></div>
            <h3 className="proj-subheading">Ideation/Validation</h3>
            <p>
              After discussing with our stakeholder, we decided the following were the most important 
              features to design for:
            </p>
            <div className="content-spacer"></div>
            <div className="four_col_cont">
              <div className="idea-col">
                <FontAwesomeIcon icon={faBookOpen} size="2xl" className="idea-icon" />
                <div className="thin-content-spacer"></div>
                <p>Seizure/symptom tracking system</p>
              </div>
              <div className="idea-col">
                <FontAwesomeIcon icon={faVideo} size="2xl" className="idea-icon" />
                <div className="thin-content-spacer"></div>
                <p>Live recording for seizures</p>
              </div>
              <div className="idea-col">
                <FontAwesomeIcon icon={faBell} size="2xl" className="idea-icon" />
                <div className="thin-content-spacer"></div>
                <p>Notification reminders</p>
              </div>
              <div className="idea-col">
                <FontAwesomeIcon icon={faCircleUser} size="2xl" className="idea-icon" />
                <div className="thin-content-spacer"></div>
                <p>Personal in-app profile</p>
              </div>
            </div>
            
            <div className="thick-content-spacer"></div>
            <p><b>Sketches</b></p>
            <p>Below are some initial sketches I did during the feature ideation session with the team.</p>
            <div className="content-spacer"></div>

            <div className="two_col_cont">
              <img src={sketch1} alt="sketch 1" />
              <img src={sketch2} alt="sketch 2" />
            </div>
            <div className="two_col_cont">
              <img src={sketch3} alt="sketch 3" />
              <img src={sketch4} alt="sketch 4" />
            </div>

            <div className="content-spacer" id="prototyping"></div>
            <h3 className="proj-subheading">Prototyping</h3>
            <p><b>Low fidelity</b></p>
            <p>
              After splitting up the proposed features with my design partner, we began designing 
              individually. Below are some of the low fidelity pages that I designed.
            </p>
            <div className="thin-content-spacer"></div>
            <div className="four_col_cont">
              <img src={lofi1} alt="lofi 1" />
              <img src={lofi2} alt="lofi 2" />
              <img src={lofi3} alt="lofi 3" />
              <img src={lofi4} alt="lofi 4" />
            </div>
            <div className="thick-content-spacer"></div>
            <p><b>Mid fidelity</b></p>
            <p>
              My design partner and I came back together to combine our designs. Through this process, 
              we discussed how to make the interface intuitive to users. We decided that we would use 
              card-style sections and common iconography as familiar elements from other apps to reduce 
              the overall learning curve a new user would have with the app.
            </p>
            <div className="thin-content-spacer"></div>
            <div className="four_col_cont">
              <img src={midfi1} alt="midfi 1" />
              <img src={midfi2} alt="midfi 2" />
              <img src={midfi3} alt="midfi 3" />
              <img src={midfi4} alt="midfi 4" />
            </div>
            <div className="thick-content-spacer"></div>
            <p><b>Branding</b></p>
            <p>
              After combining our designs, we worked with our stakeholder to determine an appropriate color 
              scheme for the app. As epilepsy is represented by Purple Day and by extension, the color purple, 
              we decided to make that the main color of app. We chose to use muted primary and lighter colors 
              to highlight different sections in a non-intrusive manner.
            </p>
            <div className="center">
              <img src={branding} alt="branding" className="branding" />
            </div>
            <div className="content-spacer"></div>
            <p><b>High fidelity</b></p>
            <p>
              Below are a few pages from our high-fidelity prototype that we applied our branding color scheme to.
            </p>
            <div className="thin-content-spacer"></div>
            <div className="three_col_cont">
              <img src={hifi1} alt="hifi 1" />
              <img src={hifi2} alt="hifi 2" />
              <img src={hifi3} alt="hifi 3" />
            </div>
            <div className="three_col_cont">
              <img src={hifi4} alt="hifi 4" />
              <img src={hifi5} alt="hifi 5" />
              <img src={hifi6} alt="hifi 6" />
            </div>
            <div className="thick-content-spacer" id="testing"></div>
            <h3 className="proj-subheading">User Testing</h3>
            <p>
              After finalizing our high fidelity designs, we proceeded with user testing. We reached out to multiple 
              people with epilepsy and their families to test a prototype of our app. Feedback was positive with a 
              few suggestions for improvements for the features.
            </p>
          </div>
          <div className="content-spacer" id="prototype"></div>
          <div>
            <h2 className="proj-heading">View Prototype</h2>
            <p>Click <a 
            href="https://www.figma.com/proto/dLlXr445OtniPCKEZIOvgZ/EpiLog%3A-Seizure-Tracking-App?page-id=802%3A2966&type=design&node-id=859-4253&viewport=618%2C449%2C0.11&t=kXaHk6up1bnsKBZg-1&scaling=min-zoom&starting-point-node-id=859%3A4253&mode=design" 
            target="_blank" rel="noreferrer noopener">here</a> to 
            view the prototype on Figma.</p>
          </div>
        </div>

        <div className="proj-toc-container">
          <HashLink to="/project-epilog#">
            <p>Overview</p>
          </HashLink>
          <HashLink to="/project-epilog#process">
            <p>Design Process</p>
          </HashLink>
          <HashLink to="/project-epilog#research">
            <p>Research</p>
          </HashLink>
          <HashLink to="/project-epilog#ideation">
            <p>Ideation/Validation</p>
          </HashLink>
          <HashLink to="/project-epilog#prototyping">
            <p>Prototyping</p>
          </HashLink>
          <HashLink to="/project-epilog#testing">
            <p>User Testing</p>
          </HashLink>
          <HashLink to="/project-epilog#prototype">
            <p>View Prototype</p>
          </HashLink>

        </div>

      </div>

      <Footer />

    </div>
  )
}

export default Epilog;