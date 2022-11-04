import React from 'react'
// import {useLocation} from 'react-router-dom';
import { HeroCardsData } from '../Components/Elements/HeroCardsData';
const CardsData = () => {

    // const location = useLocation();
  return (
    <>
    
    <div className="carddata">
    <div key={HeroCardsData.id} className="card " 
                  // onClick={()=> NavigateTo()}
                  >
                    {HeroCardsData.topImage}
                    <div className="card-body">
                      {HeroCardsData.logo}
                      <span className="text-dark ms-2">{HeroCardsData.logoText}</span>
                      <span className="logo-checked ms-2">
                        {HeroCardsData.chekedCircle}
                      </span>
                      <div className="text-dark fw-bold py-3">
                        {HeroCardsData.title}
                        <span className="ms-3">{HeroCardsData.titlelogo}</span>
                      </div>
                      <span className="text-dark ">{HeroCardsData.time}</span>
                      <div className="text-dark d-flex footer-row">
                        {HeroCardsData.footerdiv}
                        {HeroCardsData.footerbtn}
                      </div>
                    </div>
                  </div>
    </div>
        

    </>
  )
}

export default CardsData
