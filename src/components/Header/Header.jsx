import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="leftNav">Maa Laxmi Bharat Gas</div>
      <div className="rightNav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
