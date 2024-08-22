import { useState } from "react";
import Cards from "../../components/Cards/Cards";
import "../ProductView.css";
import ProductHomeSection from "../ProductHomeSection";

export function Lighter() {
  return (
    <div className="sections">
      <Cards
        title="Normal Ligher"
        userLinks="/normallighter"
        cardImagelink="/steelLighter.jfif"
      />

      <Cards
        title="Fire Ligher"
        userLinks="/firelighter"
        cardImagelink="/firelighter.jpg"
      />
    </div>
  );
}

export function FireLighter() {
  const images = [
    `/firelighter.jpg`,
    `/img/flame1.jpg`,
    `/firelighter.jpg`,
    `/firelighter.jpg`,
  ];

  return (
    <ProductHomeSection
      images={images}
      HomeTitle="Flame Lighter"
      HomeDescription="Using a matchbox is not considered safe for lighting LPG stoves. The recommended solution is the Bharat Gas Flame Lighter, which features advanced technology and a user-friendly design. This flame lighter is not only beautifully designed but also includes a special lock mechanism for added safety, ensuring a secure and reliable ignition every time."
    />
  );
}

export function NormalLigher() {
  const images = [
    `/steelLighter.jfif`,
    `/steelLighter.jfif`,
    `/steelLighter.jfif`,
    `/steelLighter.jfif`,
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
