import "./Header.css";
import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = React.memo(() => {
  return (
    <header>
      <nav>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dzo0dufcr/image/upload/v1775555642/Gemini_Generated_Image_u7k2z1u7k2z1u7k2-removebg-preview_ddugeu.png"
            alt="Company´s Logo"
            className="logo"
          />
        </Link>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      <nav className="social-links">
        <Link to="/">
          <i className="fab fa-facebook"></i>
        </Link>
        <Link to="/">
          <i className="fab fa-instagram"></i>
        </Link>
        <Link to="/">
          <i className="fab fa-youtube"></i>
        </Link>
        <Link to="/">
          <i className="fab fa-linkedin"></i>
        </Link>
      </nav>
    </header>
  );
});

export default Header;
