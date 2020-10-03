import React from "react";
import home from "./assets/home.png";

export const PAGE_NAMES = {
  HOME: "Home",
  ABOUT: "About",
  PORTFOLIO: "Portfolio",
  CONTACT: "Contact"
}

function NavTabs(props) {
  return (
    <p class="navbar">
      <div class="home">
        <a href="#home" onClick={() => props.handlePageChange("Home")} class="nav-link">
        <img src={home} alt="home"></img>
        </a>
      </div>
      <div class="about">
        <a href="#about" onClick={() => props.handlePageChange("About")} class="nav-link">
        <img alt="about"></img>
        </a>
      </div>
      <div class="portfolio">
        <a href="#portfolio" onClick={() => props.handlePageChange("Portfolio")} class="nav-link">
        <img alt="portfolio"></img>
        </a>
      </div>
      <div class="node">
        <a href="#node" onClick={() => props.handlePageChange("Node")} class="nav-link">
        <img alt="node"></img>
        </a>
      </div>
      <div class="contact">
        <a href="#contact" onClick={() => props.handlePageChange("Contact")} class="nav-link">
        <img alt="contact"></img>
        </a>
      </div>
    </p>
  );
}

export default NavTabs;
