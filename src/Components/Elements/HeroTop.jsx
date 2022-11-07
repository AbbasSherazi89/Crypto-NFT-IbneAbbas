import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BsCheckCircle } from "react-icons/bs";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const HeroTop = () => {
  return (
    <>
      <div className="hero-top py-4 px-4">
        <h3 className="pt-2">Top Collections</h3>
        
        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          infinite={true}
          // autoPlay={true}
          // autoPlaySpeed={3000}
          rewind={true}
          arrows={true}
        >

            <div className="card card1 position-relative">
              <div className="card-body ">
                <div className="card-ft">
                  <img
                    className="rounded-circle"
                    src="https://d2vi0z68k5oxnr.cloudfront.net/e13e2f91-b3ec-45b8-b32b-a691966b9791/original.webp?d=sm-logo"
                    alt=""
                  />
                  <div className="card-text ps-4">
                    <div className="text">RENGA</div>
                  </div>
                  <div className="circle-checked ps-4">
                    <BsCheckCircle className="circle" />
                  </div>
                </div>
              </div>
            </div>

            <div className="card card2 position-relative">
              <div className="card-body ">
                <div className="card-ft">
                  <img
                    className="rounded-circle"
                    src="https://d2vi0z68k5oxnr.cloudfront.net/cf1d2314-9d23-4564-aa76-38ed6b4e77ad/original.png?d=sm-logo"
                    alt=""
                  />
                  <div className="card-text ps-4">
                    <div className="text">Art Blocks</div>
                  </div>
                  <div className="circle-checked ps-4">
                    <BsCheckCircle className="circle" />
                  </div>
                </div>
              </div>
            </div>
       

            <div className="card card3 position-relative">
              <div className="card-body ">
                <div className="card-ft">
                  <img
                    className="rounded-circle"
                    src="https://d2vi0z68k5oxnr.cloudfront.net/cf1d2314-9d23-4564-aa76-38ed6b4e77ad/original.png?d=sm-logo"
                    alt=""
                  />
                  <div className="card-text ps-4">
                    <div className="text">Mutant Ape...</div>
                  </div>
                  <div className="circle-checked ps-4">
                    <BsCheckCircle className="circle" />
                  </div>
                </div>
              </div>
            </div>
 
            <div className="card card4 position-relative">
              <div className="card-body ">
                <div className="card-ft">
                  <img
                    className="rounded-circle"
                    src="https://d2vi0z68k5oxnr.cloudfront.net/58e9fc18-9c9e-435a-b7dc-bf3c364fad7b/original.png?d=sm-logo"
                    alt=""
                  />
                  <div className="card-text ps-4">
                    <div className="text">Meebits</div>
                  </div>
                  <div className="circle-checked ps-4">
                    <BsCheckCircle className="circle" />
                  </div>
                </div>
              </div>
            </div>
       
            <div className="card card5 position-relative">
              <div className="card-body ">
                <div className="card-ft">
                  <img
                    className="rounded-circle"
                    src="https://d2vi0z68k5oxnr.cloudfront.net/77ffeae9-9666-4da9-9386-a87b73c2b6d7/original.png?d=sm-logo"
                    alt=""
                  />
                  <div className="card-text ps-4">
                    <div className="text">Bored Ape...</div>
                  </div>
                  <div className="circle-checked ps-4">
                    <BsCheckCircle className="circle" />
                  </div>
                </div>
              </div>
            </div>
  
            <div className="card card6 position-relative">
              <div className="card-body ">
                <div className="card-ft">
                  <img
                    className="rounded-circle"
                    src="https://d2vi0z68k5oxnr.cloudfront.net/5d705f0f-8553-41cc-babb-973e96dc86d8/original.jpeg?d=sm-logo"
                    alt=""
                  />
                  <div className="card-text ps-4">
                    <div className="text">Otherdeed for Ot..</div>
                  </div>
                  <div className="circle-checked ps-4">
                    <BsCheckCircle className="circle" />
                  </div>
                </div>
              </div>
            </div>
 
            <div className="card card7 position-relative">
              <div className="card-body ">
                <div className="card-ft">
                  <img
                    className="rounded-circle"
                    src="https://d2vi0z68k5oxnr.cloudfront.net/75c36624-6eb1-487f-aa5a-1de8c3b71538/original.jpeg?d=sm-logo"
                    alt=""
                  />
                  <div className="card-text ps-4">
                    <div className="text">Azuki</div>
                  </div>
                  <div className="circle-checked ps-4">
                    <BsCheckCircle className="circle" />
                  </div>
                </div>
              </div>
            </div>
   
            <div className="card card8 position-relative">
              <div className="card-body ">
                <div className="card-ft">
                  <img
                    className="rounded-circle"
                    src="https://d2vi0z68k5oxnr.cloudfront.net/e008fa20-2fda-4c4b-96be-d81329f117f3/original.png?d=sm-logo"
                    alt=""
                  />
                  <div className="card-text ps-4">
                    <div className="text">Moonbirds</div>
                  </div>
                  <div className="circle-checked ps-4">
                    <BsCheckCircle className="circle" />
                  </div>
                </div>
              </div>
            </div>
          
        </Carousel>
      </div>
    </>
  );
};

export default HeroTop;
