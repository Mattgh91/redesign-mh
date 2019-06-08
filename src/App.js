import React from 'react';
import Header from './components/Header.jsx';
import Landing from './components/Landing.jsx';
import AboutMe from './components/AboutMe.jsx';
import Clients from './components/Clients.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import defaultSlides from './components/defaultSlides.js';
import Slider from './components/Slider.jsx';
import './App.scss';

const App = () => (
    <div className="App">
        <Header />
        <main>
            <Landing />
            <AboutMe />
            <Slider slides={defaultSlides} />
            <Clients />
            <Contact />
        </main>
        <Footer />
    </div>
);

export default App;
