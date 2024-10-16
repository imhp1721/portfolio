import { Link } from "react-router-dom";
import MakeMeLaugh from "../components/MakeMeLaugh";
import Nav from "../components/Nav";

//img imports

import wave from "../assets/waves/timeline.svg";
import mduBlob from "../assets/blobs/mdu.svg";
import internBlob from "../assets/blobs/intern.svg";
import arrow from "../assets/icons/arrow.svg";
import hfBlob from "../assets/blobs/hf.svg";
import idaBlob from "../assets/blobs/ida.svg";

//OM MIG

function OmMig() {
  return (
    <>
      <Nav />
      <main className="om_mig">
        <section className="info">
          <MakeMeLaugh />
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
          <img className="wave" src={wave} alt="wave" />
          <article className="mdu">
            <img className="blob" src={mduBlob} alt="blob" />
            <h6 className="ed_txt">
              Multimediedesign på Erhvervsakademi Aarhus
            </h6>
            <h5 className="year_txt">2023-2025</h5>
          </article>
          <article className="intern">
            <img className="blob" src={internBlob} alt="blob" />
            <h6 className="ed_txt">Multimediedesign-praktikant</h6>
            <h5 className="year_txt">forår 2025</h5>
          </article>
          <img className="arrow" src={arrow} alt="arrow timeline" />
          <article className="hf">
            <h5 className="year_txt">2021-2023</h5>
            <img className="blob" src={hfBlob} alt="blob" />
            <h6 className="ed_txt">HF ARTS på Aarhus Akademi</h6>
          </article>
          <article className="ida">
            <h5 className="year_txt">2024-</h5>
            <img className="blob" src={idaBlob} alt="blob" />
            <h6 className="ed_txt">Studentermedhjælper i IDA Lederforum</h6>
          </article>
        </section>
      </main>
    </>
  );
}

export default OmMig;
