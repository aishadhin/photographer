import React from 'react';
import me from '../../img/me.jpg'

const About = () => {
    return (
        <div>
            <h2 className='text-center text-primary'>About Me</h2>
            <img className='d-block mx-auto' src={me} alt=''/>
            <h3 className='text-danger text-center'>Ai Shadhin</h3>
            <p className='container'>Hi this is Shadhin. Im from jamalpur bangladesh. Currently im out of my academic study dew to some reason but i am learning web development from programming hero. I live in a village and here electricity , network problem is very common and some days ago i was too ill. so im am at one milestone back. Im trying too much to recover. My goal to be a world class programmar. pray for me please. thank you. </p>
        </div>
    );
};

export default About;