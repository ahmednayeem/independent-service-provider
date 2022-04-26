import React from 'react';
import divorce from './img/divorce.jpg'
import './NotFound.css'


const NotFound = () => {
    return (
        <div>
            <h2 className='text-danger text-center fs-1 fw-bold'>You Want divorce!!!</h2>
            <img className='pic' src={divorce} alt="" />
        </div>
    );
};

export default NotFound;