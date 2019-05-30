import React from 'react';
import Header from './components/Header.jsx';
import Landing from './components/Landing.jsx';
import Quotes from './components/Quotes.jsx';
import './App.css';

const App = () => (
    <div className="App">
        <Header />
        <main>
            <Landing />
            <Quotes />
        </main>
    </div>
);

export default App;
