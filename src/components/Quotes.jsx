import React, { Component } from 'react';
import { QuoteContainer, Quote } from './Animations.jsx';
import '../styles/quotes.scss';

const quoteArr = [
    // 'Make every detail perfect and limit the number of details to perfect.',
    // 'The problem with quotes on the Internet is that it is hard to verify their authenticity.',
    'The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past.',
];

class Quotes extends Component {
    constructor(props) {
        super(props);

        this.quotes = React.createRef();

        this.state = {
            quoteVisible: false,
            thePosition: 401,
            visibleSlide: 0,
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            const { thePosition } = this.state;
            this.setState({
                thePosition: this.quotes.current.getBoundingClientRect().top,
                quoteVisible: thePosition < 400,
            });
        }, { passive: true });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', () => {});
    }

    render() {
        const { quoteVisible } = this.state;
        return (
            <section className="quotes" ref={this.quotes}>
                <QuoteContainer pose={quoteVisible ? 'visible' : 'hidden'} initialPose="hidden">
                    {quoteArr.map((quote, idx) =>
                        <Quote key={idx}>
                            {quote}
                        </Quote>
                    )}
                </QuoteContainer>
            </section>
        );
    }
}

export default Quotes;
