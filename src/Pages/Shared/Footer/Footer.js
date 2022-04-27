import React from 'react';
import { AtSymbolIcon } from '@heroicons/react/solid'
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        <footer className='text-center'>
           <p className='copyright'><small className='fs-4'>Copyright All rights reserved <AtSymbolIcon className='copy'></AtSymbolIcon>  {year}</small></p>
           <p className='fs-4'>Degin by Wedding.com</p>
        </footer>
    );
};

export default Footer;