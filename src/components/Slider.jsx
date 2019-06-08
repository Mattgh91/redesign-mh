import React from 'react';
import '../styles/slider.scss';

const Slider = ({ slides }) => {
    const [curr, setCurr] = React.useState(0);
    const { length } = slides;

    const goToNext = () => {
        setCurr(curr === length - 1 ? 0 : curr + 1);
    };

    React.useEffect(() => {
        setTimeout(goToNext, 2000);
        return function() {
            clearTimeout(goToNext);
        }
    });

    if (!Array.isArray(slides) || length <= 0) {
        return null;
    }

    return (
        <section className="slider">
            {slides.map((s, i) => (
                <div
                    className={i === curr ? "slide active" : "slide"}
                    key={s.title}
                    aria-hidden={i !== curr}
                >
                    <div>
                        <h1>{s.title}</h1>
                        <h2>{s.subtitle}</h2>
                    </div>
                    <img
                        className="image"
                        src={s.image}
                        alt={`${s.title}`}
                    />
                </div>
            ))}
        </section>
    );
};

export default Slider;
