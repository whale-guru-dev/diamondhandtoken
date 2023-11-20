import React from "react";
import "./Promo.scss";
import Chains from "../../../Assets/Icons/Chains";
import User2 from "../../../Assets/Icons/User2";
import Pulses from "../../../Assets/Icons/Pulse";
import Ethereum from "../../../Assets/Icons/Ethereum";
import Binancedex from "../../../Assets/Icons/Binancedex";
import Polygon from "../../../Assets/Icons/Polygon";

const Promo = () => {
  return (
    <div className="promo-area">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="promo-content">
              {promoData.map((item) => (
                <div className="promo-item" key={item.id}>
                  <div className="promo-bg">
                    <div className="icon">{item.icon}</div>
                    <div>
                      <p>{item.title}</p>
                      <div className="h3">{item.price}</div>
                      {item.desc && <p className="desc">{item.desc}</p>} 
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;

const promoData = [
  {
    id: 1,
    icon: <Ethereum />,
    title: "Token Price",
    price: "$25.33",
    desc: "Price on Ethereum",
  },
  {
    id: 2,
    icon: <Binancedex />,
    title: "Total Supply",
    price: "$24.92",
    desc: "Price on Binance Chain",
  },
  {
    id: 3,
    icon: <Polygon />,
    title: "Total Players",
    price: "$24.92",
    desc: "Price on Polygon",
  },
  {
    id: 4,
    icon: <Pulses />,
    title: "Token Price",
    price: "$24.92",
    desc: "Price on PulseChain",
  },
  {
    id: 5,
    icon: <Chains />,
    title: "Total Supply",
    price: "990,000",
  },
  {
    id: 6,
    icon: <User2 />,
    title: "Total Players",
    price: "12,769",
  },
];