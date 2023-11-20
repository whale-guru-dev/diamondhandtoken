import React, { useState, useEffect } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import Ethereum from "../../../Assets/Icons/Ethereum";
import Pulse from "../../../Assets/Icons/Pulse";
import Binancedex from "../../../Assets/Icons/Binancedex";
import Polygon from "../../../Assets/Icons/Polygon";
import ConnectBtn from "../../Header/ConnectBtn";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const toggleOffcanvas = () => {
    setOffcanvasOpen(!offcanvasOpen);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  const toggleConnection = () => {
    setIsConnected(!isConnected);
  };
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
                {dashboardData.map((item) => (
                  <a href="/#" className="staking-item">
                    <span>{item.text}</span>
                    {item.number}
                    <span>{item.icon}</span>
                  </a>
                ))}
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
];

const dashboardData = [
  {
    icon: <Pulse />,
    text: "DH Price",
    number: "$15.47",
  },
  {
    icon: <Binancedex />,
    text: "DH Price",
    number: "$15.47",
  },
  {
    icon: <Ethereum />,
    text: "DH Price",
    number: "$15.47",
  },
  {
    icon: <Polygon />,
    text: "DH Price",
    number: "$15.47",
  },
];
