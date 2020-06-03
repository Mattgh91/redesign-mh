import React, { Component } from 'react';
import { motion } from 'framer-motion';
import '../styles/contact.scss';

const contactFormContainer = {
    notSubmitted: {
        y: 0,
        scale: 1,
        opacity: 1,
        display: 'block',
        transition: {
            duration: .75,
        },
    },
    submitted: {
        y: 35,
        scale: 0.65,
        opacity: 0,
        transition: {
            duration: .75,
        },
        transitionEnd: {
            display: 'none',
        },
    },
};
const contactFormSubmitComplete = {
    notSubmitted: {
        height: 0,
        display: 'none',
        transition: {
            duration: .75,
        },
    },
    submitted: {
        height: '100%',
        display: 'flex',
        transition: {
            duration: .75,
        },
    },
};

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
};

class Contact extends Component {
    constructor(props) {
        super(props);

        this.contactSection = React.createRef();
        this.state = {
            name: "",
            email: "",
            subject: "",
            message: "",
            submitted: false,
        };
    }

    componentDidMount() {
        const { passRefUpward } = this.props;
        passRefUpward('contact', this.contactSection);
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
            <section className="contact" id="contact" ref={this.contactSection}>
                <h3>Get in touch</h3>
                <p>Feel free to get in touch any time! I'd love to hear from you.</p>
                <p>You can use the contact form below, or email me at <a href="mailto:mattgh9152@gmail.com">mattgh9152@gmail.com</a></p>
                <div className="contact__outer">
                    <motion.div
                        animate={submitted ? 'submitted' : 'notSubmitted'}
                        variants={contactFormContainer}
                        className="contact__container"
                    >
                        <form onSubmit={this.handleSubmit} className="contact__form" netlify-honeypot="bot-field">
                            <p className="contact__form-top">
                                <label htmlFor="name">
                                    <span className="vh">Your Name</span>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your name"
                                        required
                                        value={name}
                                        onChange={this.handleChange}
                                    />
                                </label>
                                <label htmlFor="email">
                                    <span className="vh">Your Email</span>
                                    <input
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
                                    <span className="vh">Subject</span>
                                    <input
                                        type="subject"
                                        name="subject"
                                        placeholder="Subject"
                                        value={subject}
                                        onChange={this.handleChange}
                                    />
                                </label>
                            </p>
                            <p className="vh">
                                <label>Don’t fill this out if you're human: <input name="bot-field"/></label>
                            </p>
                            <p>
                                <label htmlFor="message">
                                    <span className="vh">Message</span>
                                    <textarea
                                        name="message"
                                        placeholder="Message"
                                        required
                                        value={message}
                                        onChange={this.handleChange}
                                    />
                                </label>
                            </p>
                            <p>
                                <motion.button
                                    type="submit"
                                    whileHover={{
                                        backgroundColor: 'rgba(9, 128, 165, 1)',
                                        boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
                                    }}
                                >
                                    Send
                                </motion.button>
                            </p>
                        </form>
                    </motion.div>
                    <motion.div
                        animate={submitted ? 'submitted' : 'notSubmitted'}
                        variants={contactFormSubmitComplete}
                        className="contact__submitted"
                    >
                        <p>Thanks for getting in touch! I'll get back to you as soon as I can.</p>
                    </motion.div>
                </div>
            </section>
        );
    }
}

export default Contact;
