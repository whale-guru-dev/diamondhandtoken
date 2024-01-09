import React, { useEffect } from 'react';
import Navbar from '../Components/Dashboard/Navbar/Navbar'; 
import Copyright from '../Components/Staking/Copyright/Copyright';
// import Stake from '../Components/Dashboard/Vault/Stake'; 
import StakeWrapper from '../Components/Dashboard/Vault/StakeWrapper';
import { useWeb3React } from "@web3-react/core";
import useSuperToken from '../Hooks/useSuperToken';
import StakeWrapperArbi from '../Components/Dashboard/Vault/StakeWrapperArbi';

const ArbiWrapper = () => {
    const {
        account,
        chainId,
    } = useWeb3React();

    const {switchNetwork} = useSuperToken(42161);

    useEffect(() => {
      switchNetwork();
    }, [account]);

    return (
        <div className='dashboard-wrapper'>
            <Navbar />
            <div className="vault-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="h1 primary-text text-center">Token wrapper</div>
                            <div className="h4 primary-text text-center fw-semibold">Arbitrum One</div>

                        </div>
                        <div className="col-lg-9">
                            <div className="wrapper-vault-content wrapper-content">
                                <StakeWrapperArbi chainId={chainId} account={account}/>
                                <div className='vault-text'>
                                    Please Click <a href="https://diamondhandproject.gitbook.io/diamondhand-token/protocol/bridge-info-and-guide/arbitrum-bridge-and-wrapper" target="_blank">Here</a> to read instructions on how to use the Arbitrum token wrapper.
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

export default ArbiWrapper;