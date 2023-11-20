import React from 'react';
import './Powered.scss'
import { Link } from 'react-router-dom';

const Powered = () => {
    return (
        <div className="powered-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="powered-content">
                            <div className="h4">Powered by</div>
                            <ul>
                                {powerData.map((item) => (
                                    <li key={item.id}>
                                        <Link to="">
                                            <img src={item.img} alt="" />
                                        </Link>
                                    </li>
                                ))}
                                
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Powered;

const powerData = [
    {
        id: 0,
        img: "/images/logo/binance.png",
    },
    {
        id: 1,
        img: "/images/logo/pulse.png",
    },
    {
        id: 2,
        img: "/images/logo/ethereum.png",
    },
    {
        id: 3,
        img: "/images/logo/coin-market.png",
    },
    {
        id: 4,
        img: "/images/logo/coin-gecko.png",
    },
    {
        id: 5,
        img: "/images/logo/dextools.png",
    },
]