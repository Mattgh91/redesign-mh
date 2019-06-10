import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faFreeCodeCamp, faCodepen, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import '../styles/footer.scss';

const socialIcons = [
    { iconName: faFreeCodeCamp, link: 'https://www.freecodecamp.org/mattgh91/', text: 'Free Code Camp', id: 1 },
    { iconName: faCodepen, link: 'https://codepen.io/Mattgh9152/', text: 'Code Pen', id: 2 },
    { iconName: faLinkedinIn, link: 'https://www.linkedin.com/in/matt-haynes-43ba20a0/', text: 'LinkedIn', id: 3 },
    { iconName: faGithub, link: 'https://github.com/Mattgh91', text: 'Github', id: 4 },
    { iconName: faStackOverflow, link: 'https://stackoverflow.com/users/2723138/matt', text: 'Stackoverflow', id: 5 },
];

const Footer = () => (
    <footer>
        <nav id="footerNav" className="footer-nav">
            {socialIcons.map(socialIcon => {
                return (
                    <a href={socialIcon.link} target="_blank" rel="noopener noreferrer" key={socialIcon.id}>
                        <FontAwesomeIcon icon={socialIcon.iconName} />
                        <span className="vh">{socialIcon.text}</span>
                    </a>
                );
            })}
        </nav>
    </footer>
);

export default Footer;
