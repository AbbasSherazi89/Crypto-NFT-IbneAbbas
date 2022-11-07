import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import {Data} from './Data'
import { GiNestedHexagons } from "react-icons/gi";
import { BsCheckCircle } from "react-icons/bs";

const data = [
  {
    id: 1,
    topImage: "assets/original1.gif",
    logo: "assets/original11.png",
    logoText: "Cronus World Tour",
    title: "Cronos World Tour at...",
    maintitlle: "Cronos World Tour at Token2049 Singapore 2022",
    discription:
      "Celebrate Cronos World Tour ! This is a commemorative NFT. Collectible created in September 2022 on Cronos mainnet during the Token 2049 Singapore conference.",
    rich: "1 minted",
    price: "20$",
    endTime: "40 minutes",
    lasttext: "Cronos World Tour at Token2049 Singapore 2022",
  },
  {
    id: 2,
    topImage: "assets/original2.gif",
    logo: "assets/original11.png",
    logoText: "Cronus World Tour",
    title: "Cronos World Tour at...",
    maintitlle: "Cronos World Tour at Messari Mainnet 2022",
    discription:
      "Celebrate Cronos World Tour ! This is a commemorative NFT. Collectible created in September 2022 on Cronos mainnet during the Messari Mainnet conference.",
    rich: "1 minted",
    price: "30$",
    endTime: "1 hour",
    lasttext: "Cronos World Tour at Token2049 Singapore 2022",
  },
  {
    id: 3,
    topImage: "assets/original3.png",
    logo: "assets/original12.png",
    logoText: "ZED RUN",
    title: "One Rainy Wish",
    maintitlle: "Cronos World Tour at Messari Mainnet 2022",
    discription:
      "Celebrate Cronos World Tour ! This is a commemorative NFT. Collectible created in September 2022 on Cronos mainnet during the Messari Mainnet conference.",
    rich: "1 minted",
    price: "01$",
    endTime: "5 hours",
    lasttext: "Cronos World Tour at Token2049 Singapore 2022",
  },
  {
    id: 4,
    topImage: "assets/original4.png",
    logo: "assets/original12.png",
    logoText: "ZED RUN",
    title: "Chikko",
    maintitlle: "Midnight cheif",
    discription: "",
    rich: "1 minted",
    price: "20$",
    endTime: "4 hours",
    lasttext: "Cronos World",
  },
  {
    id: 5,
    topImage: "assets/original5.jpeg",
    logo: "assets/original13.gif",
    logoText: "Loaded Lions",
    title: "Loaded Lion #9159",
    maintitlle: "Cronos World Tour at Messari Mainnet 2022",
    discription:
      "Celebrate Cronos World Tour ! This is a commemorative NFT. Collectible created in September 2022 on Cronos mainnet during the Messari Mainnet conference.",
    rich: "1 minted",
    price: "300$",
    endTime: "6 days",
    lasttext: "Cronos World Tour at Token2049 Singapore 2022",
  },
  {
    id: 6,
    topImage: "assets/original6.jpeg",
    logo: "assets/original13.gif",
    logoText: "Loaded Lions",
    title: "Loaded Lion #8210",
    maintitlle: "Cronos World Tour at Messari Mainnet 2022",
    discription:
      "Celebrate Cronos World Tour ! This is a commemorative NFT. Collectible created in September 2022 on Cronos mainnet during the Messari Mainnet conference.",
    rich: "1 minted",
    price: "20$",
    endTime: "10 minutes",
    lasttext: "Cronos World Tour at Token2049 Singapore 2022",
  },
  {
    id: 7,
    topImage: "assets/original7.png",
    logo: "assets/original14.png",
    logoText: "Meta Cyborgs",
    title: "The Meta Cyborgs #3111",
    maintitlle: "Cronos World Tour at Messari Mainnet 2022",
    discription:
      "Celebrate Cronos World Tour ! This is a commemorative NFT. Collectible created in September 2022 on Cronos mainnet during the Messari Mainnet conference.",
    rich: "1 minted",
    price: "20$",
    endTime: "30 minutes",
    lasttext: "Cronos World Tour at Token2049 Singapore 2022",
  },
  {
    id: 8,
    topImage: "assets/original8.png",
    logo: "assets/original14.png",
    logoText: "Bad Billy Goats",
    title: "Bad Billy Goats #1983",
    maintitlle: "Cronos World Tour at Messari Mainnet 2022",
    discription:
      "Celebrate Cronos World Tour ! This is a commemorative NFT. Collectible created in September 2022 on Cronos mainnet during the Messari Mainnet conference.",
    rich: "1 minted",
    price: "25$",
    endTime: "25 minutes",
    lasttext: "Cronos World Tour at Token2049 Singapore 2022",
  },
];

const MarketPlace = () => {
  const navigate = useNavigate();

  const toNavigate = (v) => {
    navigate("/cardoverview", { state: v });
    // console.log({state:v});
  };
  return (
    <>
      {/* <Data/> */}
      <div className="hero py-4">
        <div className="container">
          <div className="row top-row pt-3 ">
            <div className="col-md-6"></div>
            <div className="col-md-6 top-col-2 ">
              <button className="btn btn-outline-primary top-row-btns ms-auto">
                Sort By
              </button>
              <button className="btn btn-outline-primary top-row-btns">
                Sort By
              </button>
            </div>
          </div>
          <div className="row hero-row">
            {data.map((item, index) => {
              return (
                <div className="col-md-3">
                  {/* <Link to={`/carddata/${item.id}`}> */}
                  <div
                    key={index}
                    className="card"
                    onClick={() => {
                      toNavigate(item);
                    }}
                  >
                    <img
                      className="img-fluid card-img-top"
                      src={item.topImage}
                      alt=""
                    />

                    <div className="card-body">
                      <div className="d-flex">
                        <img
                          className="img-fluid card-logo"
                          src={item.logo}
                          alt=""
                        />
                        <span className="text-dark ms-2">{item.logoText}</span>
                        <span className="logo-checked ms-2">
                          <BsCheckCircle />
                        </span>
                      </div>

                      <div className="d-flex text-dark fw-bold py-3">
                        {item.title}
                        <span className="ms-3">
                          <GiNestedHexagons />
                        </span>
                      </div>

                      <span className="text-dark ">{item.rich}</span>

                      <div className="last-card fw-bold text-dark py-2">
                        <div className="d-flex">
                          <span className="text-muted">Current Bid</span>
                          <span className="ms-auto"> {item.price} </span>
                        </div>

                        <div className="d-flex">
                          <span className="text-muted">Ends In</span>
                          <span className="ms-auto "> {item.endTime} </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* </Link> */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketPlace;
