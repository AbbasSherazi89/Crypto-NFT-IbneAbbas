import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom"
import { HeroCardsData } from "./HeroCardsData";
const Hero = () => {
  // const [data, setData] = useState();
  
  const navigate = useNavigate();

  const NavigateTo=()=>{
    navigate('/carddata', {state:{id:1, name:'Abbas'}});
  }
  return (
    <>
      <div className="hero py-4 px-4">
        Top Collections
        <div className="row top-row pt-3 ">
          <button className="btn btn-outline-primary top-row-btns ms-auto">
            Sort By
          </button>
          <button className="btn btn-outline-primary top-row-btns">
            Sort By
          </button>
        </div>
        {/* Card data */}
        <div className="container">
          <div className="row hero-row">
            {HeroCardsData.map((item, index) => {
              return (
                <div className="col-md-3">
                  <Link to={`/carddata/${item.id}`}>
                  <div key={index} className="card " 
                  // onClick={()=> NavigateTo()}
                  >
                    {item.topImage}
                    <div className="card-body">
                      {item.logo}
                      <span className="text-dark ms-2">{item.logoText}</span>
                      <span className="logo-checked ms-2">
                        {item.chekedCircle}
                      </span>
                      <div className="text-dark fw-bold py-3">
                        {item.title}
                        <span className="ms-3">{item.titlelogo}</span>
                      </div>
                      <span className="text-dark ">{item.time}</span>
                      <div className="text-dark d-flex footer-row">
                        {item.footerdiv}
                        {item.footerbtn}
                      </div>
                    </div>
                  </div>
                  </Link>
                  
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

// {DashData.map((item, index) => {
//   return (
//     <li key={index} className={item.cname}>
//       <Link to={item.path}>
//         {item.icon}
//         <span className="span-text">{item.title}</span>
//       </Link>
//     </li>
//   );
// })}
