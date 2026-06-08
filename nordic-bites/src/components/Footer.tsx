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
          <Link to="/">Heim</Link>
          <Link to="/menu">Matseðill</Link>
          <Link to="/about">Um Okkur</Link>
          <Link to="/contact">Hafa Samband</Link>
        </div>

        <div>
          <h4>Hafa samband</h4>
          <p>Laugavegur 12, 101 Reykjavík</p>
          <p>555-4321</p>
          <p>info@nordicbite.is</p>
        </div>

        <div>
          <h4>Opnunartími</h4>
          <p>Mán - Fös: 11:00 - 22:00</p>
          <p>Lau - Sun: 12:00 - 23:00</p>
        </div>

        <div>
          <h4>Fylgdu okkur</h4>

          <div className="social-links">
            <a href="#" aria-label="Facebook">
              📘 Facebook
            </a>

            <a href="#" aria-label="Instagram">
              📷 Instagram
            </a>

            <a href="#" aria-label="TikTok">
              🎵 TikTok
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Nordic Bite. Allur réttur áskilinn.</p>
      </div>
    </footer>
  );
}

export default Footer;
