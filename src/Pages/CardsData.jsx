import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { BsHeart, BsThreeDots } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import { RiShareBoxLine } from "react-icons/ri";
import { GiNestedHexagons } from "react-icons/gi";
import { AiTwotoneCopy } from "react-icons/ai";
import { HeroCardsData } from "../Components/Elements/HeroCardsData";

// import { HeroCardsData } from "./HeroCardsData";

const CardsData = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const FilterArray = HeroCardsData.filter((itemData) =>
      id.includes(itemData.id)
    );

    setData(FilterArray);
  }, []);

  console.log("data >>>>>>", data)
  return (
    <>
      <div className="card-data">
        {data.map((item, index) => {
          return (
            <div className="py-5">
              <div className="row align-item-center justify-content-center">
                <div className="col-md-10">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="card-left-img">
                        <img
                          src="assets/original3.png"
                          alt=""
                          width={300}
                          />
                        {/* {item.topImage} */}
                        </div>
                    </div>
                    <div className="col-md-7">
                      <button className="btn btn-primary">back</button>
                      <div className="top-icons">
                        <div className="d-flex">
                          <BsHeart className="icons me-2" />
                          <p> 3 </p>
                        </div>
                        <div className="d-flex mx-3">
                          <AiFillEye className="icons me-2" />
                          <p> 524 </p>
                        </div>
                        <div className="d-flex">
                          <FaShare className="icons me-2" />
                          <p> Share </p>
                        </div>
                        <div className="d-flex ms-auto">
                          <BsThreeDots className="icons me-2" />
                        </div>
                      </div>

                      <div className="my-3">
                        <p>
                          Chain:
                          <span className="fw-bold ms-2">{item.title}</span>
                          <GiNestedHexagons className="ms-2 cr-icon" />
                        </p>
                      </div>

                      <div className="d-flex">
                        <img
                          className="img-fluid card-logo"
                          src="https://d2vi0z68k5oxnr.cloudfront.net/ab34825b-7085-4433-b674-16d22e5de3eb/original.png?d=sm-logo"
                          alt=""
                        />
                        <div className="ms-2">
                          <p>Creator</p>
                          <span className="mt-0">
                            0x8B1Ac0b75a0f2Aef147800ea23e06324{" "}
                          </span>
                          <a href="/">
                            <AiTwotoneCopy className="copy-icon" />
                          </a>
                        </div>
                        <div className="ms-auto d-flex">
                          <img
                            className="img-fluid card-logo"
                            src="https://d2vi0z68k5oxnr.cloudfront.net/27efcf18-c39a-46ac-90a6-4570ec2aa2d4/original.webp?d=sm-logo"
                            alt=""
                          />
                          <div className="ms-2">
                            <p>Collections</p>
                            <span>Cronus Gorilla</span>
                          </div>

                        </div>
                       
                      </div>
                      <div className="d-flex mt-3 ">
                          <h3 className="me-2">Mafia #84 </h3>
                          <button className="btn btn-outline-primary"> Marketplace</button>
                        </div>
                        $<span className="fw-bold">250</span>
                        <div className="d-flex my-2">
                        <button className="btn btn-outline-primary me-2"> Art</button>
                        <button className="btn btn-outline-primary"> Cross Chain</button>
                        </div>
                        <div >
                          <a className="text-decoration-none fw-bold" href="/">Ownership</a>
                          <a className="text-decoration-none fw-bold mx-5" href="/">History</a>
                          <a className="text-decoration-none fw-bold" href="/">Offers</a>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            // <div className="col-md-3">
            //     <div
            //       key={index}
            //       className="card"
            //       >
            //       {item.topImage}
            //       <div className="card-body">
            //         {item.logo}
            //         <span className="text-dark ms-2">{item.logoText}</span>
            //         <span className="logo-checked ms-2">
            //           {item.chekedCircle}
            //         </span>
            //         <div className="text-dark fw-bold py-3">
            //           {item.title}
            //           <span className="ms-3">{item.titlelogo}</span>
            //         </div>
            //         <span className="text-dark ">{item.time}</span>
            //         <div className="text-dark d-flex footer-row">
            //           {item.footerdiv}
            //           {item.footerbtn}
            //         </div>
            //       </div>
            //     </div>
            //   </div>
          );
        })}
      </div>
    </>
  );
};

export default CardsData;
