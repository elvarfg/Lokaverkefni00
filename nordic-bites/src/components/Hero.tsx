import { Link } from "react-router-dom";
import Counter from "./Counter";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Góður matur – góð stund</h2>

        <p>Njóttu norrænnar matargerðar í hlýlegu og nútímalegu umhverfi.</p>

        <Link
          to="/menu"
          className="hero-button"
          aria-label="Skoða matseðil Nordic Bite"
        >
          Skoða matseðil
        </Link>

        <div className="hero-stats">
          <div>
            <strong>
              <Counter end={4.9} suffix="★" decimals={1} />
            </strong>
            <span>Í einkunn</span>
          </div>

          <div>
            <strong>
              <Counter end={1000} suffix="+" />
            </strong>
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
