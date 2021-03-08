import Button from 'react-bootstrap/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Country.css';

const Country = (props) => {
    const {name, capital, flag, area} = props.country;

    const history = useHistory();
    const showDetail = name => {
        const url = `/country/${name}`;
        history.push(url);
    }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img className="image" variant="top" src={flag} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>capital: {capital}</Card.Text>
                <Card.Text>area: {area}</Card.Text>
                <Button onClick={() => showDetail(name)} variant="primary">see details</Button>
            </Card.Body>      
        </Card>
    );
};

export default Country;