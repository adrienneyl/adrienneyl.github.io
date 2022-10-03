import React from 'react';
import "./about.css";
import Image from "../../assets/real_icon.png"
import AboutBox from './AboutBox';

const About = () => {
    return (
        <section className="about container section" id='about'>
            <h2 className="section__title">About Me</h2>

            <div className="about__container grid">
                <img src={Image} alt="" className="about__img" />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                        Hi there! My name's Adrienne and I'm a computer engineering
                        student at the University of British Columbia. I'm a self-taught
                        UX designer who is passionate about creating designs that are 
                        future-proof, accessible, and inclusive.
                        </p>
                    </div>
                    <div className="about__skills grid">

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Web Development</h3>
                                <span className="skills__number">75%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage web_development"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">50%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui_ux_design"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography"></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About