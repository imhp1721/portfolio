import { Link } from "react-router-dom";
import MarqueeFeature from "../components/MarqueeFeature";
import { RandomBlob } from "react-random-shapes";
import Footer from "../components/Footer";

//FORSIDE

function Home() {
  return (
    <>
      <main className="home">
        <section className="info">
          <article>
            <h2>Frontend overskrift</h2>
            <p>
              Som medarbejder er jeg meget optaget af, at mit arbejde er i orden
              og af høj kvalitet. Som person er jeg meget omhyggelig, og jeg
              værdsætter orden, stabilitet og fastlagte processer. Da jeg er
              meget struktureret og pragmatisk anlagt, holder jeg af, at der er
              tid til at kunne organisere de opgaver, der skal løses. Det er
              sådan, jeg sikrer mig, at ambitionsniveauet holdes oppe. Jeg tager
              stort ejerskab for mine opgaver, og jeg trives bedst med klare
              visioner og konkrete målsætninger – på den måde undgår man
              ”slinger i valsen”. Derudover motiveres jeg ofte af, at der er
              fokus på kvalitet fremfor kvantitet, og jeg bruger gerne tid på at
              dygtiggøre mig.
            </p>
            <p className="cta_txt">
              Jeg søger praktikplads fra 6. januar 2025.
            </p>
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
          <img src="src\assets\waves\feature.svg" alt="Wave" />
          <MarqueeFeature />
        </section>
        <section className="skills">
          <h2>Multimediedesigner i evig udvikling</h2>
          <article className="frontend">
            <div className="skill">
              <p>html</p>
              <div className="bar">
                <div className="amount" id="html"></div>
              </div>
            </div>
            <div className="skill">
              <p>css</p>
              <div className="bar">
                <div className="amount" id="css"></div>
              </div>
            </div>
            <div className="skill">
              <p>react</p>
              <div className="bar">
                <div className="amount" id="react"></div>
              </div>
            </div>
            <div className="skill">
              <p>javascript</p>
              <div className="bar">
                <div className="amount" id="javascript"></div>
              </div>
            </div>
          </article>
          <article className="quote">
            <p>
              Som det videbegærlige menneske, jeg er, vil jeg altid søge at
              tilegne mig ny viden og udvide mine faglige kompetencer.
            </p>
            <RandomBlob size={400} className="blob" />
          </article>
          <article className="design">
            <div className="skill">
              <p>figma</p>
              <div className="bar">
                <div className="amount" id="figma"></div>
              </div>
            </div>
            <div className="skill">
              <p>photoshop</p>
              <div className="bar">
                <div className="amount" id="photoshop"></div>
              </div>
            </div>
            <div className="skill">
              <p>illustrator</p>
              <div className="bar">
                <div className="amount" id="illustrator"></div>
              </div>
            </div>
            <div className="skill">
              <p>adobe express</p>
              <div className="bar">
                <div className="amount" id="express"></div>
              </div>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
