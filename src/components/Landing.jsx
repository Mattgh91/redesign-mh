import React, { Component } from 'react';
import '../styles/landing.scss';
import { Box } from './Animations.jsx';

class Landing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isVisible: false,
        };
    }

    componentDidMount() {
        this.setState({
            isVisible: true,
        });
    }

    render() {
        const { isVisible } = this.state;
        return (
            <section className="landing">
                <video
                    src="/assets/abstract.mp4"
                    className=""
                    muted
                    autoPlay
                    loop
                    poster="/assets/cloth-bg.jpg"
                />
                <Box pose={isVisible ? 'visible' : 'hidden'}>
                    <h1>Matt Haynes</h1>
                    <h2>A passionate web developer and designer; helping fill the internet with beautiful websites one page at a time</h2>
                </Box>
            </section>
        );
    }
}


export default Landing;
