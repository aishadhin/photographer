import React from 'react';
import notFoundimg from '../../img/404.jpg'

const NotFound = () => {
    return (
        <div className='w-75 mx-auto'>
            <img className='img-fluid' src={notFoundimg} alt=''/>
        </div>
    );
};

export default NotFound;