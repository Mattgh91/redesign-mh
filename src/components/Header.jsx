import React, { PureComponent } from 'react';
import scrollToComponent from 'react-scroll-to-component';
import { PoseGroup } from 'react-pose';
import { HeaderContainer, HeaderItem, HeaderUl, HeaderLi } from './Animations';
import '../styles/header.scss';
import '../styles/_BurgerMenu.scss';

class Header extends PureComponent {
    constructor(props){
        super(props);

        this.state = {
            isScrolled: false,
            showNav: false,
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
                    isScrolled: false,
                })
            }
        });
    }

    toggleMenu = () => {
        const { showNav } = this.state;
        this.setState({
           showNav: !showNav,
        });
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', () => {});
    }

    render() {
        const { isScrolled, showNav } = this.state;
        const { childRefs } = this.props;
        let landing;
        let clients;
        let contact;
        let aboutMe;

        for (let i = 0; i < childRefs.length; i +=1) {
            if (childRefs[i].refIndex === 'landing') {
                landing = childRefs[i].childRefs.current;
            }
            if (childRefs[i].refIndex === 'aboutMe') {
                aboutMe = childRefs[i].childRefs.current;
            }
            if (childRefs[i].refIndex === 'clients') {
                clients = childRefs[i].childRefs.current;
            }
            if (childRefs[i].refIndex === 'contact') {
                contact = childRefs[i].childRefs.current;
            }
        }

        return (
            <HeaderContainer
                pose={isScrolled ? 'scrolled' : 'notScrolled'}
                className={isScrolled ? 'scrolled' : 'notScrolled'}
            >
                <HeaderItem
                    href="#"
                    onClick={
                        (e) => scrollToComponent(
                            landing,
                            { offset: 0, align: 'top', duration: 1500},
                            e.preventDefault(),
                        )
                    }
                    className="logo"
                >
                    Matt Haynes
                </HeaderItem>

                <button
                    className={`mobile ${showNav ? 'open' : 'closed'}`}
                    onClick={this.toggleMenu}
                >
                    <div className="hamburger">
                        <span> </span>
                        <span> </span>
                        <span> </span>
                    </div>
                    <div className="cross">
                        <span> </span>
                        <span> </span>
                    </div>
                    <span className="vh">Toggle Menu</span>
                </button>

                <nav>
                    <HeaderUl pose={showNav ? 'show' : 'hide'}>
                        <PoseGroup>
                            <HeaderLi key={0}>
                                <HeaderItem
                                    href="#aboutMe"
                                    onClick={
                                        (e) => {
                                            this.toggleMenu();
                                            scrollToComponent(
                                                aboutMe,
                                                { offset: -100, align: 'top', duration: 1500},
                                                e.preventDefault()
                                            );
                                        }
                                    }
                                >
                                    About Me
                                </HeaderItem>
                            </HeaderLi>
                            <HeaderLi key={1}>
                                <HeaderItem
                                    href="#clients"
                                    onClick={
                                        (e) => {
                                            this.toggleMenu();
                                            scrollToComponent(
                                                clients,
                                                { offset: -100, align: 'top', duration: 1500},
                                                e.preventDefault(),
                                            );
                                        }
                                    }

                                >
                                    My Work
                                </HeaderItem>
                            </HeaderLi>
                            <HeaderLi key={2}>
                                <HeaderItem
                                    href="#contact"
                                    onClick={
                                        (e) => {
                                            this.toggleMenu();
                                            scrollToComponent(
                                                contact,
                                                { offset: -100, align: 'top', duration: 1500},
                                                e.preventDefault(),
                                            );
                                        }
                                    }
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
