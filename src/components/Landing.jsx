import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { Box } from './Animations.jsx';
import '../styles/landing.scss';

class Landing extends Component {
    constructor(props) {
        super(props);

        this.video = React.createRef();
        this.pauseToggle = this.pauseToggle.bind(this);

        this.state = {
            isVisible: false,
            videoPlaying: true,
        };
    }

    componentDidMount() {
        this.setState({
            isVisible: true,
        });
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
            <section className="landing" id="landing">
                <video
                    ref={this.video}
                    src="/assets/abstract.mp4"
                    className=""
                    muted
                    autoPlay
                    loop
                    poster="/assets/cloth-bg.jpg"
                />
                <Box pose={isVisible ? 'visible' : 'hidden'}>
                    <h1>Matt Haynes</h1>
                    <h2>A passionate front end web developer and designer; helping fill the internet with beautiful websites one page at a time</h2>
                </Box>
                <button onClick={this.pauseToggle}>
                    <FontAwesomeIcon icon={videoPlaying ? faPause : faPlay} />
                    <span className="vh">Pause Video</span>
                </button>
            </section>
        );
    }
}


export default Landing;
