import React from 'react';
import "./contact.css";
import ContactIcons from './ContactIcons.jsx';

const Contact = () => {
    return (
        <section className="contact container section" id='contact'>
            <h2 className="section__title">Get In Touch</h2>

            <ContactIcons />
            
        </section>
    )
}

export default Contact