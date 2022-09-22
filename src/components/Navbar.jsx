import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Food's Restaurant <i class="fab fa-typo3"></i>
          </NavLink>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/menu"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Menu
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/login"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Login
              </NavLink>
            </li>
          </ul>
          {Button && <Button buttonStyle="btn-_outline">Sign Up</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
