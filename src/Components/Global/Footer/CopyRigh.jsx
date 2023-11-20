import React from 'react';
import { Link } from 'react-router-dom';
import Telegram from '../../../Assets/Icons/Telegram';
import Twitter from '../../../Assets/Icons/Twitter';
import Youtube from '../../../Assets/Icons/Youtube';

const CopyRigh = () => {
    return (
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="copyright-content">
                            <p>© 2023 Diamond Hands. All Rights Reserved</p>
                            <ul className="footer-social">
                                <li><Link to=""><Telegram/> </Link></li>
                                <li><Link to=""><Twitter/> </Link></li>
                                <li><Link to=""><Youtube/> </Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CopyRigh;