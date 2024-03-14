import React, { useState } from 'react';
import '../style.css';

const Card = ({ className, number, handleCardClick }) => {
    const [clickCount, setClickCount] = useState(0);

    const handleClick = () => {
        setClickCount(clickCount + 1);
        handleCardClick();
    };

    return (
        <div className={`card ${className}`} onClick={handleClick}>
            {number}
            <p>{clickCount}</p>
        </div>
    );
};

export default Card;