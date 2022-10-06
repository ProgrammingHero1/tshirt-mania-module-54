import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = ({house}) => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h4>Uncle</h4>
            <p><small>House:{house}</small></p>
            <p><small>Money: {money}</small></p>
        </div>
    );
};

export default Uncle;