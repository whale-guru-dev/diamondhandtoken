import React, { useState, useEffect } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import Ethereum from "../../../Assets/Icons/Ethereum";
import Binancedex from "../../../Assets/Icons/Binancedex";
import Polygon from "../../../Assets/Icons/Polygon";

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
              <ul className="nav_list ms-auto">
                <li className="nav-item ">
                  <a href="/#" className="staking-item">
                    <span>DHS Price</span>
                    $15.47
                    <span>
                      <Ethereum />
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/#" className="staking-item">
                    <span>DHS Price</span>
                    $15.47
                    <span>
                      <Binancedex />
                    </span>
                  </a>
                </li>
                <li className="nav-item ">
                  <a href="/#" className="staking-item">
                    <span>DHS Price</span>
                    $15.47
                    <span>
                      <Polygon />
                    </span>
                  </a>
                </li>
              </ul>
              <div className="nav-btn d-flex justify-content-center mt-lg-0 mt-4 ms-auto">
                {isConnected ? (
                  <button className="nav_btn active" onClick={toggleConnection}>
                    0x74d...3629
                  </button>
                ) : (
                  <button className="nav_btn" onClick={toggleConnection}>
                    Connect Wallet
                  </button>
                )}
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
