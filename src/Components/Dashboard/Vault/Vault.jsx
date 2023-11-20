import React from "react";
import "./Vault.scss";
import Stake from "./Stake";
import Buybacks from "./Buybacks";
import VaultTable from "./VaultTable";
import BuyBurn from "./BuyBurn";

const Vault = () => {
  return (
    <div className="vault-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="h1 primary-text text-center">THE VAULT</div>
          </div>
          <div className="col-lg-9">
            <div className="vault-content">
              <Stake />
              <div className="Buybacks-content">
                <BuyBurn />
                <Buybacks />
              </div>
            </div>
          </div>
          <div className="col-xl-12">
            <div className="table-responsive">
              <VaultTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vault;
