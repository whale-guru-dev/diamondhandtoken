import React from "react";
import './AllModals.scss';
import { Modal } from "react-bootstrap";
import Pulses from "../../../Assets/Icons/Pulse";
import Ethereum from "../../../Assets/Icons/Ethereum";
import Binancedex from "../../../Assets/Icons/Binancedex";
import Polygon from "../../../Assets/Icons/Polygon";
import { Link } from "react-router-dom";
import Avalanche from "../../../Assets/Icons/Avalanche";
import Arbitrum from "../../../Assets/Icons/Arbitrum";

const BlockChain = (props) => {
  return (
    <Modal
      {...props} 
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="block-chain-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Select BlockChain
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="block-chain">
            {blockChainData.map((item)=>( 
                <Link to={item.link} className="block-chain-item" key={item.desc}>
                    <div className="icon">{item.icon}</div>
                    <div className="h4 fw-medium">{item.desc}</div>
                </Link>
            ))}
        </div>
      </Modal.Body> 
    </Modal>
  );
};

export default BlockChain;

const blockChainData = [
  {
      icon: <Pulses/>,
      link: "/pulsechain",
      desc: "PulseChain",
  },
  {
      icon: <Binancedex/>,
      link: "/binance-chain",
      desc: "Binance Chain",
  },
  {
      icon: <Ethereum/>,
      link: "/ethereum",
      desc: "Ethereum",
  },
  {
      icon: <Polygon/>,
      link: "/polygon",
      desc: "Polygon",
  },
  {
      icon: <Avalanche/>,
      link: "/avalanche",
      desc: "Avalanche",
  },
  {
      icon: <Arbitrum/>,
      link: "/arbitrum",
      desc: "ArbiTrum One",
  },
]
