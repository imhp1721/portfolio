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
            <h2>Jeg fylder mit liv med kreativitet</h2>
            <p>
              Hele mit liv har jeg dyrket at være kreativ. Om det har været i
              stof, på papir, i træ eller digitalt. Finder jeg et nyt medie,
              hvor jeg kan udfolde mig kreativt, er det min nye
              yndlings&shy;aktivitet. Mange vil måske kalde mig en{" "}
              <q>jack-of-all-traits</q> og det er nok ikke helt forkert - så
              længe det handler om at skabe noget. Jeg elsker at lære nyt, blive
              udfordret og virkelig nørde med et projekt. Det er derfor jeg har
              fundet min rette hylde, som kommende multimedie&shy;designer med
              en speciali&shy;sering i frontend. Her kan jeg udnytte min
              kreative tænkning, designe, udvikle og oveni købet være med til at
              skabe noget, som andre kan få gavn af.
            </p>
            <p className="cta_txt">
              Du kan se nogle af mine kreative projekter her.
            </p>
            <div>
              <button className="cta_btn">
                <Link to={"#"}>Fritidsprojekter</Link>
              </button>
              <button className="cta_btn">
                <Link to={"/projekter"}>Studieprojekter</Link>
              </button>
            </div>
          </article>
        </section>
        <section className="timeline">
          <img
            className="wave"
            src="src\assets\waves\timeline.svg"
            alt="Wave"
          />
        </section>
        <section className="interests">
          <h2>Mine større kreative projekter</h2>
        </section>
        <section className="hobby">
          <h2>Mine mindre fritidsprojekter</h2>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default OmMig;
