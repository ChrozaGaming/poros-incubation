
import React from 'react';
import Header from './components/Navbar.jsx';
import Card from './components/Card';
import Footer from './components/Footer';
import './style.css';

const App = () => (
    <div>
        <Header />
        <div className="container">
            <div className="card-small-container">
                <Card className="card-small card1" number="1" />
                <Card className="card-small card2" number="2" />
            </div>
            <Card className="card3" number="3" />
            <Card className="card4" number="4" />
        </div>
        <Footer />
    </div>
);

export default App;