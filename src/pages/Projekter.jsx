import { Link } from "react-router-dom";
import Nav from "../components/Nav";

//img imports

import interactive from "../assets/img/interactive.jpg";
import sem2Exam from "../assets/img/2sem_exam.jpg";
import sem1Exam from "../assets/img/1sem_exam.jpg";
import mobileFirst from "../assets/img/mobile_first.jpg";
import scrollArrow from "../assets/icons/scroll_arrow.svg";
import wave from "../assets/waves/transition.svg";

//PROJEKTER

function Projekter() {
  return (
    <>
      <Nav />
      <main className="projects">
        <section className="info">
          <h2>Projekter på multi&shy;medie&shy;design&shy;uddannelsen</h2>
          <article>
            <p>
              På multimediedesignuddannelsen kombineres teori og praksis i
              projekter, hvor vi løser virkelighedsnære problemstillinger både
              individuelt og i teams. Eksempler inkluderer at udvikle visuel
              identitet og hjemmeside til en eksisterende virksomhed, baseret på
              deres mål og brugernes behov.
            </p>
            <p className="cta_txt">
              Du kan opleve mine studieprojekter på denne side. Du er også
              velkommen til at se nærmere på mine fritidsprojekter.
            </p>
            <div>
              <button className="cta_btn">
                <Link reloadDocument to={"/om-mig"}>Fritidsprojekter</Link>
              </button>
              <button className="cta_btn scroll">
                <a href="#projects">Studieprojekter</a>
                <img src={scrollArrow} alt="Pil nedad" />
              </button>
            </div>
          </article>
          <div>
            <img
              className="sem2_exam"
              src={sem2Exam}
              alt="Forsiden til 'Motorcykeleventyr'"
            />
            <img
              className="interactive"
              src={interactive}
              alt="Forsiden til 'Opskrift på en Stjerne'"
            />
            <img
              className="sem1_exam"
              src={sem1Exam}
              alt="Forsiden til 'TrøjborgBryg'"
            />
            <img
              className="mobile_first"
              src={mobileFirst}
              alt="Forsiden til 'Busbjerg Spillene'"
            />
          </div>
        </section>

        <img className="wave" src={wave} alt="Wave" />
        <article id="projects" className="project_info left">
          <div>
            <h2>2.semester eksamensprojekt</h2>
            <p>
              Et gruppeprojekt, hvor vi samarbejdede med virksomheden
              Motorcykeleventyr. Vi designede en visuel identitet og udviklede
              prototypen til virksomhedens hjemmeside.
            </p>
            <button className="cta_btn">
              <Link
                to={
                  "https://sarahcant.github.io/Motorcykeleventyr-Videreudvikling/"
                }
                target="_blank"
              >
                Se endelig prototype
              </Link>
            </button>
          </div>
          <img src={sem2Exam} alt="Forsiden til 'Motorcykeleventyr'" />
        </article>
        <article className="project_info right">
          <img
            className="interactive"
            src={interactive}
            alt="Forsiden til 'Opskrift på en Stjerne'"
          />
          <div>
            <h2>Interactive Storytelling</h2>
            <p>
              Et gruppeprojekt med en tildelt case. Vores kunde var her
              Steno-museet i Aarhus og vi skulle udvælge en udstilling at
              supplere med en interaktiv løsning. Vi skabte en interaktiv
              oplevelse med udgangspunkt i ”Opskrift på en Stjerne” fra
              udstillingen Astroteket.
            </p>
            <button className="cta_btn">
              <Link
                to={"https://sarahcant.github.io/Astroteket/"}
                target="_blank"
              >
                Se endelig prototype
              </Link>
            </button>
          </div>
        </article>
        <article className="project_info left">
          <div>
            <h2>1.semester eksamensprojekt</h2>
            <p>
              Individuelt projekt med en tildelt case. Kunden var det fiktive
              mikrobryggeri, Trøjborg Bryg, hvor alkoholfri øl skulle være i
              fokus. Forretningskoncept, visuel identitet og alle andre detaljer
              var udefineret.
            </p>
            <button className="cta_btn">
              <Link
                to={"https://imhp1721.github.io/1.semester_Eksamensprojekt/"}
                target="_blank"
              >
                Se endelig prototype
              </Link>
            </button>
          </div>
          <img
            className="sem1_exam"
            src={sem1Exam}
            alt="Forsiden til 'TrøjborgBryg'"
          />
        </article>
        <article className="project_info right">
          <img
            className="mobile_first"
            src={mobileFirst}
            alt="Forsiden til 'Busbjerg Spillene'"
          />
          <div>
            <h2>Mobile First</h2>
            <p>
              Et gruppeprojekt, hvor vi havde fokus på mobilvenligt webdesign og
              arbejdede med responsivitet generelt. Vi designede en ny visuel
              identitet og udviklede ny responsiv hjemmeside til en
              teaterforening, jeg selv er medlem af: Busbjerg Spillene.
            </p>
            <button className="cta_btn">
              <Link
                to={"https://imhp1721.github.io/busbjergspillene/"}
                target="_blank"
              >
                Se endelig prototype
              </Link>
            </button>
          </div>
        </article>
      </main>
    </>
  );
}

export default Projekter;
