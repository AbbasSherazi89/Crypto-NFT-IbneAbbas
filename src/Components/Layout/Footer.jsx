import React from "react";
import { BsInstagram, BsTwitter, BsDiscord, BsTelegram } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="footer-container py-4 px-4">
      <div className="row ">
        <div className="d-flex">
          <span className="footer-icons">
            <BsInstagram />
          </span>
          <span className="footer-icons ms-4">
            <BsTwitter />
          </span>
          <span className="footer-icons ms-4">
            <BsDiscord />
          </span>
          <span className="footer-icons ms-4">
            <BsTelegram />
          </span>
        </div>
        <div className="container-fluid">
          <div className="row py-3">
            <div className="col-md-8 mb-3">
              <p>Copyright © 2022 Crypto.com. All rights reserved.</p>
            </div>
            <div className="col-md-4">
              <ul className=" d-flex justify-content-between">
                <li className="">
                  <a href="/">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="/">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/">
                    T&C
                  </a>
                </li>

                <li>
                  <a href="/">
                    Privacy Notice
                  </a>
                </li>
                <li>
                  <a href="/">
                    Cookies Prefrences
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
