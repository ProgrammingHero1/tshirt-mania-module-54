import React from 'react';
import './TShirt.css';

const TShirt = ({_id, tshirt, handleAddToCart}) => {
    const {picture, name, price} = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture}></img>
            <h2>{name}</h2>
            <h4>Price: {price}</h4>
            <button onClick={() => handleAddToCart(_id)}>Buy this</button>
        </div>
    );
};

export default TShirt;