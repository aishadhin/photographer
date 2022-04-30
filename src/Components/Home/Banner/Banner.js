import React from 'react';
import Background from '../../../img/banner.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div style={{backgroundImage:`url(${Background})`, backgroundSize:'cover', padding:'200px 0'}} className='container-fluid text-center text-white'>
            <h1 className='my-auto'>Shadhin Photography</h1>
            <p className='my-auto'>Capture the moment</p>
        </div>
    );
};

export default Banner;