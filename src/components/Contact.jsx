import React from 'react';
import '../styles/contact.scss';

const Contact = () => (
    <section className="contact">
        <h3>Contact</h3>
        <form name="contact" netlify netlify-honeypot="bot-field" hidden>
            <input type="text" name="name" />
            <input type="email" name="email" />
            <textarea name="message"> </textarea>
        </form>
    </section>
);

export default Contact;
