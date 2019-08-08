import posed from 'react-pose';

const HeaderContainer = posed.header({
    notScrolled: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        boxShadow: '0 0 0px rgba(0, 0, 0, 0)',
    },
    scrolled: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.26)',
    },
});
const HeaderLogoG = posed.g({
    notScrolled: { fill: '#ffffff', },
    scrolled: {
        fill: '#111432',
        transition: {
            duration: 1000,
            delay: 1250,
        }
    }
});
const HeaderUl = posed.ul({
    show: {
        backgroundColor: '#111432',
        staggerChildren: 50,
        applyAtStart: { display: 'flex' },
        beforeChildren: true,
        transition: {
            duration: 350,
        },
    },
    hide: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        staggerChildren: 50,
        staggerDirection: -1,
        applyAtEnd: { display: 'none' },
        // afterChildren: true, comment out for now; causing bug when scrolled to top
        transition: {
            duration: 350,
        },
    },
});
const HeaderLi = posed.li({
    show: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 250,
        }
    },
    hide: {
        y: 35,
        opacity: 0,
        transition: {
            duration: 250,
        }
    },
});
const HeaderItem = posed.a({
    notScrolled: {
        color: '#fff',
    },
    scrolled: {
        color: '#0980A5',
    },
});

const Box = posed.div({
    hidden: {
        opacity: 0,
        y: -30,
        transition: {
            duration: 750,
            delay: 500,
        },
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 750,
            delay: 500,
        },
    },
});

const ClientItem = posed.img({
    init: {
        opacity: 0,
    },
    scrolledIntoView: {
        opacity: 1,
        transition: ({ i }) => ({
            duration: 350,
            delay: i * 200,
        }),
    },
    notInView: {
        opacity: 0,
        transition: {
            duration: 350,
        },
    },
    props: { i: 0 },
});

const ContactInput = posed.input({
    focusable: true,
    init: {
        boxShadow: '0px 0px 5px 0px rgba(8, 128, 165, 0)',
    },
    focus: {
        boxShadow: '0px 0px 5px 0px rgb(8, 128, 165)',
    }
});

const ContactTextArea = posed.textarea({
    focusable: true,
    init: {
        boxShadow: '0px 0px 5px 0px rgba(8, 128, 165, 0)',
    },
    focus: {
        boxShadow: '0px 0px 5px 0px rgb(8, 128, 165)',
    }
});

const ContactButton = posed.button({
    hoverable: true,
    init: {
        background: '#111432',
        boxShadow: '0px 0px 0px rgba(0,0,0,0)'
    },
    hover: {
        background: 'rgb(9, 128, 165)',
        boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
    }
});

const ContactFormContainer = posed.div({
    notsubmitted: {
        y: 0,
        scale: 1,
        opacity: 1,
        applyAtStart: { display: 'block' },
        transition: {
            duration: 500,
        },
    },
    submitted: {
        y: 35,
        scale: 0.65,
        opacity: 0,
        applyAtEnd: { display: 'none' },
        transition: {
            duration: 500,
        },
    },
});

const ContactFormSubmitComplete = posed.div({
   notsubmitted: {
       height: 0,
       applyAtEnd: { display: 'none' },
       transition: {
            duration: 500,
        },
   },
    submitted: {
        height: '100%',
        applyAtStart: { display: 'flex' },
        transition: {
            duration: 500,
        },
    },
});

export {
    HeaderContainer,
    HeaderLogoG,
    HeaderItem,
    HeaderUl,
    HeaderLi,
    Box,
    ClientItem,
    ContactInput,
    ContactTextArea,
    ContactButton,
    ContactFormContainer,
    ContactFormSubmitComplete,
};
