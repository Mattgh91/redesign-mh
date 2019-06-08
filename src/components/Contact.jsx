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

        <form name="contact" netlify method="post">
            <input type="hidden" name="form-name" value="contact" />
            <p>
                <label>Your Name: <input type="text" name="name"/></label>
            </p>
            <p>
                <label>Your Email: <input type="email" name="email"/></label>
            </p>
            <p>
                <label>Subject: <input type="text" name="subject"/></label>
            </p>
            <p>
                <label>Message: <textarea name="message"> </textarea></label>
            </p>
            <p>
                <button type="submit">Send</button>
            </p>
        </form>
    </section>
);

export default Contact;
