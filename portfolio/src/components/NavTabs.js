import React from "react";

export const PAGE_NAMES = {
  HOME: "Home",
  ABOUT: "About",
  PORTFOLIO: "Portfolio",
  CONTACT: "Contact"
}

const navthumb = {
  margin:"4px",
  width:"50px",
}

function NavTabs(props) {
  return (
    <p className="navbar">
        <a href="#home" onClick={() => props.handlePageChange("Home")} className="nav-link">
        <img src={require ("./assets/links/home.png")}style={navthumb}></img>
        </a>
        <a href="#about" onClick={() => props.handlePageChange("About")} className="nav-link">
        <img src={require ("./assets/links/about.png")}style={navthumb}></img>
        </a>
        <a href="#portfolio" onClick={() => props.handlePageChange("Portfolio")} className="nav-link">
        <img src={require ("./assets/links/portfolio.png")}style={navthumb}></img>
        </a>
        <a href="#node" onClick={() => props.handlePageChange("Node")} className="nav-link">
        <img src={require ("./assets/links/nodejs.png")}style={navthumb}></img>
        </a>
        <a href="#contact" onClick={() => props.handlePageChange("Contact")} className="nav-link">
        <img src={require ("./assets/links/contact.png")}style={navthumb}></img>
        </a>
    </p>
  );
}

export default NavTabs;
