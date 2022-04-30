import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Service = ({ service }) => {
    const { name, description, img } = service;
    return (
        <div>
            <Card style={{ width: '18rem'}}>
                <Card.Img style={{ height: '190px' }} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="primary">Book Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;