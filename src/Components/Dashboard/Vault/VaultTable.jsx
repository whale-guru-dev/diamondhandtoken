import React from "react";
/* import ClaimDetailsModal from "./ClaimDetailsModal"; */

// Commented out the claim details modal as it is not used anywhere in the project but it is still there in the codebase so that it can be used in future if required.
const VaultTable = () => {
  /* const [claimShow, setClaimShow] = React.useState(false); */

  return (
    <>
      <div className="vault-table">
        <ul className="table-title">
          <li>#</li>
          <li>Amount Staked</li>
          <li>Amount Claimed</li>
          <li>Date of Stake</li>
          <li>Reward Amount</li>
          <li>Action</li>
        </ul>
        <div className="table-body">
          {tableData.map((item) => (
            <ul className="vault-table-item" key={item.id}>
              <li>{item.id}</li>
              <li>{item.staked}</li>
              <li>{item.claimed}</li>
              <li>{item.stake}</li>
              <li>{item.amount}</li>
              <li>
                <div className="button-group">
                  {/* <button className="reinvest">Reinvest</button> */}
                  <button className="claim">Claim</button>
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

const tableData = [
  {
    id: "01",
    staked: "2,000,000",
    claimed: "53,732.45",
    stake: "2023-10-10",
    amount: "4,532.33 DH",
  },
  {
    id: "01",
    staked: "2,000,000",
    claimed: "53,732.45",
    stake: "2023-10-10",
    amount: "4,532.33 DH",
  },
  {
    id: "01",
    staked: "2,000,000",
    claimed: "53,732.45",
    stake: "2023-10-10",
    amount: "4,532.33 DH",
  },
  {
    id: "01",
    staked: "2,000,000",
    claimed: "53,732.45",
    stake: "2023-10-10",
    amount: "4,532.33 DH",
  },
  {
    id: "01",
    staked: "2,000,000",
    claimed: "53,732.45",
    stake: "2023-10-10",
    amount: "4,532.33 DH",
  },
];
