import { Link } from "react-router-dom";
import MakeMeLaugh from "../components/MakeMeLaugh";
import Footer from "../components/Footer";

//OM MIG

function OmMig() {
  return (
    <>
      <main className="om_mig">
        <section className="info">
          <MakeMeLaugh />
          <img
            className="blob"
            src="src\assets\blobs\om_mig_info.svg"
            alt="blob"
          />
          <article>
            <h2>Personlig-ish overskrift</h2>
            <p>
              Ambitiøs, kreativ og fokuseret; tre nøgleord til at beskrive mig.
              Gennem mit alsidige uddannelses&shy;forløb og
              erhvervs&shy;erfaring har jeg opnået en bred vifte af både faglige
              og personlige kompetencer. Min omstillings&shy;parathed og evne
              til at lære hurtigt har været afgørende for at håndtere
              forskellig&shy;artede opgaver effektivt og
              resultat&shy;orienteret. Som
              multi&shy;medie&shy;design&shy;studerende udnytter jeg mine
              erfaringer til at skabe bruger&shy;oplevelser, der både er visuelt
              appel&shy;lerende og vel&shy;struk&shy;turerede i koden. Med min
              organiserede arbejdsform og entusiastiske energi skaber jeg -
              selvstændigt og i teams - løsninger, der giver brugeren et smil på
              læben.
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
        </section>
        <section className="feature">
          <img src="src\assets\waves\feature.svg" alt="Wave" />
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

export default OmMig;
