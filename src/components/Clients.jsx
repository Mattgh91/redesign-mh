import React, { Component } from 'react';
import { ClientItem } from './Animations';
import { PoseGroup } from 'react-pose';
import '../styles/clients.scss';

const clientList = [
    { src: '/assets/Channel4.svg', alt: 'Channel 4', id: 1 },
    { src: '/assets/LoveProductions.svg', alt: 'Love Productions', id: 2 },
    { src: '/assets/Film4.svg', alt: 'Film4', id: 3 },
    { src: '/assets/StudioLambert.svg', alt: 'Studio Lambert', id: 4 },
    { src: '/assets/ScienceMuseum.svg', alt: 'Science Museum', id: 5 },
];

class Clients extends Component {
    constructor(props) {
        super(props);

        this.clientListDiv = React.createRef();

        this.state = {
            quoteVisible: false,
            visibleSlide: 0,
        };
    }

    componentDidMount() {
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
        window.removeEventListener('scroll', () => {
        });
    }

    render() {
        const { quoteVisible } = this.state;
        return (
            <section className="clients">
                <h3>People I've worked with</h3>
                <p>I've selected a few clients I've had the pleasure of working with</p>
                <div className="clients__list" ref={this.clientListDiv}>
                    <PoseGroup>
                        {clientList.map(client => (
                            <ClientItem
                                i={client.id}
                                src={client.src}
                                alt={client.alt}
                                key={client.id}
                                pose={quoteVisible ? 'scrolledIntoView' : 'notInView'}
                                initialPose="notInView"
                                className="clients__client"
                            />
                        ))}
                    </PoseGroup>
                </div>
            </section>
        );
    }
}

export default Clients;
