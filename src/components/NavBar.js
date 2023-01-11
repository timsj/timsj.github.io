import React from "react";
import { Link } from "react-scroll";

const NavBar = ({ navItems }) => {
  const renderItems = navItems.map((item, i) => {
    return (
      <Link
        key={i}
        to={item}
        smooth={true}
        offset={item === "home" ? -75 : -60} //accounts for navbar and body element
        className="nav-item"
      >
        {item}
      </Link>
    );
  });

  return (
    <nav className="navbar">
      <div className="nav-container">{renderItems}</div>
    </nav>
  );
};

export default NavBar;
