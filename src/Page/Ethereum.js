import React from 'react'; 
import Navbar from '../Components/Dashboard/Navbar/Navbar'; 
import Copyright from '../Components/Staking/Copyright/Copyright';
import Stake from '../Components/Dashboard/Vault/Stake';
// import BuyBurn from '../Components/Dashboard/Vault/BuyBurn';
// import Buybacks from '../Components/Dashboard/Vault/Buybacks';
import VaultTable from '../Components/Dashboard/Vault/VaultTable';
import { Link } from 'react-router-dom';
import StakeTwo from '../Components/Dashboard/Vault/StakeTwo';
import { useWeb3React } from "@web3-react/core";

const Ethereum = () => {
    const {
        account,
        chainId,
    } = useWeb3React();

    return (
        <div className='dashboard-wrapper'>
           <Navbar/>
           <div className="vault-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="h1 primary-text text-center">THE VAULT</div>
                            <div className='d-flex gap-4 justify-content-center align-items-center'>
                                <div className="h4 primary-text text-center fw-semibold">Ethereum</div>
                                <Link to="/wrapper" className='title-btn'>Token Wrapper</Link>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="vault-content">
                                <Stake chainId={chainId} account={account}/>
                                <StakeTwo chainId={chainId} account={account}/>
                                {/* <div className="Buybacks-content">
                                    <BuyBurn />
                                    <Buybacks />
                                </div> */}
                            </div>
                        </div>
                        <div className="col-xl-12">
                            <div className="table-responsive">
                                <VaultTable chainId={chainId} account={account}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           <Copyright/>
        </div>
    );
};

export default Ethereum;