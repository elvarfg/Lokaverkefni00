import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Góður Matur</h2>
        <h2>Góð Stund</h2>

        <p>
          Njóttu norrænnar matargerðar í hlýlegu
          og nútímalegu umhverfi.
        </p>

        <Link to="/menu" className="hero-button">
          Skoða matseðil
        </Link>
      </div>
    </section>
  );
}

export default Hero;