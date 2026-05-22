import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="not-found">
      <h1>404</h1>

      <p>Síðan fannst ekki.</p>

      <Link to="/">
        Fara á forsíðu
      </Link>
    </section>
  );
}

export default NotFound;