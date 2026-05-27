import { NavLink } from "react-router-dom";

import logo from "../assets/images/nordicbiteslogo.png";

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img
          src={logo}
          alt="Nordic Bite logo"
          className="logo"
        />

        <h1>Nordic Bite</h1>
      </div>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;