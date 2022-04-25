import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {name, img, description, price, book} = service;
    return (
        <div className='service mt-5'>
            <img className='images' src={img} alt="" />
            <h2 className='name'>{name}</h2>
            <p><span className='fw-bold'>Price: </span>{price}</p>
            <p><small>{description}</small></p>
            <button className='bookNow'>{book}</button>
        </div>
    );
};

export default Service;