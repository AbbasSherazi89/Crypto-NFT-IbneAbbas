import React from "react";

import Footer from "./Footer";
import Header from "./Header";

// import HeroTop from "../Elements/HeroTop";

const Base = (props) => {
  return (
    <div>
      <Header />
      {/* <HeroTop/> */}
     
      {props.children}
      <Footer />
    </div>
  );
};

export default Base;
