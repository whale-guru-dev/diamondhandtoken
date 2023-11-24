import React from "react";
import "./Tokenomics.scss";

const Tokenomics = () => {
  return (
    <div className="tokenomics-area" id="Tokenomics">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="box-content tokenomics-content">
              <div className="box-title">
                <div className="h2">Tokenomics</div>
                <div className="border-c"></div>
              </div>
              <div className="box-desc">
                <ul>
                  {tokenomicsData.map((item) => (
                    <li key={item.id}>
                      <p>
                        <span>{item.title} {" "}</span> 
                        {item.desc}
                      </p>
                      {item.transferTax && (
                        <ol>
                          {item.transferTax.map((taxItem, index) => (
                            <li key={index}>
                              <p>
                                <span>{taxItem.transfer}</span>{" "}
                                {taxItem.transferDesc}
                              </p>
                            </li>
                          ))}
                        </ol>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="box-img">
                <img src="/images/tokenomics.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;

const tokenomicsData = [
  {
    id: 1,
    title: "Token Supply & Allocation: ",
    desc: "Upon token deployment 400,000 tokens are created on Ethereum,  Binance Smartchain, Polygon, Avalanche, and Pulsechain. On each chain 50,000 tokens are allocated to the CrossChain bridge liquidity pool, 15,000 tokens are allocated to the lp of Uniswap V2, PancakeSwap, QuickSwap, Traderjoe, and PulseX.",
  },
  {
    id: 2,
    title: "Sel & Transfer Tax :",
    desc: "There is zero taxes on sales and transfers of the DT token. ",
  },
  {
    id: 3,
    title: "Buy Tax :",
    desc: "There will be a 25% buy tax for the DT token across all blockchains it is tradeable on. This buy tax will get burned and users can avoid the buy tax by utilizing our Dapp page and using the buy and stake function in our website. This will create a purchase of the DT token with zero tax, but immediately stake the tokens upon purchase.",
  }, 
  {
    id: 4,
    title: "Cross Chain Token - ",
    desc: "Thanks to the utility of the CrossChain Bridge & the PulseChain Bridge the DT token will be tradeable on five EVM blockchains upon launch. The activity on one chain can positively affect the activity on the other chains due to the arbitrage opportunities.",
  },
  {
    id: 5,
    title: "Staking -",
    desc: "Upon creating a stake the initial stake amount can be considered “vested” and users will begin to  earn 1% a day with a total APR of 265% (in DT tokens) for each of their active stakes. Staking will be one of the best ways to take full advantage of the open market presale."
  },
  {
    id: 6,
    title: "Long Term Vision -",
    desc: "Even the beginning phases of the DiamondHand Token project presents itself with some opportunities. The fair launch, low supply, and a staking model that rewards long term believers is a recipe for success. However, unless the DT transitions into a utility token it will always be just a ROI Dapp token. Please read our DOC page with information on our open market presale and how we plan to transition into a token with major utility from DeFi use cases.",
  },
];
