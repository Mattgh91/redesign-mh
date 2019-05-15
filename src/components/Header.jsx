import React from 'react';
import '../styles/header.scss';

const Header = () => (
    <header>
        <p>Matt Haynes</p>
        <nav>
            <li>
                <a href="#about-me">About Me</a>
            </li>
            <li>
                <a href="#my-projects">My Projects</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
        </nav>
    </header>
);

export default Header;
