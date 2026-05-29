import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";

function Home() {
  return (
    <>
      <Hero />

      <section className="intro">
        <SectionTitle
          title="Velkomin á Nordic Bite"
          subtitle="Ferskt hráefni, norræn stemning og góð þjónusta"
        />

        <p>
          Nordic Bite er hlýlegur veitingastaður í hjarta Reykjavíkur þar sem
          norræn matarmenning mætir nútímalegri matargerð. Við bjóðum upp á
          ferska rétti fyrir alla — hvort sem þú vilt léttan hádegisverð,
          matarmikinn kvöldverð eða eitthvað fljótlegt og gott.
        </p>
      </section>

      <section className="features-section">
        <div className="feature-card">
          <span>🥗</span>
          <h3>Ferskt hráefni</h3>
          <p>Við leggjum áherslu á gæði, ferskleika og einföld hráefni.</p>
        </div>

        <div className="feature-card">
          <span>🔥</span>
          <h3>Hlýleg stemning</h3>
          <p>Notalegt umhverfi þar sem matur og góð stund fara saman.</p>
        </div>

        <div className="feature-card">
          <span>🍽️</span>
          <h3>Fyrir alla smekki</h3>
          <p>Matseðill með salötum, aðalréttum, samlokum og meðlæti.</p>
        </div>
      </section>

      <section className="popular-section">
        <SectionTitle
          title="Vinsælir réttir"
          subtitle="Nokkrir af uppáhaldsréttum gesta okkar"
        />

        <div className="popular-grid">
          <div className="popular-card">
            <h3>Lax með sítrónusósu</h3>
            <p>Ferskur lax með mildri sítrónusósu og meðlæti.</p>
            <span>5.690 kr</span>
          </div>

          <div className="popular-card">
            <h3>Kjúklingapanini</h3>
            <p>Stökkt panini með kjúklingi, mozzarella og fersku grænmeti.</p>
            <span>2.990 kr</span>
          </div>

          <div className="popular-card">
            <h3>Sætar kartöflufranskar</h3>
            <p>Fullkomið meðlæti með öllum helstu réttum.</p>
            <span>1.590 kr</span>
          </div>
        </div>
      </section>

      <section className="home-cta">
        <h2>Tilbúin/n í góða stund?</h2>
        <p>Skoðaðu matseðilinn okkar eða hafðu samband til að bóka borð.</p>

        <div className="cta-buttons">
          <Link to="/menu">Skoða matseðil</Link>
          <Link to="/contact">Hafa samband</Link>
        </div>
      </section>
    </>
  );
}

export default Home;