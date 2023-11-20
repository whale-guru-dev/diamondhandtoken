import React from 'react';
import './Copyright.scss'
import CopyRigh from '../../Global/Footer/CopyRigh';

const Copyright = () => {
    return (
        <div className='Copyright-area'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <CopyRigh/>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Copyright;