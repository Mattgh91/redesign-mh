import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faFreeCodeCamp, faCodepen } from '@fortawesome/free-brands-svg-icons';
import '../styles/footer.scss';

const socialIcons = [
    { iconName: faFreeCodeCamp, link: 'https://www.freecodecamp.org/mattgh91/' },
    { iconName: faCodepen, link: 'https://codepen.io/Mattgh9152/' },
    { iconName: faLinkedinIn, link: 'https://www.linkedin.com/in/matt-haynes-43ba20a0/' },
];

const Footer = () => (
    <footer>
        {socialIcons.map(socialIcon => {
            return (
                <a href={socialIcon.link} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={socialIcon.iconName} />
                </a>
            );
        })}
    </footer>
);

export default Footer;
