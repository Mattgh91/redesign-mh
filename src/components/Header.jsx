import React, { PureComponent } from 'react';
import scrollToComponent from 'react-scroll-to-component';
import { motion } from 'framer-motion';
import '../styles/header.scss';
import '../styles/_BurgerMenu.scss';

const headerContainer = {
    notScrolled: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        boxShadow: '0 0 0px rgba(0, 0, 0, 0)',
    },
    scrolled: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.26)',
    },
};
const headerItem = {
    notScrolled: {
        color: '#fff',
    },
    scrolled: {
        color: '#0980A5',
    },
};
const headerLogoG = {
    notScrolled: { fill: '#ffffff', },
    scrolled: {
        fill: '#111432',
        transition: {
            duration: 1,
            delay: 1.25,
        },
    },
};
const mobileHeaderUl = {
    show: {
        backgroundColor: '#111432',
        display: 'flex',
        transition: {
            staggerChildren: 0.15,
            when: 'beforeChildren',
            duration: 0.35,
        },
    },
    hide: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        transition: {
            staggerChildren: 0.15,
            when: 'afterChildren',
            duration: 0.35,
            staggerDirection: -1,
        },
        transitionEnd: {
            display: 'none',
        },
    },
};
const mobileHeaderLi = {
    show: {
        y: 0,
        opacity: 1,
        transition: {
            duration: .25,
        }
    },
    hide: {
        y: 35,
        opacity: 0,
        transition: {
            duration: .25,
        }
    },
};

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
        }, { passive: true });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 1024) {
                this.setState({
                    showNav: false,
                });
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
        window.removeEventListener('resize', () => {});
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
            <motion.header
                animate={isScrolled ? 'scrolled' : 'notScrolled'}
                variants={headerContainer}
                className={isScrolled ? 'scrolled' : 'notScrolled'}
            >
                <motion.a
                    href="#topHome"
                    variants={headerItem}
                    animate={isScrolled ? 'scrolled' : 'notScrolled'}
                    onClick={
                        (e) => scrollToComponent(
                            landing,
                            { offset: 0, align: 'top', duration: 1500},
                            e.preventDefault(),
                        )
                    }
                    className="logo"
                >
                    <svg width="50px" height="50px" viewBox="0 0 192 192">
                        <motion.g
                            variants={headerLogoG}
                            animate={isScrolled && !showNav ? 'scrolled' : 'notScrolled'}
                            id="Page-1"
                            stroke="#111432"
                            strokeWidth="5"
                            fill="#fff"
                            fillRule="evenodd"
                        >
                            <path d="M 0 1.13686838e-13 31.1503906 1.13686838e-13 62.4804688 151.501953 92.9492188 1.13686838e-13 123.033203 1.13686838e-13 123.033203 86.3964844 169.990234 86.3964844 169.990234 1.13686838e-13 192 1.13686838e-13 192 192 169.990234 192 169.990234 106.341797 123.033203 106.341797 123.033203 192 101.802734 192 101.802734 43.7714844 72.2304688 192 51.4726562 192 20.4707031 43.7714844 20.4707031 192 0 192z"/>
                        </motion.g>
                    </svg>
                </motion.a>

                <button
                    className={`mobile ${showNav ? 'open' : 'closed'}`}
                    onClick={this.toggleMenu}
                >
                    <div className="hamburger">
                        <span />
                        <span />
                        <span />
                    </div>
                    <div className="cross">
                        <span />
                        <span />
                    </div>
                    <span className="vh">Toggle Menu</span>
                </button>

                <nav>
                    <motion.ul
                        animate={showNav ? 'show' : 'hide'}
                        variants={mobileHeaderUl}
                        initial={false}
                    >
                            <motion.li
                                key={0}
                                variants={mobileHeaderLi}
                            >
                                <motion.a
                                    variants={headerItem}
                                    animate={isScrolled ? 'scrolled' : 'notScrolled'}
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
                                </motion.a>
                            </motion.li>
                            <motion.li
                                key={1}
                                variants={mobileHeaderLi}
                            >
                                <motion.a
                                    variants={headerItem}
                                    animate={isScrolled ? 'scrolled' : 'notScrolled'}
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
                                </motion.a>
                            </motion.li>
                            <motion.li
                                key={2}
                                variants={mobileHeaderLi}
                            >
                                <motion.a
                                    variants={headerItem}
                                    animate={isScrolled ? 'scrolled' : 'notScrolled'}
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
                                </motion.a>
                            </motion.li>
                </motion.ul>
                </nav>
            </motion.header>
        )
    }
}

export default Header;
