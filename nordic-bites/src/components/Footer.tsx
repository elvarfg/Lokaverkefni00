import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h3>Nordic Bite</h3>
          <p>Góður matur – góð stund</p>
        </div>

        <div>
          <h4>Navigation</h4>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div>
          <h4>Hafa samband</h4>
          <p>Matarvegur 12, 101 Reykjavík</p>
          <p>555-4321</p>
          <p>info@nordicbite.is</p>
        </div>

        <div>
          <h4>Opnunartími</h4>
          <p>Mán - Fös: 11:00 - 22:00</p>
          <p>Lau - Sun: 12:00 - 23:00</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Nordic Bite. Allur réttur áskilinn.</p>
      </div>
    </footer>
  );
}

export default Footer;