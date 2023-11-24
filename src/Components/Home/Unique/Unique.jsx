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
                <div className="h2">The DiamondHand Token Phase map</div>
                <div className="border-c"></div>
              </div>
              <div className="box-desc">
                <p className="ps-5">
                  The phase map could be considered the roadmap for the entire project. The aim of the phase map is to describe in chronological order the steps the project will take to evolve over time.
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
    title: "DiamondHand Token (DT) Launch (Phase 1): ",
    desc: "In this phase the DT will undergo a multi chain fair launch and the open market presale will begin. During this phase not only will the DT be tradeable and the staking platform will be live, but also marketing will commence and other tasks such as coinmarketcap and coingecko listing will be done for the token.",
  },
  {
    id: 2,
    title: "Development of WaffleSwap (Phase 2):",
    desc: "WaffleSwap will be the first Dapp that is built to support the DT token once it transitions into a utility token. While the open market presale commence development of WaffleSwap will also begin. ",
  },
  {
    id: 3,
    title: "Open Market Presale Ends (Phase 3):",
    desc: "There is no estimated time period to when the OMP ends. Once the Venom blockchain comes out of testnet and development of WaffleSwap comes close to being complete the OMP will come to an end. Once the OMP comes to an and waffleswap goes live users will be able to swap their DT tokens for the new utility token that will be able to be staked on waffleswap and will share in the revenue that waffleswap generates. None of the funds during the OMP will go towards actual development cost and all of it will go towards the new utility token and ensuring that WaffleSwap is a success.",
  },
  {
    id: 4,
    title: "More Utility For The Transitioned DT  (Phase 4):",
    desc: "After WaffleSwap goes live the DT team plans to build more Dapps that will benefit all of the holders of the DT token (Dapps such as lending and borrowing market, Oracle service, Algostablecoin, etc). The holders of the transitioned DT token will benefit from sharing the fees of this ecosystem and potentially benefit from free air drops from holding the transitioned DT token.",
  },
];
