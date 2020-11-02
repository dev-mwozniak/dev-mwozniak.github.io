import React from "react";
import { NavLink } from 'react-router-dom';

const MainNav = props => {
  const { navIsOpen } = props;
  const navStyle = {
    transform: !navIsOpen ? 'translateX(1000px)' : 'translateX(0)'
  }
  return (
    <div className="nav-container">
      <nav className="nav nav-header" id="nav-header" style={navStyle}>
        <NavLink className="nav-item nav-link" to="/o-nas">
          O nas
        </NavLink>
        <NavLink className="nav-item nav-link" to="/oferta">
          Oferta
        </NavLink>
        <NavLink className="nav-item nav-link" to="/blog">
          Blog
        </NavLink>
        <NavLink className="nav-item nav-link nav-item-buy" to="/zamow">
          Zamów
        </NavLink>
      </nav>
    </div>
  );
};

export default MainNav;
