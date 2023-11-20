import React from 'react';
import './Footer.scss'
import Powered from '../../Home/Powered/Powered';
import CopyRigh from './CopyRigh';

const Footer = () => {
     
    return (
        <div className="footer-area">
            <Powered/>
            <CopyRigh/>
        </div>
    );
};

export default Footer;