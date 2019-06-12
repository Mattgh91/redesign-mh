import React, { Component } from 'react';
import Header from './components/Header.jsx';
import Landing from './components/Landing.jsx';
import AboutMe from './components/AboutMe.jsx';
import Clients from './components/Clients.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import defaultSlides from './components/defaultSlides.js';
import Slider from './components/Slider.jsx';
import EnableTabbing from './components/enableTabbing';
import './App.scss';

EnableTabbing();

class App extends Component {
    constructor(props) {
        super(props);
        this.getRefsFromChild = this.getRefsFromChild.bind(this);
        this.state = {
            myRequestedRefs: [],
        }
    }

    getRefsFromChild(refIndex, childRefs) {
        const { myRequestedRefs } = this.state;
        this.setState({
            myRequestedRefs: myRequestedRefs.push({refIndex, childRefs}),
        }, () =>
            console.log(myRequestedRefs)
        );
    }

    render() {
        const { myRequestedRefs } = this.state;
        return (
            <div className="App">
                <Header childRefs={myRequestedRefs}/>
                <main>
                    <Landing passRefUpward={this.getRefsFromChild} />
                    <AboutMe passRefUpward={this.getRefsFromChild} />
                    <Slider slides={defaultSlides} />
                    <Clients passRefUpward={this.getRefsFromChild} />
                    <Contact passRefUpward={this.getRefsFromChild} />
                </main>
                <Footer/>
            </div>
        );
    }
};

export default App;
