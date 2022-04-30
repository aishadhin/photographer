import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CheckOut from '../../CheckOut/CheckOut';

const Service = ({ service }) => {
    const { name, price, description, img } = service;
    return (
        <div>
            <Card style={{ width: '18rem'}}>
                <Card.Img style={{ height: '190px' }} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <p>${price}</p>
                    <a href='/checkout' className='btn btn-primary'>Book Now</a>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;