import React, { PureComponent } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import '../styles/landing.scss';

const contentBox = {
    hidden: {
        opacity: 0,
        y: -30,
        transition: {
            duration: .75,
            delay: .5,
        },
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .75,
            delay: .5,
        },
    },
};

class Landing extends PureComponent {
    constructor(props) {
        super(props);

        this.video = React.createRef();
        this.landingSection = React.createRef();
        this.pauseToggle = this.pauseToggle.bind(this);

        this.state = {
            isVisible: false,
            videoPlaying: true,
        };
    }

    componentDidMount() {
        const { passRefUpward } = this.props;
        passRefUpward('landing', this.landingSection);

        setTimeout(() => {
            this.setState({
                isVisible: true,
            });
        }, 750);
    }

    pauseToggle() {
        const { videoPlaying } = this.state;
        videoPlaying ? this.video.current.pause() : this.video.current.play();
        this.setState({
            videoPlaying: !videoPlaying
        });
    }

    render() {
        const { isVisible, videoPlaying } = this.state;
        return (
            <section className="landing" id="landing" ref={this.landingSection}>
                <video
                    ref={this.video}
                    src="/assets/abstract.mp4"
                    className=""
                    muted
                    autoPlay
                    loop
                    poster="/assets/cloth-bg.jpg"
                />
                <motion.div
                    animate={isVisible ? 'visible' : 'hidden'}
                    variants={contentBox}
                    initial={false}
                    className="landing__text"
                >
                    <h1>Matt Haynes</h1>
                    <h2>A passionate front end developer; helping fill the internet - or anywhere else! - with beautiful websites one page at a time</h2>
                </motion.div>
                <button onClick={this.pauseToggle}>
                    <FontAwesomeIcon icon={videoPlaying ? faPause : faPlay} />
                    <span className="vh">Pause Video</span>
                </button>
            </section>
        );
    }
}


export default Landing;
