import React from "react";
import { Link } from "react-router-dom";
// import HeroTop from "../Elements/HeroTop";
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top py-4 px-4">
        
          <Link to="/">
            <div>
              <img
                className="quant"
                src="assets/Crypto-logo.svg"
                alt=" Logo "
                width={200}
              />
            </div>
          </Link>

          <div className="input-group rounded">
            <input
              type="search"
              className="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            >
            </input>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className=" header-nav-col collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item position-relative ">
                <Link className="nav-link" aria-current="page" to="/technology">
                  Marketplace
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/commmunity">
                  Drops
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  Brands
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  Create
                </Link>
              </li>
              <span className="vertical-line">|</span>
              <li className="nav-item">
                <Link className="nav-link" to="/build">
                  Sign In
                </Link>
              </li>
              <span className="vertical-line">|</span>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Sign Up
                </Link>
              </li>
              <span className="vertical-line">|</span>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  English
                </Link>
              </li>
            </ul>
          </div>
      </nav>
      {/* <HeroTop/> */}
    </>
  );
};

export default Header;
