import React, { useEffect, useState } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useParams } from 'react-router';
import './CountryDetail.css';

const CountryDetail = () => {
    const {name} = useParams();
    const [country, setCountry] = useState([]);
    const {flag, capital, population, area, region} = country;
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${name}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCountry(data[0]))
    }, [name]);

    return (
        <div className="detail">
            <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src={flag} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{capital}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroupItem>population: {population}</ListGroupItem>
            <ListGroupItem>area: {area}km<sup>2</sup></ListGroupItem>
            <ListGroupItem>region: {region}</ListGroupItem>
        </ListGroup>
        <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
        </Card>
        </div>
    );
};

export default CountryDetail;