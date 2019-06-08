import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { QuoteContainer, Quote } from './Animations.jsx';
import '../styles/quotes.scss';

const quoteArr = [
    // 'Make every detail perfect and limit the number of details to perfect.',
    // 'The problem with quotes on the Internet is that it is hard to verify their authenticity.',
    {
        quoteText: 'The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past.',
        quoteAuthor: 'Tim Berners-Lee',
        id: 1,
    }
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
                        <div key={quote.id}>
                            <Quote key={idx}>
                                <FontAwesomeIcon icon={faQuoteLeft} className="quotes__quote quotes__quote_left" />
                                {quote.quoteText}
                                <FontAwesomeIcon icon={faQuoteRight} className="quotes__quote quotes__quote_right" />
                            </Quote>
                            <span>{quote.quoteAuthor}</span>
                        </div>
                    )}
                </QuoteContainer>
            </section>
        );
    }
}

export default Quotes;
