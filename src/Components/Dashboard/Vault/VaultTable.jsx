import React, { useState, useEffect, useContext, useRef } from 'react';
/* import ClaimDetailsModal from "./ClaimDetailsModal"; */
import useSuperToken from "../../../Hooks/useSuperToken";
import { FETCH_INTERVAL } from "../../../Const/super-token-consts";
import { WalletContext } from '../../../Context/WalletContext';

// Commented out the claim details modal as it is not used anywhere in the project but it is still there in the codebase so that it can be used in future if required.
const VaultTable = ({chainId, account}) => {
  /* const [claimShow, setClaimShow] = React.useState(false); */
  const handler = useRef(null);
  const [vestData, setVestData] = useState([]);
  const { setShowWalletModal } = useContext(WalletContext);

  const {
    onGetVestInfo,
    onClaim
  } = useSuperToken(chainId);

  useEffect(() => {
    if(!account || !chainId) {
      setShowWalletModal(true);
    }

    async function getBalance() {
        const promises = [];
        if (account && chainId) {
            promises.push(
              onGetVestInfo()
            );
        } else {
            promises.push(0)
        }

        const [vestData] = await Promise.all(promises);
        setVestData(vestData);
        
        return true;
    }

    handler.current = setInterval(() => {
        getBalance();
    }, FETCH_INTERVAL);

    return () => {
        if (handler.current) {
            clearInterval(handler.current);
        }
    };
  }, [account]);

  return (
    <>
      <div className="vault-table">
        <ul className="table-title">
          <li>#</li>
          <li>Amount Vested</li>
          <li>Amount Claimed</li>
          <li>Date of Vest</li>
          <li>Reward Amount</li>
          <li>Action</li>
        </ul>
        <div className="table-body">
          {vestData.map((item, index) => (
            <ul className="vault-table-item" key={item.index}>
              <li>{index + 1}</li>
              <li>{item.amount}</li>
              <li>{item.claimed}</li>
              <li>{item.day}</li>
              <li>{item.reward}</li>
              <li>
                <div className="button-group">
                  {/* <button className="reinvest">Reinvest</button> */}
                  <button className="claim" onClick={() => onClaim(index)}>Claim</button>
                </div>
              </li>
            </ul>
          ))}
        </div>
      </div>
      {/* <ClaimDetailsModal 
        show={claimShow}
        onHide={() => setClaimShow(false)}
      /> */}
    </>
  );
};

export default VaultTable;
