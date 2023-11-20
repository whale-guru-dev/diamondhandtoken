import React from "react";
import "./Unique.scss";

const Unique = () => {
  return (
    <div className="unique-area" id="Uniqueness">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="box-content unique-content">
              <div className="box-title">
                <div className="h2">What Makes DT Unique?</div>
                <div className="border-c"></div>
              </div>
              <div className="box-desc">
                <p className="ps-5">
                  DT distinguishes itself through a commitment to innovation and
                  sound tokenomics. Here's what makes DT stand out from the
                  competition:
                </p>
                <ul>
                  {uniqueData.map((item) => (
                    <li key={item.id}>
                      <p>
                        <span>{item.title}</span> {item.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="box-img">
                <img src="/images/unique.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unique;

const uniqueData = [
  {
    id: 1,
    title: "Fair Launch: ",
    desc: "DT's launch stands out as it doesn't involve an ICO, Presale, or any form of early funding. This approach ensures that investors won't face the risk of their holdings being unfairly dumped on by those with an early advantage.",
  },
  {
    id: 2,
    title: "Balanced Market Cap and Liquidity:",
    desc: " Unlike many projects with inflated market caps and inadequate liquidity, DT maintains a market cap below $100,000 that closely aligns with its liquidity. This alignment ensures transparency and potential for substantial growth.",
  },
  {
    id: 3,
    title: "Deflationary Tokenomics:",
    desc: "While many DeFi projects rely on high annual percentage rates (APR) to attract investors, DT takes a distinct approach. It restricts the circulating supply available for sale at any given time, performs daily token buybacks and burns, and introduces a maintenance fee model to gradually enhance the DT token's value, resulting in long-term appreciation.",
  },
  {
    id: 4,
    title: "CrossChain Compatibility:",
    desc: "While initially residing on Pulsechain, DT's future vision includes becoming a cross-chain project, extending its reach to various blockchain communities. This cross-chain compatibility enhances accessibility and engagement with diverse user bases.",
  },
];
