import React from "react";
import "./DHSExplained.scss";

const DHSExplained = () => {
  return (
    <div className="DHSExplained-area" id="Staking">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="box-content DHSExplained-content">
              <div className="box-title">
                <div className="h2">DT Buy + Vesting Explained</div>
                <div className="border-c"></div>
              </div>
              <div className="box-desc">
                <p>
                  When a user acquires DT tokens, they immediately enter a
                  vesting period, during which they receive their tokens
                  gradually as a 1% daily payout. This accumulation continues
                  until they've received 100% of their initial purchase, which
                  typically takes 100 days. Users can monitor their claimable
                  balance, which grows every second, and they have the
                  flexibility to claim these tokens at any moment. It's worth
                  noting that each purchase and vesting event is subject to a $2
                  maintenance fee in DAI, which is charged weekly at a specific
                  time for all users. If a user vests their tokens shortly
                  before the fee time, they will be required to pay the fee for
                  the entire week. Users must settle the fee before claiming
                  their tokens, and it accumulates on a weekly basis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DHSExplained;
