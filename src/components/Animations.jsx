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

const QuoteContainer = posed.div({
    hidden: {
        opacity: 0,
        scale: 0,
        transition: {
            duration: 650,
            delay: 50,
        },
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 650,
            delay: 50,
        },
    },
});

const Quote = posed.h3({

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

export {
    HeaderContainer,
    HeaderItem,
    Box,
    QuoteContainer,
    Quote,
    ClientItem
};
