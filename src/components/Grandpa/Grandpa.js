import React, { createContext } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css';

const RingContext = createContext('Matir Ring')

const Grandpa = () => {
    const house = 7;
    const ring = 'diamond ring';
    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <section className='flex'>
                <Father house={house} ring={ring}></Father>
                <Uncle  house={house}></Uncle>
                <Aunty  house={house}></Aunty>
            </section>
        </div>
    );
};

export default Grandpa;