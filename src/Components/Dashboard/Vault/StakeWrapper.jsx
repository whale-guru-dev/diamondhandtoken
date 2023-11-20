import React, { useState } from 'react';
import './Vault.scss'

const StakeWrapper = () => {
    const [activeItem, setActiveItem] = useState('10%');

    const handleItemClick = (percentage) => {
        setActiveItem(percentage); 
    };

    return (
        <div className="stake-content">
            <div className="h3">wrap/unwrap tokens</div> 
            <div className="stake-form">
                <div className="stake-text">
                    <span>
                        <input type="number" placeholder='0.0' />
                        <strong>$0.00</strong>
                    </span>
                    <span>
                        <div className="h5">DT</div>
                    </span>
                </div>
                <div className="stake-available">
                    <p>Token Balance:</p>
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
            <div className="text-center stake-btn">
                <button className="btn-lg">Wrap Token</button>
                <button className="btn-lg">Unwrap Token</button>
            </div> 
        </div>
    );
};

export default StakeWrapper;
