import React from "react";
import { GiNestedHexagons } from "react-icons/gi";
import { BsCheckCircle } from "react-icons/bs";

export const HeroCardsData = [
  {
    topImage: (
      <img className="img-fluid card-img-top" src="https://d2vi0z68k5oxnr.cloudfront.net/29c02cf8-e427-41da-877c-bdb06b2d0f05/original.gif"
        alt=""
      />
    ),
    logo: (
      <img className="img-fluid card-logo" src="https://d2vi0z68k5oxnr.cloudfront.net/6f1bc1d8-8e81-4640-85fe-20e8bd845be6/original.png?d=sm-logo"
        alt=""
      />
    ),
    logoText: 'Cronus World Tour',
    chekedCircle: <BsCheckCircle />,
    title: "Cronos World Tour at Token2049 Singapore 2022",
    titlelogo: <GiNestedHexagons />,
    time: "1 minted",
    footerdiv:<div className="row footer-row">
        <div className="card card-div bg-danger-row">
            <div className="d-flex">
                <p className="card-footer-text text-muted ">Current Bid</p>
                <p className="card-footer-text ms-auto">20$</p>
            </div>
            <div className="d-flex">
                <p className="card-footer-text text-muted ">Ends In</p>
                <p className="card-footer-text ms-auto">40 minutes</p>
            </div>
        </div>
    </div>,
    // footer1: "Current Bid",
    // footer2: "20$",
    // footer3: "Ends In",
    // footer: "40 minutes",
    footerbtn: <button className="btn btn-primary bid-btn ms-auto">Bid</button>,
  },
];
