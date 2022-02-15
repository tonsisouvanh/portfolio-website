import React, { useState } from "react";
import "./Styles.css";
import { NavLink } from "react-router-dom";

import logo from "../../images/tons-logo.png";
function Navbar() {
  const menuLinks = [
    {
      text: "Homeeeeeee",
      path: "/",
    },
    {
      text: "My Projects",
      path: "/projects",
    },
    {
      text: "Contact",
      path: "b",
    },
  ];
  const [click, setClick] = useState(false);

  return (
    <>
      <nav className="nav-container">
        <div className="logo-container">
          <img className="logo" src={logo} alt="logo"></img>
        </div>

        <ul
          className={click ? "menu-container display-menu" : "menu-container"}
        >
          {menuLinks.map((menu, index) => (
            <NavLink
              key={index}
              exact
              to={menu.path}
              className="link"
              activeClassName="active-link"
            >
              <li>{menu.text}</li>
            </NavLink>
          ))}
        </ul>

        <div
          onClick={() => setClick(!click)}
          className={
            click ? "hamburger-menu hamburger-change" : "hamburger-menu"
          }
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
