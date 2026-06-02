import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found-card">
        <p className="not-found-code">404</p>

        <h1>Úps! Síðan fannst ekki</h1>

        <p>Síðan sem þú ert að leita að virðist ekki vera á matseðlinum.</p>

        <Link to="/" className="not-found-button">
          Fara á forsíðu
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
