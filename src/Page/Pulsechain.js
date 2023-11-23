import React, { useEffect } from "react";
import Navbar from "../Components/Dashboard/Navbar/Navbar";
import Copyright from "../Components/Staking/Copyright/Copyright";
import Stake from "../Components/Dashboard/Vault/Stake";
import StakeTwo from "../Components/Dashboard/Vault/StakeTwo";
// import BuyBurn from "../Components/Dashboard/Vault/BuyBurn";
// import Buybacks from "../Components/Dashboard/Vault/Buybacks";
import VaultTable from "../Components/Dashboard/Vault/VaultTable";
import { useWeb3React } from "@web3-react/core";
import useSuperToken from "../Hooks/useSuperToken";

const Pulsechain = () => {
  const {
      account,
      chainId,
  } = useWeb3React();

  const {switchNetwork} = useSuperToken(369);

  useEffect(() => {
    switchNetwork();
  }, [account]);

  return (
    <div className="dashboard-wrapper">
      <Navbar />
      <div className="vault-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="h1 primary-text text-center">THE VAULT</div>
              <div className="h4 primary-text text-center fw-semibold">
                Pulsechain
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
      <Copyright />
    </div>
  );
};

export default Pulsechain;
