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
                  Welcome to the first fairlaunched multi-chain ROI Dapp & Open market presale. Please take the time to read our projects website, doc page, join our group chats, and follow our social media channels.
                </p>
                <div className="hero-btn-con d-flex gap-3 align-items-center justify-content-center">
                  <a
                    className="nav_btn"
                    href="https://waffleswap-three.vercel.app/"
                    target="_blank"
                  >
                    WF Prototype
                  </a>
                  <div className="social-hero">
                    <Link to="https://t.me/diamondhandtokenofficial">
                      <Telegram />
                    </Link>
                    <Link to="https://twitter.com/diamondhandteam">
                      <Twitter />
                    </Link>
                    {/* <Link to="">
                      <Youtube />
                    </Link> */}
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
