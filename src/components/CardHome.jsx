import React from "react";
import MainSection from "./MainSection";
import Cards from "./Cards/Cards";

function CardHome() {
  return (
    <>
      <MainSection />
      <div className="container">
        <div className="sections">
          <Cards title="Stove" userLinks="/stove" cardImagelink="/stove.jpg" />
          <Cards
            title="Regulator"
            userLinks="/regulator"
            cardImagelink="/regulator.webp"
          />
        </div>
        <div className="sections">
          <Cards title="Pipe" userLinks="/pipe" cardImagelink="/pipe.jpg" />
          <Cards
            title="Lighter"
            userLinks="/lighter"
            cardImagelink="/steelLighter.jfif"
          />
        
        </div>
      </div>
    </>
  );
}

export default CardHome;
