import React from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../Button/Button";
import { AuthContext } from "../../../context/authContext";

const Navbar = () => {
  const location = useLocation().pathname;
  const navLinks = ["/about", "/posts"];

  const { isAuth, setIsAuth } = React.useContext(AuthContext);

  const logout = (e) => {
    e.preventDefault();
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  return (
    <nav className="navbar">
      <div className="navMenu">
        {navLinks.map((path) => (
          <Link
            key={path}
            to={path}
            className={`navLink ${
              location === path && isAuth ? "navLink_active" : ""
            }`}
          >
            {path.charAt(1).toUpperCase() + path.slice(2)}
          </Link>
        ))}
      </div>
      <div className="logout_button">
        <Button onClick={logout}>Logout</Button>
      </div>
    </nav>
  );
};

export default Navbar;
