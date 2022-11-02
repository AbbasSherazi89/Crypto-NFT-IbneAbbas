import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
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
        <h3 className="py-3">Top Collections</h3>
        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          infinite={false}
          autoPlay={false}
          autoPlaySpeed={3000}
        >
          <div className="col-10">
            <div className="card card1">
              <div className="card-body">
                <div className="card-footer">
                  <img
                    className="RoundedImage_roundedImg__pebtl css-dmwzq0"
                    src="https://d2vi0z68k5oxnr.cloudfront.net/e13e2f91-b3ec-45b8-b32b-a691966b9791/original.webp?d=sm-logo"
                    alt=""
                  />
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
