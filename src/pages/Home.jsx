import { Link } from "react-router-dom";
import MarqueeFeature from "../components/MarqueeFeature";

//FORSIDE

function Home() {
  return (
    <main className="home">
      <section className="info">
        <article>
          <h2>Frontend overskrift</h2>
          <p>
            Som medarbejder er jeg meget optaget af, at mit arbejde er i orden
            og af høj kvalitet. Som person er jeg meget omhyggelig, og jeg
            værdsætter orden, stabilitet og fastlagte processer. Da jeg er meget
            struktureret og pragmatisk anlagt, holder jeg af, at der er tid til
            at kunne organisere de opgaver, der skal løses. Det er sådan, jeg
            sikrer mig, at ambitionsniveauet holdes oppe. Jeg tager stort
            ejerskab for mine opgaver, og jeg trives bedst med klare visioner og
            konkrete målsætninger – på den måde undgår man ”slinger i valsen”.
            Derudover motiveres jeg ofte af, at der er fokus på kvalitet fremfor
            kvantitet, og jeg bruger gerne tid på at dygtiggøre mig.
          </p>
          <p className="cta_txt">Jeg søger praktikplads fra 6. januar 2025.</p>
          <div>
            <button className="cta_btn">
              <Link to={"/kontakt"}>Kontakt mig</Link>
            </button>
            <button className="cta_btn">
              <Link to={"/projekter"}>Se mine projekter</Link>
            </button>
          </div>
        </article>
        <img src="src\assets\img\portrait.png" alt="Portrætfoto" />
      </section>
      <section className="feature">
        <img src="src\assets\waves\feature_bg.svg" alt="Wave" />
        <MarqueeFeature />
      </section>
    </main>
  );
}

export default Home;
