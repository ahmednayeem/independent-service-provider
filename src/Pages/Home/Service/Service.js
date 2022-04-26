import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {id, name, img, description, price, book} = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id =>{
        navigate(`/service/${id}`)

    }
    return (
        <div className='service mt-4'>
            <img className='images' src={img} alt="" />
            <h2 className='name'>{name}</h2>
            <p><span className='fw-bold'>Price: </span>{price}</p>
            <p><small className='fs-5'>{description}</small></p>
            <button onClick={() => navigateToServiceDetail(id)} className='bookNow'>{book}</button>
        </div>
    );
};

export default Service;