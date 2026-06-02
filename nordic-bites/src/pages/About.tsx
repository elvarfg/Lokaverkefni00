import PageWrapper from "../components/PageWrapper";

function About() {
  return (
    <PageWrapper>
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

            <div className="about-stats">
              <div>
                <strong>2026</strong>
                <span>Stofnað</span>
              </div>

              <div>
                <strong>1000+</strong>
                <span>Ánægðir gestir</span>
              </div>

              <div>
                <strong>4.9★</strong>
                <span>Meðaleinkunn</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

export default About;
