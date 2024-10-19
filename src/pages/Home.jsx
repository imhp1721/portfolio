import { Link } from "react-router-dom";
import MarqueeFeature from "../components/MarqueeFeature";
import Nav from "../components/Nav";

//img imports

import heroImg from "../assets/img/hero.jpg";
import portrait from "../assets/img/portrait.png";
import wave from "../assets/waves/marquee.svg";
import blob from "../assets/blobs/skills.svg";

//FORSIDE

function Home() {
  return (
    <>
      <section className="hero">
        <img src={heroImg} alt="På hængebro i 40 meters højde i Ghana" />
        <h1>Inger-Margrethe Holt Povlsen</h1>
      </section>
      <Nav />
      <main className="home">
        <section className="info txt_left main_grid">
          <article>
            <h2>Designbevidst frontend udvikler</h2>
            <p>
              Som multi&shy;medie&shy;design&shy;studerende med
              frontend-specialisering er jeg ikke blot teknisk, men også
              æstetisk orienteret. Jeg stræber efter at skabe designs, der både
              er intuitive og appellerende for brugeren, samtidig med at de er
              velfungerende og strukturerede i koden.
              <br />
              Jeg har sans for at skabe content, hvilket jeg praktiserer gennem mit studiejob, men min sande passion ligger i at skabe harmoni mellem de tekniske og visuelle aspekter af mit fag.
            </p>
            <p className="cta_txt">
              Jeg søger praktikplads fra 6. januar 2025.
            </p>
            <div className="buttons">
              <button className="cta_btn">
                <Link reloadDocument to={"/projekter"}>
                  Se mine projekter
                </Link>
              </button>
              <button className="cta_btn">
                <Link reloadDocument to={"/kontakt"}>
                  Kontakt mig
                </Link>
              </button>
            </div>
          </article>
          <img src={portrait} alt="Portrætfoto" />
        </section>
        <section className="feature grid_w_wave">
          <img className="wave" src={wave} alt="Wave" />
          <MarqueeFeature />
        </section>
        <section className="skills main_grid">
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
            <img className="blob" src={blob} alt="Blob" />
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
    </>
  );
}

export default Home;
