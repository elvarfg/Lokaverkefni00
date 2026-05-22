import Hero from "../components/Hero";

function Home() {
  return (
    <>
      <Hero />

      <section className="intro">
        <h2>Velkomin á Nordic Bite</h2>

        <p>
          Við leggjum áherslu á ferskt hráefni, norræna stemningu
          og framúrskarandi þjónustu.
        </p>
      </section>
    </>
  );
}

export default Home;