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
                I'm Matt. I'm an extremely passionate, and enthusiastic, self taught front end developer,
                and server administrator, from Sheffield. I'm currently working on becoming an expert in
                HTML, CSS, Javascript, React, while also, gradually, delving deeper into the back end.
                I like to think I have an eye for design but development is my primary passion.
                I love a good joke, a bad pun, & a good strong Yorkshire brew...
                or a pint, if the occasion calls!
            </p>
        </section>
    )
};

export default React.memo(AboutMe);
