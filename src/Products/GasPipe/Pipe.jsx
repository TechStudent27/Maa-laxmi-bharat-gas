import { useState } from "react";
import "../ProductView.css";
import ProductHomeSection from "../ProductHomeSection";

function Pipe() {
  const images = [
    `pipe.jpg`,
    `/img/pipe1.jpg`,
    `/img/pipe2.jpg`,
    `/img/pipe3.jpg`,
  ];

  return (
    <ProductHomeSection
      images={images}
      HomeTitle="Suraksha Hose"
      HomeDescription="The government has made it mandatory for all LPG users to use an original LPG Suraksha Hose, which can be purchased at your authorized gas agency. We recommend the Bharat Gas Suraksha Hose, known for its reliability, safety, and user-friendliness. Additionally, it is important to replace the hose every five years, whether it is used or not, to ensure continued safety and compliance with regulations."
    />
  );
}

export default Pipe;
