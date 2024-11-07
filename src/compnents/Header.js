import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1>Christ The Messiah Church Abuja</h1>
      <div className="pages_links">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/About" className="link">
          About
        </Link>
        <Link to="/Giving" className="link">
          Giving
        </Link>
        <Link to="/Gallery" className="link">
          Gallery
        </Link>
      </div>
    </div>
  );
};

export default Header;
