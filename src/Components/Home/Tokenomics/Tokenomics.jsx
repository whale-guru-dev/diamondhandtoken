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
    title: "Total Token Supply: ",
    desc: "40,000 DH",
  },
  {
    id: 2,
    title: "Daily Buy & Burn :",
    desc: "Typically between 1% - 3%",
  },
  {
    id: 3,
    title: "Zero Tax :",
    desc: "There is no tax on buys, transfers, or sales.",
  }, 
  
  {
    id: 5,
    title: "Cross Chain Token (Coming Eventually)",
    desc: "-  DT’s  presence on multiple blockchains creates arbitrage opportunities for traders. This feature helps balance activity across different chains, ensuring a dynamic ecosystem.",
  },
  {
    id: 6,
    title: "Long-Term Sustainability -",
    desc: "With a limited token supply and sustainable tokenomics, DT  aims to maintain and increase its value over time. Our commitment to scarcity and thoughtful economics benefits long-term holders.",
  },
];
