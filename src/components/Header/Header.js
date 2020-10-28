import React, { Component } from "react";
import { Link } from "react-router-dom";

import './Header.scss';
import Logo from "../../assets/img/logo.png";
import MainNav from "../MainNav/MainNav";

class Header extends Component {
  state = {
    navIsOpen: false
  }
  toggleMainNav = () => {
    const { navIsOpen } = this.state;
    this.setState({ navIsOpen: !navIsOpen ? true : false })
  }
  render() {
    const { navIsOpen } = this.state;
    return (
      <>
        <header className="header row">
          <div className="header-container">
            <Link to="/" className="navbar-brand header-logo">
              <img src={Logo} alt="TenfiX" />
            </Link>
            <div className="nav-main row">
              <button className="hamburger-menu" id="hamburger-header" onClick={this.toggleMainNav}>
                <svg
                  style={{ width: "24px", height: "24px" }}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#000000"
                    d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </header>
        <MainNav
          navIsOpen={navIsOpen}
        />
      </>
    );
  }
}

export default Header;
