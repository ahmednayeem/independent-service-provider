import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ServiceDetail.css'

const ServiceDetail = () => {
    const {serviceName} = useParams();
    return (
        <div>
            <h2 className='serviceDetails'>Welcome to {serviceName}</h2>
            <div className='text-center'>
            <Link to="/checkout">
            <button className='serviceButton'> Proceed Checkout</button>
            </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;