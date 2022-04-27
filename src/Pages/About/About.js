import React from 'react';
import './About.css'
import pic from '../../Pages/About/img/pic.jpg';


const About = () => {
    return (
        <div className='myself'>
            <img className='aboutPic' src={pic} alt="" />
            <h1>Ahmed Nayeem</h1>
            <p><span className='fw-bold'>Goal: </span>Hi myself Nayeem, I want to learn everything about programming, but now I'm just focusing on the web developing part. Once I have learned everything about web developing, I will focus only on programming.</p>
        </div>
    );
};

export default About;