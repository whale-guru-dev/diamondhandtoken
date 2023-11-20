import React, { useState } from 'react';

const Stake = () => {
    const [activeItem, setActiveItem] = useState('10%');

    const handleItemClick = (percentage) => {
        setActiveItem(percentage); 
    };

    return (
        <div className="stake-content">
            <div className="h3">Stake</div>
            <p>A minimum of 1 DHS required for deposits</p>
            <div className="stake-form">
                <div className="stake-text">
                    <span>
                        <input type="text" placeholder='0.0' />
                        <strong>$0.00</strong>
                    </span>
                    <span>
                        <div className="h5">DHS</div>
                    </span>
                </div>
                <div className="stake-available">
                    <p>DHS Available:</p>
                    <p>9,364,332.77</p>
                </div>
            </div>
            <ul className="purest">
                <li className={activeItem === '10%' ? 'active' : ''} onClick={() => handleItemClick('10%')}>10%</li>
                <li className={activeItem === '25%' ? 'active' : ''} onClick={() => handleItemClick('25%')}>25%</li>
                <li className={activeItem === '50%' ? 'active' : ''} onClick={() => handleItemClick('50%')}>50%</li>
                <li className={activeItem === '75%' ? 'active' : ''} onClick={() => handleItemClick('75%')}>75%</li>
                <li className={activeItem === 'Max' ? 'active' : ''} onClick={() => handleItemClick('Max')}>Max</li>
            </ul>
            <div className="text-center">
                <button className="btn-lg">Deposit</button>
            </div>
            <p>A <span className='deposits-purest'>{activeItem}</span> tax is charged on deposits </p>
        </div>
    );
};

export default Stake;