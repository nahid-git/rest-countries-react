import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, flags, population, capital} = props.country
    return (
        <div className='country'>
            <h1>{name.common}</h1>
            <img src={flags.png} alt='Flag Here'></img>
            <h2>Population: {population}</h2>
            <h2>Capital: {capital}</h2>
        </div>
    );
};

export default Country;