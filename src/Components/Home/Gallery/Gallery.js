import React from 'react';
import './Gallery.css'
import img1 from '../../../img/g_1.png'
import img2 from '../../../img/g_2.png'
import img3 from '../../../img/g_3.png'
import img4 from '../../../img/g_4.png'
import img5 from '../../../img/g_5.png'
import img6 from '../../../img/g_6.png'

const Gallery = () => {
    return (
        <div>
            <h2 className='text-primary text-center my-3'>Gallery</h2>
            <div className='container mx-auto'>
                <div className='w-100 img-grid'>
                    <img className='img-fluid' src={img1} alt='' />
                    <img className='img-fluid' src={img2} alt='' />
                    <img className='img-fluid' src={img3} alt='' />
                    <img className='img-fluid' src={img4} alt='' />
                    <img className='img-fluid' src={img5} alt='' />
                    <img className='img-fluid' src={img6} alt='' />
                </div>
            </div>
        </div>
    );
};

export default Gallery;