function About() {
  return (
    <section className="about-page">
      <div className="about-container">
        <div className="about-image"></div>

        <div className="about-content">
          <p className="eyebrow">Um okkur</p>

          <h2>Fjölskyldurekinn veitingastaður með norræna sál</h2>

          <p>
            Velkomin á Nordic Bite – fjölskyldurekinn veitingastað sem leggur
            áherslu á ferskt hráefni og norræna matarmenningu.
          </p>

          <p>
            Við trúum því að matur sé upplifun, ekki bara nauðsyn, og markmið
            okkar er að skapa hlýlegt umhverfi þar sem gestir geta notið góðra
            máltíða og notalegrar stemningar.
          </p>

          <div className="about-highlights">
            <div>
              <strong>Ferskt</strong>
              <span>hráefni</span>
            </div>

            <div>
              <strong>Norræn</strong>
              <span>matarmenning</span>
            </div>

            <div>
              <strong>Hlýleg</strong>
              <span>stemning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;