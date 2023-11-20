import React from 'react';
import Navbar from '../Components/Dashboard/Navbar/Navbar'; 
import Copyright from '../Components/Staking/Copyright/Copyright';
// import Stake from '../Components/Dashboard/Vault/Stake'; 
import StakeWrapper from '../Components/Dashboard/Vault/StakeWrapper';

const Wrapper = () => {
    return (
        <div className='dashboard-wrapper'>
            <Navbar />
            <div className="vault-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="h1 primary-text text-center">Token wrapper</div>
                            <div className="h4 primary-text text-center fw-semibold">Ethereum</div>

                        </div>
                        <div className="col-lg-9">
                            <div className="vault-content wrapper-content">
                                <StakeWrapper />
                                <div className='vault-text'>
                                    After Bridging  your DT Tokens from PulseChain to Ethereum, use the Token Wrapper to receive the functioning DT Token on ETHereum
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Copyright />
        </div>
    );
};

export default Wrapper;