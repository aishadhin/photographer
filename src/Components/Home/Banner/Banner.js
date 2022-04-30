import React from 'react';
import Background from '../../../img/banner.jpg'
import './Banner.css'


var sectionStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: "url(" + { Background } + ")"
  };
const Banner = () => {
    return (
        <div style={ sectionStyle } className='container-fluid'>

        </div>
    );
};

export default Banner;