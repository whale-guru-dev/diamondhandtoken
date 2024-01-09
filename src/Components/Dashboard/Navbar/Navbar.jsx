import React, { useState, useEffect, useRef } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import Ethereum from "../../../Assets/Icons/Ethereum";
import Pulse from "../../../Assets/Icons/Pulse";
import Binancedex from "../../../Assets/Icons/Binancedex";
import Polygon from "../../../Assets/Icons/Polygon";
import ConnectBtn from "../../Header/ConnectBtn";
import useSuperToken from "../../../Hooks/useSuperToken";
import Avalanche from "../../../Assets/Icons/Avalanche";
import { SuperToken_ADDRESS } from "../../../Const/super-token-consts";
import Arbitrum from "../../../Assets/Icons/Arbitrum";

const Navbar = () => {
  const handler = useRef(null);
  const [scroll, setScroll] = useState(false);
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [tokenEthPrice, setTokenEthPrice] = useState(0);
  const [tokenBscPrice, setTokenBscPrice] = useState(0);
  const [tokenPolygonPrice, setTokenPolygonPrice] = useState(0);
  const [tokenPlsPrice, setTokenPlsPrice] = useState(0);
  const [tokenAvalanchePrice, setTokenAvalanchePrice] = useState(0);
  const [tokenArbitrumPrice, setTokenArbitrumPrice] = useState(0);

  const {
    onGetTokenPrice
  } = useSuperToken(1);

  const toggleOffcanvas = () => {
    setOffcanvasOpen(!offcanvasOpen);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  useEffect(() => {
    async function getPrices() {
        const promises = [];

        promises.push(
          onGetTokenPrice('eth', SuperToken_ADDRESS),
          onGetTokenPrice('bsc', SuperToken_ADDRESS),
          onGetTokenPrice('polygon_pos', SuperToken_ADDRESS),
          onGetTokenPrice('pulsechain', SuperToken_ADDRESS),
          onGetTokenPrice('avax', SuperToken_ADDRESS),
          onGetTokenPrice('arbitrum', SuperToken_ADDRESS),
        );

        const [tokenEthPrice, tokenBscPrice, tokenPolygonPrice, tokenPlsPrice, tokenAvalanchePrice, tokenArbitrumPrice] = await Promise.all(promises);
        setTokenEthPrice(tokenEthPrice);
        setTokenBscPrice(tokenBscPrice);
        setTokenPolygonPrice(tokenPolygonPrice);
        setTokenPlsPrice(tokenPlsPrice);
        setTokenAvalanchePrice(tokenAvalanchePrice);
        setTokenArbitrumPrice(tokenArbitrumPrice);

        return true;
    }

    handler.current = setInterval(() => {
      getPrices();
    }, 30000);

    return () => {
        if (handler.current) {
            clearInterval(handler.current);
        }
    };
  }, []);

  // const toggleConnection = () => {
  //   setIsConnected(!isConnected);
  // };
  return (
    <>
      <nav
        className={
          scroll
            ? "navbar navbar-expand-lg navScroll "
            : "navbar navbar-expand-lg"
        }
      >
        <div className="container">
          <Link className="logo" to="/">
            <img src="/images/logo.svg" alt="logo" />
          </Link>
          <button
            className="navbar-toggler d-lg-none ms-auto pe-0"
            type="button"
            onClick={toggleOffcanvas}
          >
            <HiOutlineMenu />
          </button>

          <div className={`navbarOffset ${offcanvasOpen ? "show" : ""}`}>
            <div className="offset-header">
              <Link to="/" className="offcanvas-title">
                <img src="/images/logo.svg" alt="logo" height={50} />
              </Link>
              <button
                type="button"
                className="btn-close"
                onClick={toggleOffcanvas}
              ></button>
            </div>
            <div className="d-lg-flex align-items-center justify-content-center gap-4">
              <div className="nav-btn d-flex justify-content-center mt-lg-0 mt-4 ms-auto">
                {/* {dashboardData.map((item) => (
                  <a href="/#" className="staking-item">
                    <span>{item.text}</span>
                    {item.number}
                    <span>{item.icon}</span>
                  </a>
                ))} */}
                  <a href="/#" className="staking-item">
                    <span>DT Price</span>
                    ${Number(tokenPlsPrice).toFixed(2)}
                    <span><Pulse /></span>
                  </a>
                  <a href="/#" className="staking-item">
                    <span>DT Price</span>
                    ${Number(tokenBscPrice).toFixed(2)}
                    <span><Binancedex /></span>
                  </a>
                  <a href="/#" className="staking-item">
                    <span>DT Price</span>
                    ${Number(tokenEthPrice).toFixed(2)}
                    <span><Ethereum /></span>
                  </a>
                  <a href="/#" className="staking-item">
                    <span>DT Price</span>
                    ${Number(tokenPolygonPrice).toFixed(2)}
                    <span><Polygon /></span>
                  </a>
                  <a href="/#" className="staking-item">
                    <span>DT Price</span>
                    ${Number(tokenAvalanchePrice).toFixed(2)}
                    <span><Avalanche /></span>
                  </a>
                  <a href="/#" className="staking-item">
                    <span>DT Price</span>
                    ${Number(tokenArbitrumPrice).toFixed(2)}
                    <span><Arbitrum /></span>
                  </a>
                <div className="dropdown-center select-dropdown">
                  <button
                    className="select-btn"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Select Chain
                  </button>
                  <ul className="dropdown-menu">
                    {selectData.map((item) => (
                      <li>
                        <Link to={item.link} className="dropdown-item">
                          {item.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* {isConnected ? (
                  <button className="nav_btn active" onClick={toggleConnection}>
                    0x74d...3629
                  </button>
                ) : (
                  <button className="nav_btn" onClick={toggleConnection}>
                    Connect Wallet
                  </button>
                )} */}
                <ConnectBtn />
              </div>
            </div>
          </div>

          <div
            className={`${offcanvasOpen ? "show offcanvas-backdrop fade" : ""}`}
            onClick={toggleOffcanvas}
          ></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

const selectData = [
  {
    link: "/binance-chain",
    text: "Binance Chain",
  },
  {
    link: "/ethereum",
    text: "Ethereum",
  },
  {
    link: "/polygon",
    text: "Polygon",
  },
  {
    link: "/pulsechain",
    text: "PulseChain",
  },
  {
    link: "/avalanche",
    text: "Avalanche",
  },
  {
    link: "/arbitrum",
    text: "Arbitrum One",
  },
];

// const dashboardData = [
//   {
//     icon: <Pulse />,
//     text: "DH Price",
//     number: "$15.47",
//   },
//   {
//     icon: <Binancedex />,
//     text: "DH Price",
//     number: "$15.47",
//   },
//   {
//     icon: <Ethereum />,
//     text: "DH Price",
//     number: "$15.47",
//   },
//   {
//     icon: <Polygon />,
//     text: "DH Price",
//     number: "$15.47",
//   },
// ];
