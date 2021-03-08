import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Container.css';

const Container = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/all`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);

    return (
        <div className="country-container">
            {
                countries.map(country => <Country country={country}></Country>)
            }
        </div>
    );
};

export default Container;