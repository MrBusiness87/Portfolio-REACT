import React, { Component } from "react";
import NavTabs, { PAGE_NAMES } from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Portfolio";
import Contact from "./pages/Contact";

class PortfolioContainer extends Component {
  state = {
    currentPage: PAGE_NAMES.HOME
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  
  renderTabs = () => {
    switch (this.state.currentPage) {
      case PAGE_NAMES.HOME:
        return <Home />;
      case PAGE_NAMES.ABOUT:
        return <About />;
      case PAGE_NAMES.PORTFOLIO:
        return <Blog />;
      case PAGE_NAMES.CONTACT:
        return <Contact />;
      default:
        return <Home />
    }
  }

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderTabs()}
      </div>
    );
  }
}

export default PortfolioContainer;
