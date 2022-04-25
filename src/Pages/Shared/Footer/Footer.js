import React from 'react';
import { AtSymbolIcon } from '@heroicons/react/solid'
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        <footer>
           <p><small className='fs-5'>copyright <AtSymbolIcon className='copy'></AtSymbolIcon>  {year}</small></p>
        </footer>
    );
};

export default Footer;