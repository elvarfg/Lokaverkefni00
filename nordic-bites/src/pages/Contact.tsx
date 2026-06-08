import ContactForm from "../components/ContactForm";
import PageWrapper from "../components/PageWrapper";

function Contact() {
  return (
    <PageWrapper>
      <section className="contact-page">
        <div className="contact-container">
          <div className="contact-info">
            <p className="eyebrow">Hafa samband</p>

            <h2>Sendu okkur línu eða bókaðu borð</h2>

            <p>
              Við svörum fyrirspurnum eins fljótt og við getum. Þú getur haft
              samband vegna bókana, almennra spurninga eða fyrirtækjaþjónustu.
            </p>

            <div className="contact-details">
              <p>
                <strong>Heimilisfang</strong>
                Laugavegur 12, 101 Reykjavík
              </p>

              <p>
                <strong>Sími</strong>
                555-4321
              </p>

              <p>
                <strong>Netfang</strong>
                info@nordicbite.is
              </p>

              <p>
                <strong>Opnunartími</strong>
                Alla daga 11:00 - 22:00
              </p>
            </div>
          </div>

          <div className="contact-form-card">
            <ContactForm />
          </div>

          <div className="map-card">
            <iframe
              title="Nordic Bite staðsetning"
              src="https://www.google.com/maps?q=Laugavegur%2012,%20101%20Reykjav%C3%ADk&output=embed"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

export default Contact;
