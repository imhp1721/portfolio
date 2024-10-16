import { Link } from "react-router-dom";
import Nav from "../components/Nav";

//img imports

import interactive from "../assets/img/interactive.jpg";
import sem2Exam from "../assets/img/2sem_exam.jpg";
import sem1Exam from "../assets/img/1sem_exam.jpg";
import mobileFirst from "../assets/img/mobile_first.jpg";

//PROJEKTER

function Projekter() {
  return (
    <>
      <Nav />
      <main className="projects">
        <section className="info">
          <article>
            <h2>Projekter på multi&shy;medie&shy;design&shy;uddannelsen</h2>
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
                <a href="#projects">Studieprojekter</a>
              </button>
              <button className="cta_btn">
                <Link to={"/om-mig"}>Fritidsprojekter</Link>
              </button>
            </div>
          </article>
          <div>
            <img
              className="interactive"
              src={interactive}
              alt="Forsiden til 'Opskrift på en Stjerne'"
            />
            <img
              className="sem2_exam"
              src={sem2Exam}
              alt="Forsiden til 'Motorcykeleventyr'"
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
      </main>
    </>
  );
}

export default Projekter;
