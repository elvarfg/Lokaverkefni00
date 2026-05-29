import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import logo from "../assets/images/nordicbiteslogo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="header">
      <Link to="/" className="logo-container" onClick={closeMenu}>
        <img src={logo} alt="Nordic Bite logo" className="logo" />
      </Link>

      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Open navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={menuOpen ? "nav nav-open" : "nav"}>
        <NavLink to="/" onClick={closeMenu}>
          Home
        </NavLink>

        <NavLink to="/menu" onClick={closeMenu}>
          Menu
        </NavLink>

        <NavLink to="/about" onClick={closeMenu}>
          About
        </NavLink>

        <NavLink to="/contact" onClick={closeMenu}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;