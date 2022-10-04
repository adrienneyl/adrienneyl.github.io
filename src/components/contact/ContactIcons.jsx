import React from 'react'

const ContactIcons = () => {
    return (
        <div className="contact__icons">
            <a href="https://github.com/adrienneyl" className="contact__icons-link">
                <i class="fa-brands fa-github fa-2xl"></i>
            </a>

            <a href="https://www.linkedin.com/in/adrienne-leung/" className="contact__icons-link">
                <i class="fa-brands fa-linkedin fa-2xl"></i>
            </a>

            <a href="https://adrienneleung.carrd.co/" className="contact__icons-link">
                <i class="fa-solid fa-camera-retro fa-2xl"></i>
            </a>

            <a href="mailto:adrienne.yl07@gmail.com" className="contact__icons-link">
                <i class="fa-solid fa-envelope fa-2xl"></i>
            </a>
        </div>
    )
}

export default ContactIcons