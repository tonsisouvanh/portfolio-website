import React, { useState } from "react";
import "./Styles.css";
import { NavLink } from "react-router-dom";

import logo from "../../images/tons-logo.png";
function Navbar() {
  const menuLinks = [
    {
      text: "Home",
      path: "/",
    },
    {
      text: "My Project",
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
      <nav className="nav__container">
        <div className="logo__container">
          <img className="logo" src={logo} alt="logo"></img>
        </div>

        <ul id={click? "display__menu":""} className="menu__container">
          {menuLinks.map((menu, index) => (
            <NavLink
              key={index}
              exact
              to={menu.path}
              className="link"
              activeClassName="active__link"
            >
              <li>{menu.text}</li>
            </NavLink>
          ))}
        </ul>

        <div
          onClick={() => setClick(!click)}
          className={
            click ? "hamburger__menu hamburger__change" : "hamburger__menu"
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
