import React, { useState } from "react";
import "./Hero.scss";
import { Link } from "react-router-dom";
import Telegram from "../../../Assets/Icons/Telegram";
import Twitter from "../../../Assets/Icons/Twitter";
import Youtube from "../../../Assets/Icons/Youtube";
import BlockChain from "../AllModals/BlockChain"; 

const Hero = () => {
  const [chainShow, setChainShow] = useState(false); 
  return (
    <>
      <div className="hero-area" id="home">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero-content">
                <div className="text-50">Unleash the </div>
                <h1 className="primary-text">power of DeFi</h1>
                <p>
                  The Diamond Token (DT) is a unique defi experiment that
                  focuses primarily on deflationary tokenomics and a
                  programmable community behavior to create a token that has the
                  best chance of appreciating value
                </p>
                <div className="hero-btn-con d-flex gap-3 align-items-center justify-content-center">
                  <button
                    className="nav_btn"
                    onClick={() => setChainShow(true)}
                  >
                    Launch Dapp
                  </button>
                  <div className="social-hero">
                    <Link to="">
                      <Telegram />
                    </Link>
                    <Link to="">
                      <Twitter />
                    </Link>
                    <Link to="">
                      <Youtube />
                    </Link>
                  </div>
                </div>
                <div className="hero-img">
                  <img src="/images/DiamondFist.png" alt="diamond imag" />
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
      <BlockChain show={chainShow} onHide={() => setChainShow(false)} /> 
    </>
  );
};

export default Hero;
