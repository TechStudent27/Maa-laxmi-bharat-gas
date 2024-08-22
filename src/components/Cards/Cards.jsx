// Cards.jsx

import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

function Cards({ title, userLinks, cardImagelink }) {
  return (
    <>
    
      <div className="card">
        <div className="card-image">
          <Link to={userLinks}>
            <img src={cardImagelink} alt={title} />
          </Link>
        </div>

        <div className="content">
          <Link to={userLinks} className="card-title-link">
            <h2 className="title-h2">{title}</h2>
          </Link>
        </div>
        <div className="button">
          <Link to={userLinks} className="card-read-more-link">
            Read More
          </Link>
        </div>
      </div>
    </>
  );
}

export default Cards;
