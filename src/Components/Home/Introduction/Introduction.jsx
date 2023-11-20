import React from "react";
import "./Introduction.scss";

const Introduction = () => {
  return (
    <div className="introduction-area" id="Introduction">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="box-content introduction-box">
              <div className="box-title">
                <div className="h2">Introduction</div>
                <div className="border-c"></div>
              </div>
              <div className="box-desc">
                <p>
                  The DT team aims to create a token ecosystem that promotes
                  price appreciation without relying on staking rewards for
                  token inflation. They plan to achieve this through a fair
                  launch, eliminating pre-sales and early investor allocations.
                  Additionally, a liquidity pool buy and burn mechanism will be
                  implemented, and token purchasers will have controlled selling
                  constraints and a vesting period. This strategy ensures the DT
                  token remains hyper-deflationary, supporting long-term value
                  growth.
                </p>
              </div>
              <div className="box-img">
                <img src="/images/introduction.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
