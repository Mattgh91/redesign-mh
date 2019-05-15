import posed from 'react-pose';

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
    draggable: true,
});

export default Box ;
