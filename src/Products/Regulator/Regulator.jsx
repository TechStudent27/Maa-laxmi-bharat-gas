import { useState } from "react";
import Cards from "../../components/Cards/Cards";
import "../ProductView.css";
import ProductHomeSection from "../ProductHomeSection";

export function Regulator() {
  return (
    <div className="sections">
      <Cards
        title="Normal Regulator"
        userLinks="/normalregulator"
        cardImagelink="/regulator.webp"
      />

      <Cards
        title="Pressure Regulator"
        userLinks="/pressureregulator"
        cardImagelink="/pressureRegulator.jpg"
      />
    </div>
  );
}

export function NormalRegulator() {
  const images = [
    `/regulator.webp`,
    `/regulator.webp`,
    `/regulator.webp`,
    `/regulator.webp`,
  ];

  return (
    <ProductHomeSection
      images={images}
      HomeTitle="Hi-Star"
      HomeDescription="Hi-Star BPCL's Hi-Star cooktop features patented technology, making
            it one of its kind in India, with an impressive thermal efficiency
            of 74%. This innovative cooktop can save a typical household one LPG
            cylinder each year, significantly cutting down on annual LPG
            expenses. Renowned for its iconic and trusted design, the Hi-Star
            cooktop is not only strong and durable but also adds a beautiful,
            classy touch to your kitchen, elevating its overall aesthetic."
    />
  );
}

export function PressureRegulator() {
  const images = [
    `/pressureRegulator.jpg`,
    `/pressureRegulator.jpg`,
    `/pressureRegulator.jpg`,
    `/pressureRegulator.jpg`,
  ];

  return (
    <ProductHomeSection
      images={images}
      HomeTitle="Hi-Star"
      HomeDescription="Hi-Star BPCL's Hi-Star cooktop features patented technology, making
          it one of its kind in India, with an impressive thermal efficiency
          of 74%. This innovative cooktop can save a typical household one LPG
          cylinder each year, significantly cutting down on annual LPG
          expenses. Renowned for its iconic and trusted design, the Hi-Star
          cooktop is not only strong and durable but also adds a beautiful,
          classy touch to your kitchen, elevating its overall aesthetic."
    />
  );
}
