import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation().pathname;
  const navLinks = ["/login", "/about", "/posts"];

  return (
    <nav className="navbar">
      <div className="navMenu">
        {navLinks.map((path) => (
          <Link
            key={path}
            to={path}
            className={`navLink ${location === path ? "navLink_active" : ""}`}
          >
            {path.charAt(1).toUpperCase() + path.slice(2)}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
