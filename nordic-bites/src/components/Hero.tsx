import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Góður matur – góð stund</h2>

        <p>Njóttu norrænnar matargerðar í hlýlegu og nútímalegu umhverfi.</p>

        <Link to="/menu" className="hero-button">
          Skoða matseðil
        </Link>

        <div className="hero-stats">
          <div>
            <strong>4.9★</strong>
            <span>Í einkunn</span>
          </div>

          <div>
            <strong>1000+</strong>
            <span>Ánægðir gestir</span>
          </div>

          <div>
            <strong>11-22</strong>
            <span>Opið daglega</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
