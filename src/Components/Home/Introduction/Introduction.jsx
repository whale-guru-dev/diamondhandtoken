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
                  The DiamondHand Token (DT) is a project that will be completed in phases. The goal is to initially launch (fair launch) a cross-chain roi dapp style token in the style that we call an “open market presale”. Upon launch the DT token itself is a fully functioning token with the ability for users to purchase it on six different blockchains and with the ability to stake their tokens to earn more DT.  ROI dapp tokens are known to explode in value early on (if done correctly) however, to ensure long term sustainability the DT team will eventually transition the DT token into a utility token that will benefit from the DeFi ecosystem that the team builds on the upcoming Venom blockchain. We strongly advise you to read our doc page and more of our website for more information.
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
