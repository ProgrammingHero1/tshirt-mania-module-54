import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Friend = () => {
    const [house, setHouse] = useContext(RingContext);
    return (
        <div>
            <h4>Friend</h4>
            <p><small>house: {house}</small></p>
            <button onClick={() => setHouse(house -1)}>Decrease</button>
        </div>
    );
};

export default Friend;