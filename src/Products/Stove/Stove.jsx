import { useState } from "react";
import Cards from "../../components/Cards/Cards";
import "../ProductView.css";
import ProductHomeSection from "../ProductHomeSection";

export function Stove() {
  return (
    <div className="sections">
      <Cards
        title="Steel Stove"
        userLinks="/steelstove"
        cardImagelink="/histar.jpg"
      />

      <Cards
        title="GlassTop Stove"
        userLinks="/glasstop"
        cardImagelink="/glasstop.jpg"
      />
    </div>
  );
}

export function SteelStove() {
  const histarImages = [
    `/histar.jpg`,
    `/img/histar1.jpg`,
    `/img/histar2.jpg`,
    `/img/histar3.jpg`,
  ];

  const JupiterImages = [
    `/img/jupiter1.jpg`,
    `/img/jupiter2.jpg`,
    `/img/jupiter4.jpg`,
    `/img/jupiter5.jpg`,
  ];

  return (
    <>
      <ProductHomeSection
        images={histarImages}
        HomeTitle="Hi-Star"
        HomeDescription="Hi-Star BPCL's Hi-Star cooktop features patented technology, making
            it one of its kind in India, with an impressive thermal efficiency
            of 74%. This innovative cooktop can save a typical household one LPG
            cylinder each year, significantly cutting down on annual LPG
            expenses. Renowned for its iconic and trusted design, the Hi-Star
            cooktop is not only strong and durable but also adds a beautiful,
            classy touch to your kitchen, elevating its overall aesthetic."
      />

      <ProductHomeSection
        images={JupiterImages}
        HomeTitle="BPCL Jupiter"
        HomeDescription="The cooktop features a strong stainless steel body paired with heavy-duty stainless steel pan support, designed to with stand the rigors of heavy cooking. This robust construction ensures long-lasting durability and stability, even under the weight of large cookware. Its sleek and stylish design not only complements any modern kitchen but also fulfills your culinary aspirations by combining functionality with elegance. The high-quality materials and thoughtful design make this cooktop a reliable and attractive centerpiece for your kitchen."
      />
    </>
  );
}

export function Glasstop() {
  const images = [
    `/img/gs1.jpg`,
    `/img/gs2.jpg`,
    `/img/gs3.jpg`,
    `/img/gs4.jpg`,
  ];

  return (
    <ProductHomeSection
      images={images}
      HomeTitle="Glass Top"
      HomeDescription="The glass top is beautifully designed with heavy-duty, thermal-resistant toughened glass, providing both durability and safety. This elegant glass top not only gives your kitchen a modern and sophisticated look but also adds a touch of luxury. Certified by Bharat Gas, this cooktop ensures trusted performance and reliability, enhancing your kitchen's contemporary appeal while offering peace of mind with its robust construction. The combination of style, strength, and trustworthiness makes this cooktop a perfect addition to any modern kitchen."
    />
  );
}
