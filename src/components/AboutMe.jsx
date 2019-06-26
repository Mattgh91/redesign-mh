import React, { useRef, useEffect } from 'react';
import '../styles/aboutme.scss';

const AboutMe = ({ passRefUpward }) => {
    const aboutSection = useRef(null);

    useEffect(() => {
        if (aboutSection.current !== null) {
            passRefUpward('aboutMe', aboutSection);
        }
    }, [aboutSection, passRefUpward]);

    return (
        <section className="about-me" id="aboutMe" ref={aboutSection}>
            <h3>A little something about me</h3>
            <p>
                I'm Matt. I'm an extremely passionate, and enthusiastic, self taught front end developer from Sheffield.
                I'm currently working
                at <a href="https://joipolloi.com" target="_blank" rel="noopener noreferrer">Joi Polloi</a> creating
                compelling digital experiences, engaging platforms and innovative
                products within the television, media and cultural industries.
            </p>
            <p>
                My current aims involve perfecting my front end work in HTML, CSS, Javascript,
                React, and a11y, while also gradually delving into the back end.
                I've spent some time as a server administrator, and I like to think I have an eye for design,
                but development is my primary passion.  I love a good joke, a bad pun,
                & a good strong Yorkshire brew... or a pint, if the occasion calls!
            </p>
        </section>
    )
};

export default React.memo(AboutMe);
