import React, { useState, useEffect } from "react";
import "./navbar.scss";
import { HiOutlineMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import BlockChain from "../../Home/AllModals/BlockChain";

const Navbar = () => {
  const [chainShow, setChainShow] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);
  const toggleOffcanvas = () => {
    setOffcanvasOpen(!offcanvasOpen);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  return (
    <>
      <nav
        className={
          scroll
            ? "navbar navbar-expand-lg navScroll"
            : "navbar navbar-expand-lg"
        }
      >
        <div className="container">
          <a className="logo" href="#home">
            <img src="/images/logo.svg" alt="logo" />
          </a>
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
                <li className="nav-item">
                  <a
                    href="#Introduction"
                    className="nav-link"
                    onClick={toggleOffcanvas}
                  >
                    Introduction
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#Uniqueness"
                    className="nav-link"
                    onClick={toggleOffcanvas}
                  >
                    Uniqueness
                  </a>
                </li>
                <li className="nav-item"> 
                  <a
                    href="#Staking"
                    className="nav-link"
                    onClick={toggleOffcanvas}
                  >
                    Staking
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#Tokenomics"
                    className="nav-link"
                    onClick={toggleOffcanvas}
                  >
                    Tokenomics
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#FAQs"
                    className="nav-link"
                    onClick={toggleOffcanvas}
                  >
                    FAQs
                  </a>
                </li>
              </ul>
              <div className="nav-btn d-flex justify-content-center mt-lg-0 mt-4 ms-auto">
                <button className="nav_btn" onClick={() => setChainShow(true)}>
                  Launch Dapp
                </button>
              </div>
            </div>
          </div>

          <div
            className={`${offcanvasOpen ? "show offcanvas-backdrop fade" : ""}`}
            onClick={toggleOffcanvas}
          ></div>
        </div>
      </nav>
      <BlockChain
        show={chainShow}
        onHide={() => setChainShow(false)}
      />
    </>
  );
};

export default Navbar;
