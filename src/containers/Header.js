import React from "react";
import { Link } from "react-router-dom";

import logo from "../img/logo.png";

const Header = () => {
  return (
    <div id="header">
      <div id="logo-header">
        <img src={logo} alt="" />
      </div>
      <div id="menu-header">
        <Link to="/">Movies</Link>
        <Link to="/tv">TV Shows</Link>
      </div>
    </div>
  );
};

export default Header;
