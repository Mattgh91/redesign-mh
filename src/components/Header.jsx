import React from 'react';
import '../styles/header.scss';

const scrollFunc = param => {
    const scrollToThis = document.querySelector(`.${param}`);
    scrollToThis.scrollIntoView({
        behavior: 'smooth',
    });
};

const Header = () => (
    <header>
        <p>Matt Haynes</p>
        <nav>
            <li>
                <a href="#quotes" onClick={() => scrollFunc('quotes')}>About Me</a>
            </li>
            <li>
                <a href="#my-projects" onClick={() => scrollFunc('my-projects')}>My Projects</a>
            </li>
            <li>
                <a href="#contact" onClick={() => scrollFunc('contact')}>Contact</a>
            </li>
        </nav>
    </header>
);

export default Header;
