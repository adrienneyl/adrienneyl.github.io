import React from 'react';
import "./home.css";
import Me from "../../assets/updated_icon.png";
import Shapes from './Shapes';

const Home = () => {
    return (
        <section className="home container" id="home">
            <div className="intro">
                <img src={Me} alt="" className="home__img" />
                <h1 className="home__name">Adrienne Leung</h1>
                <span className="home__education">Front-End Developer and UX Designer</span>
            </div>
            
            <Shapes />
        </section>
    )
}

export default Home