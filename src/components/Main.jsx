import React, { useState } from 'react';
import Card from './Card';
import '../style.css';

const Main = () => {
    const [totalClicks, setTotalClicks] = useState(0);

    const handleCardClick = () => {
        setTotalClicks(totalClicks + 1);
    };

    return (
        <div className="container">
            <div className="card-small-container">
                <Card className="card-small card1" handleCardClick={handleCardClick} />
                <Card className="card-small card2" handleCardClick={handleCardClick} />
            </div>
            <Card className="card3" handleCardClick={handleCardClick} />
            <Card className="card4" handleCardClick={handleCardClick} />
            <p>Total clicks: {totalClicks}</p>
        </div>
    );
};

export default Main;