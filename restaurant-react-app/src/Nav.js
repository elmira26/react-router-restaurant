import React from "react";
import "./Styles.css";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="navContainer">
      <ul className="navUl">
        <Link className="link" to="/">
          <li className="logoName">
            <span className="logoR">R</span>estaurant
          </li>
        </Link>
        <Link className="link" to="/menu">
          <li>Menu</li>
        </Link>
        <Link className="link" to="/contact">
          <li>Contact</li>
        </Link>
        <Link className="link" to="/order">
          <li>My order</li>
        </Link>
      </ul>
    </div>
  );
}

export default Nav;
