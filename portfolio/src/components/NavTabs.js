import React from "react";

export const PAGE_NAMES = {
  HOME: "Home",
  ABOUT: "About",
  PORTFOLIO: "Portfolio",
  CONTACT: "Contact"
}

function NavTabs(props) {
  return (
    <ul className="navbar">
      <li className="nav-item">
        <a href="#home" onClick={() => props.handlePageChange("Home")} className="nav-link">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a href="#about" onClick={() => props.handlePageChange("About")} className="nav-link">
          About
        </a>
      </li>
      <li className="nav-item">
        <a href="#Portfolio" onClick={() => props.handlePageChange("Portfolio")} className="nav-link">
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a href="#contact" onClick={() => props.handlePageChange("Contact")} className="nav-link">
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
