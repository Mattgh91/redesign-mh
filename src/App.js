import React from 'react';
import Header from './components/Header.jsx';
import Landing from './components/Landing.jsx';
import AboutMe from './components/AboutMe.jsx';
import Quotes from './components/Quotes.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import './App.css';

const App = () => (
    <div className="App">
        <Header />
        <main>
            <Landing />
            <AboutMe />
            <Quotes />
            <Projects />
            <Contact />
        </main>
    </div>
);

export default App;
