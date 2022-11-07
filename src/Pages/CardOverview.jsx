import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsHeart, BsThreeDots } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import { RiShareBoxLine } from "react-icons/ri";
import { GiNestedHexagons } from "react-icons/gi";
import { AiTwotoneCopy } from "react-icons/ai";
import { AiOutlineStepBackward } from "react-icons/ai";
const CardOverview = () => {
  const location = useLocation();
  console.log(location.state);
  const val = location.state;
  return (
    <>
      <div className="card-data py-5">
        <div className="container-fluid">
          <div className="row align-item-center justify-content-center">
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-3">
                  <div className="card-left-img">
                    <img
                      className="img-fluid card-img-left"
                      src={val.topImage}
                      alt=""
                    />
                  </div>
                  <div className="p-4 border mt-2">
                    <a className="under-Img" href="/">
                      View Cronoscan Details{" "}
                      <span className="ms-4">
                        <RiShareBoxLine />
                      </span>
                    </a>
                  </div>
                </div>
                <div className="col-md-9">
                  <Link to="/" className="back-button d-flex">
                    <AiOutlineStepBackward className="mt-1"/> <span className="fw-bold">back</span> 
                  </Link>
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
                      <span className="fw-bold ms-2">{val.title}</span>
                      <GiNestedHexagons className="ms-2 cr-icon" />
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-md-8">
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
                    </div>
                    <div className="col-md-4">
                      <div className="d-flex mt-2">
                        <img
                          className="img-fluid card-logo mt-2"
                          src={val.logo}
                          alt=""
                        />
                        <div className="ms-2">
                          <p>Collections</p>
                          <span>Cronus Gorilla</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex mt-3 ">
                    <h3 className="me-2">{val.maintitlle}</h3>
                    <button className="btn btn-outline-primary">
                      {" "}
                      Marketplace
                    </button>
                  </div>
                  $<span className="fw-bold">250</span>
                  <p className="py-3 ">{val.discription}</p>
                  <div className="d-flex my-2">
                    <button className="btn btn-outline-primary me-2">
                      {" "}
                      Art
                    </button>
                    <button className="btn btn-outline-primary">
                      {" "}
                      Cross Chain
                    </button>
                  </div>
                  <div>
                    <a className="text-decoration-none fw-bold" href="/">
                      Ownership
                    </a>
                    <a className="text-decoration-none fw-bold mx-5" href="/">
                      History
                    </a>
                    <a className="text-decoration-none fw-bold" href="/">
                      Offers
                    </a>
                  </div>
                </div>
                <div className="row display-none-last ms-2 p-1 border mt-5">
                  <div className="col-md-7">
                    <div className="d-flex ">
                    <div className="card-last">
                        <img
                          className="card-img-last"
                          src={val.topImage}
                          alt=""
                          width={130}
                        />
                      </div>
                      <div>
                      <h1 className="text-dark ms-4 mt-3 fw-bold">
                        {" "}
                        {val.maintitlle}{" "}
                      </h1>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 ms-auto">
                    <button className="btn btn-primary card-last-btn mt-5">
                      Place a bid
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardOverview;
