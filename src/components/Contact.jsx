import React, { Component } from 'react';
import {
    ContactFormContainer,
    ContactInput,
    ContactTextArea,
    ContactButton,
    ContactFormSubmitComplete,
} from './Animations';
import '../styles/contact.scss';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
};

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            subject: "",
            message: "",
            submitted: false,
        };
    }

    handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
        })
            .then(() => this.setState({ submitted: true }))
            .catch(error => alert(error));

        e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const {
            name,
            email,
            subject,
            message,
            submitted
        } = this.state;
        return (
            <section className="contact">
                <h3>Get in touch</h3>
                <p>Feel free to get in touch any time! I'd love to hear from you.</p>
                <p>You can use the contact form below, or email me at <a href="mailto:mattgh9152@gmail.com">mattgh9152@gmail.com</a></p>
                <div className="contact__outer">
                    <ContactFormContainer
                        pose={submitted ? 'submitted' : 'notsubmitted'}
                        className="contact__container"
                    >
                        <form onSubmit={this.handleSubmit} className="contact__form">
                            <p className="contact__form-top">
                                <label htmlFor="name">
                                    <span className="vh">Your Name:</span>
                                    <ContactInput
                                        type="text"
                                        name="name"
                                        placeholder="Your name"
                                        required
                                        value={name}
                                        onChange={this.handleChange}
                                    />
                                </label>
                                <label htmlFor="email">
                                    <span className="vh">Your Email:</span>
                                    <ContactInput
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        required
                                        value={email}
                                        onChange={this.handleChange}
                                    />
                                </label>
                            </p>
                            <p>
                                <label htmlFor="subject">
                                    <span className="vh">Subject:</span>
                                    <ContactInput
                                        type="subject"
                                        name="subject"
                                        placeholder="Subject"
                                        value={subject}
                                        onChange={this.handleChange}
                                    />
                                </label>
                            </p>
                            <p>
                                <label htmlFor="message">
                                    <span className="vh">Message:</span>
                                    <ContactTextArea
                                        name="message"
                                        placeholder="Message"
                                        required
                                        value={message}
                                        onChange={this.handleChange}
                                    />
                                </label>
                            </p>
                            <p>
                                <ContactButton type="submit">Send</ContactButton>
                            </p>
                        </form>
                    </ContactFormContainer>
                    <ContactFormSubmitComplete
                        pose={submitted ? 'submitted' : 'notsubmitted'}
                        className="contact__submitted"
                    >
                        <p>Thanks for getting in touch! I'll get back to you as soon as I can.</p>
                    </ContactFormSubmitComplete>
                </div>
            </section>
        );
    }
}

export default Contact;
