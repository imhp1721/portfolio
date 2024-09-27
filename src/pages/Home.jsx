import { Link } from "react-router-dom";
import MarqueeFeature from "../components/MarqueeFeature";
import Footer from "../components/Footer";

//FORSIDE

function Home() {
  return (
    <>
      <main className="home">
        <section className="info">
          <article>
            <h2>Designbevidst frontend udvikler</h2>
            <p>
              Som multi&shy;medie&shy;design&shy;studerende med
              frontend-specialisering er jeg ikke blot teknisk, men også
              æstetisk orienteret. Jeg stræber efter at skabe designs, der både
              er intuitive og appellerende for brugeren, samtidig med at de er
              velfungerende og strukturerede i koden. Jeg har sans for at skabe
              content, hvilket jeg praktiserer gennem mit studiejob, men min
              sande passion ligger i at skabe harmoni mellem de tekniske og
              visuelle aspekter af mit fag.
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
          <img className="wave" src="src\assets\waves\feature.svg" alt="Wave" />
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
            <img
              className="blob"
              src="src\assets\blobs\skills.svg"
              alt="Blob"
            />
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
