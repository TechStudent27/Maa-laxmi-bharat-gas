import React, { useState } from "react";
import "./ProductView.css";

const ProductHomeSection = ({ images, HomeTitle, HomeDescription }) => {
  // State to keep track of the currently selected image
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="content-mainSection">
      <div className="content-leftSection">
        <div className="product-view-container">
          {/* Main image display */}
          <div className="main-image">
            <img src={selectedImage} alt="Product" />
          </div>

          {/* Thumbnails */}
          <div className="thumbnail-container">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`thumbnail ${
                  selectedImage === image ? "active" : ""
                }`}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="content-rightSection">
        <h1>{HomeTitle}</h1>
        <p>{HomeDescription}</p>
      </div>
    </div>
  );
};

export default ProductHomeSection;
