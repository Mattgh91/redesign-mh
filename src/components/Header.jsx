import React, { Component } from 'react';
import { HeaderContainer, HeaderItem } from './Animations';
import '../styles/header.scss';

const scrollFunc = param => {
    const scrollToThis = document.querySelector(`.${param}`);
    scrollToThis.scrollIntoView({
        behavior: 'smooth',
    });
};

class Header extends Component {
    constructor(props){
        super(props);

        this.state = {
            isScrolled: false,
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
           if (window.pageYOffset > 0) {
               this.setState({
                   isScrolled: true,
               });
           } else {
               this.setState({
                   isScrolled: false
               })
           }
        });
    }

    render() {
        const { isScrolled } = this.state;
        return (
            <HeaderContainer pose={isScrolled ? 'scrolled' : 'notScrolled'} className={isScrolled ? 'scrolled' : 'notScrolled'}>
                <HeaderItem onClick={() => scrollFunc('landing')} className="logo">Matt Haynes</HeaderItem>
                <nav>
                    <li>
                        <HeaderItem href="#quotes" onClick={() => scrollFunc('about-me')}>About Me</HeaderItem>
                    </li>
                    <li>
                        <HeaderItem href="#my-projects" onClick={() => scrollFunc('projects')}>My Projects</HeaderItem>
                    </li>
                    <li>
                        <HeaderItem href="#contact" onClick={() => scrollFunc('contact')}>Contact</HeaderItem>
                    </li>
                </nav>
            </HeaderContainer>
        )
    }
}

export default Header;
