import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "../CSS/Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <p className="nav__logo">
          <span className="nav__a">D</span>O <span className="nav__r">G</span>
          REAT
        </p>
      </div>
      <div className={menu ? "navbar__content mobilenav" : "navbar__content"}>
        <ul className="navbar__ul">
          <li className="navbar__li ">
            <NavLink
              className="navbar__navlink"
              activeClassName="navbar__active"
              exact
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="navbar__li">
            <NavLink
              className="navbar__navlink"
              activeClassName="navbar__active"
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li className="navbar__li">
            <NavLink
              className="navbar__navlink"
              activeClassName="navbar__active"
              to="/work"
            >
              Work
            </NavLink>
          </li>
          <li className="navbar__li">
            <NavLink
              className="navbar__navlink"
              activeClassName="navbar__active"
              to="/service"
            >
              Services
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="hamburgerMenu">
        <GiHamburgerMenu onClick={() => setMenu(!menu)} />
      </div>
    </div>
  );
};

export default Navbar;
