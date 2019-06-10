import React, { Component } from 'react';
import { PoseGroup } from 'react-pose';
import { HeaderContainer, HeaderItem, HeaderUl, HeaderLi } from './Animations';
import '../styles/header.scss';

class Header extends Component {
    constructor(props){
        super(props);

        this.menu = React.createRef();
        this.mobileButton = React.createRef();
        this.toggleMenu = this.toggleMenu.bind(this);
        this.scrollFunc = this.scrollFunc.bind(this);

        this.state = {
            isScrolled: false,
            showNav: false,
        }
    }

    componentDidMount() {
        window.addEventListener('resize', () => {
            // this.setState({
            //     showNav: false,
            // });
        });

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 0) {
                this.setState({
                    isScrolled: true,
                });
            } else {
                this.setState({
                    isScrolled: false,
                })
            }
        });
    }

    toggleMenu() {
        const { showNav } = this.state;
        this.setState({
           showNav: !showNav,
        });
    }

    scrollFunc(param) {
        const scrollToThis = document.querySelector(`.${param}`);
        scrollToThis.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        });
        this.toggleMenu();
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', () => {});
    }

    render() {
        const { isScrolled, showNav } = this.state;
        return (
            <HeaderContainer
                pose={isScrolled ? 'scrolled' : 'notScrolled'}
                className={isScrolled ? 'scrolled' : 'notScrolled'}
            >
                <HeaderItem
                    href="#/"
                    onClick={() => this.scrollFunc('landing')}
                    className="logo"
                >
                    Matt Haynes
                </HeaderItem>
                <button className="mobile" onClick={this.toggleMenu} ref={this.mobileButton}>
                    <span className="vh">Toggle Menu</span>
                </button>
                <nav>
                    <HeaderUl pose={showNav ? 'show' : 'hide'} ref={this.menu}>
                        <PoseGroup>
                            <HeaderLi key={0}>
                                <HeaderItem
                                    href="#quotes"
                                    onClick={() => this.scrollFunc('about-me')}
                                >
                                    About Me
                                </HeaderItem>
                            </HeaderLi>
                            <HeaderLi key={1}>
                                <HeaderItem
                                    href="#my-projects"
                                    onClick={() => this.scrollFunc('clients')}
                                >
                                    My Work
                                </HeaderItem>
                            </HeaderLi>
                            <HeaderLi key={2}>
                                <HeaderItem
                                    href="#contact"
                                    onClick={() => this.scrollFunc('contact')}
                                >
                                    Contact
                                </HeaderItem>
                            </HeaderLi>
                        </PoseGroup>
                    </HeaderUl>
                </nav>
            </HeaderContainer>
        )
    }
}

export default Header;
