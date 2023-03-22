import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name, area, capital, flags, region, population} = props.country;
    // console.log(props.country);
    return (
        <div>
            <img src={flags.png} alt="" />
            <h2>Name: {name.common}</h2>
            <h3>Region: {region}</h3>
            <div>
                <h4>Other Details</h4>
                <ul>
                    <li>Area: {area}</li>
                    <li>Capital: {capital? capital[0]: ''}</li>
                    <li>Population {population}</li>
                </ul>
            </div>
        </div>
    );
};

export default Country;