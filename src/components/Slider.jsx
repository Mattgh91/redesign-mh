import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import '../styles/slider.scss';

const Slider = ({ slides }) => {
    const [curr, setCurr] = useState(0);
    const { length } = slides;

    const goToNext = () => {
        setCurr(curr === length - 1 ? 0 : curr + 1);
    };

    useEffect(() => {
        setTimeout(goToNext, 7500);
        return function() {
            clearTimeout(goToNext);
        }
    });

    if (!Array.isArray(slides) || length <= 0) {
        return null;
    }

    return (
        <section className="slider" id="slider">
            {slides.map((s, i) => (
                <div
                    className={i === curr ? "slider__slide active" : "slider__slide"}
                    key={s.title}
                    aria-hidden={i !== curr}
                >
                    <div className="slider__slide-inside">
                        <h3>
                            <FontAwesomeIcon icon={faQuoteLeft} className="slider__quote slider__quote_left" />
                            {s.title}
                            <FontAwesomeIcon icon={faQuoteRight} className="slider__quote slider__quote_right" />
                        </h3>
                        <h4>- {s.subtitle}</h4>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Slider;
