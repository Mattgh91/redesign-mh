import React, { Component } from 'react';
import { motion } from 'framer-motion';
import '../styles/clients.scss';

const clientList = [
    { src: '/assets/Channel4.svg', alt: 'Channel 4', id: 1 },
    { src: '/assets/LoveProductions.svg', alt: 'Love Productions', id: 2 },
    { src: '/assets/Film4.svg', alt: 'Film4', id: 3 },
    { src: '/assets/StudioLambert.svg', alt: 'Studio Lambert', id: 4 },
    { src: '/assets/ScienceMuseum.svg', alt: 'Science Museum', id: 5 },
    { src: '/assets/MuseumsSheffield.svg', alt: 'Museums Sheffield', id: 6 },
];

const clientItem = {
    scrolledIntoView: i => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: .4,
            delay: i * .15,
        },
    }),
    notInView: i => ({
        y: i * 50,
        opacity: 0,
        transition: {
            duration: .4,
            delay: i * .15,
        },
    }),
};

class Clients extends Component {
    constructor(props) {
        super(props);

        this.clientListDiv = React.createRef();
        this.clientsSection = React.createRef();

        this.state = {
            quoteVisible: false,
            visibleSlide: 0,
        };
    }

    componentDidMount() {
        const { passRefUpward } = this.props;
        passRefUpward('clients', this.clientsSection);

        window.addEventListener('scroll', () => {
            const checkIfIsInView = () => {
                const rect = this.clientListDiv.current.getBoundingClientRect();
                return (
                    rect.top >= 0
                    && rect.left >= 0
                    && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
                    && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
            };
            this.setState({
                quoteVisible: checkIfIsInView(),
            });
        }, {passive: true});
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', () => {});
    }

    render() {
        const { quoteVisible } = this.state;
        return (
            <section className="clients" id="clients" ref={this.clientsSection}>
                <h3>People I've worked with</h3>
                <p>I've selected a few clients I've had the pleasure of working with</p>
                <div className="clients__list" ref={this.clientListDiv}>
                    {clientList.map(client => (
                        <div key={client.id} className={`clients__container  clients__container_${client.id}`}>
                            <motion.img
                                custom={client.id}
                                src={client.src}
                                alt={client.alt}
                                variants={clientItem}
                                animate={quoteVisible ? 'scrolledIntoView' : 'notInView'}
                                initial={false}
                                className="clients__client"
                            />
                            <div className="vh">{client.alt}</div>
                        </div>
                    ))}
                </div>
            </section>
        );
    }
}

export default Clients;
