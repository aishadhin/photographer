import React from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const services = [
        { id: 1, name: 'Website Photography', price: 150, img: 'https://i.ibb.co/NL1VDgL/website.jpg', description: 'A leading company always need to shoot a range of banner images and high impact photographs for their website.' },
        { id: 2, name: 'Product Photography', price: 250, img: 'https://i.ibb.co/yPvBkwG/product.jpg', description: 'A perfect visual of a product is the most important part to attract customer and I care that most for you' },
        { id: 3, name: 'Weeding Photography', price: 500, img: 'https://i.ibb.co/6ZY2cZZ/weeding.jpg', description: 'For e weeding function I always try to capture perfect shoots as a rememberable memory for the future' },
    ]
    return (
        <div className='container'>
            <h2 className='services-title my-3' id='services'>Services</h2>
            <div className='services-container'>
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;