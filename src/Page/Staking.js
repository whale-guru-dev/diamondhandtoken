import React from 'react';
import Navbar from '../Components/Staking/Navbar/Navbar';
import StakingPortal from '../Components/Staking/StakingPortal/StakingPortal';
import Copyright from '../Components/Staking/Copyright/Copyright';

const Staking = () => {
    return (
        <div className='staking-wrapper'>
            <Navbar/>
            <StakingPortal/>
            <Copyright/>
        </div>
    );
};

export default Staking;