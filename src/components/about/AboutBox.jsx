import React from 'react'

const AboutBox = () => {
    return (
        <div className="about__boxes grid">

            <div className="about__box">
                <i className="about__icon icon-fire"></i>

                <div>
                    <h3 className="about__title">5</h3>
                    <span className="about__subtitle">Projects in progress</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-cup"></i>

                <div>
                    <h3 className="about__title">17</h3>
                    <span className="about__subtitle">Cups of london fog</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-game-controller"></i>

                <div>
                    <h3 className="about__title">47</h3>
                    <span className="about__subtitle">Games of TFT</span>
                </div>
            </div>
            
        </div>
    )
}

export default AboutBox