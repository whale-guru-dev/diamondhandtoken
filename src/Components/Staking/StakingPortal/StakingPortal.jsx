import React from 'react';
import './StakingPortal.scss'
import StakingCategory from './StakingCategory';
import Stake from './Stake';

const StakingPortal = () => {
    return (
        <div className="staking-portal">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="h1 primary-text text-center">
                            Staking Portal
                        </div>
                        <div className="staking-portal-content">
                            <StakingCategory/>
                            <Stake/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StakingPortal;