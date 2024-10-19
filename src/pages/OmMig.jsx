import { Link } from "react-router-dom";
import MakeMeLaugh from "../components/MakeMeLaugh";
import Nav from "../components/Nav";
import { useState } from "react";

//img imports

import scrollArrow from "../assets/icons/scroll_arrow.svg";
import scrollArrowHover from "../assets/icons/scroll_arrow_hover.svg";
import wave from "../assets/waves/timeline.svg";
import mduBlob from "../assets/blobs/mdu.svg";
import internBlob from "../assets/blobs/intern.svg";
import arrow from "../assets/icons/arrow.svg";
import hfBlob from "../assets/blobs/hf.svg";
import idaBlob from "../assets/blobs/ida.svg";
import ImageCarousel from "../components/ImageCarousel";
import ImageCollage from "../components/ImageCollage";

//OM MIG

function OmMig() {
  // SCROLL BUTTON FUNCTIONALITY
  // State to track hover state
  const [isHovered, setIsHovered] = useState(false);

  // Function to handle mouse enter
  const darkenArrow = () => {
    setIsHovered(true);
  };

  // Function to handle mouse leave
  const lightenArrow = () => {
    setIsHovered(false);
  };
  return (
    <>
      <Nav />
      <main className="om_mig">
        <section className="info txt_right main_grid">
          <h2>Jeg fylder mit liv med kreativitet</h2>
          <MakeMeLaugh />
          <article>
            <p>
              Hele mit liv har jeg dyrket at være kreativ. Om det har været i
              stof, på papir, i træ eller digitalt. Finder jeg et nyt medie,
              hvor jeg kan udfolde mig kreativt, er det min nye
              yndlings&shy;aktivitet. Mange vil måske kalde mig en{" "}
              <q>jack-of-all-traits</q> og det er nok ikke helt forkert - så
              længe det handler om at skabe noget.
              <br />
              Jeg elsker at lære nyt, blive udfordret og virkelig nørde med et
              projekt. Det er derfor jeg har fundet min rette hylde, som
              kommende multimedie&shy;designer med en speciali&shy;sering i
              frontend. Her kan jeg udnytte min kreative tænkning, designe,
              udvikle og oveni købet være med til at skabe noget, som andre kan
              få gavn af.
            </p>
            <p className="cta_txt">
              Du kan se nogle af mine kreative projekter her.
            </p>
            <div className="buttons">
              <button
                onMouseEnter={darkenArrow}
                onMouseLeave={lightenArrow}
                className="cta_btn scroll"
              >
                <a href="#hobby">Fritidsprojekter</a>
                <img
                  src={isHovered ? scrollArrowHover : scrollArrow}
                  alt="Pil nedad"
                />
              </button>
              <button className="cta_btn">
                <Link reloadDocument to={"/projekter"}>
                  Studieprojekter
                </Link>
              </button>
            </div>
          </article>
        </section>
        <section className="timeline grid_w_wave">
          <img className="wave" src={wave} alt="wave" />
          <div className="mdu">
            <img className="blob" src={mduBlob} alt="blob" />
            <h5 className="year_txt">2023-2025</h5>
          </div>
          <div className="intern">
            <img className="blob" src={internBlob} alt="blob" />
            <h5 className="year_txt">forår 2025</h5>
          </div>
          <img className="arrow" src={arrow} alt="arrow timeline" />
          <div className="hf">
            <h5 className="year_txt">2021-2023</h5>
            <img className="blob" src={hfBlob} alt="blob" />
          </div>
          <div className="ida">
            <h5 className="year_txt">2024-</h5>
            <img className="blob" src={idaBlob} alt="blob" />
          </div>
        </section>
        <section id="hobby" className="hobby main_grid">
          <h2>Mine fritidsinteresser</h2>
          <ImageCarousel />
          <article>
            <h3>Håndarbejde, kunsthåndværk & upcycling</h3>
            <p>Sy - Akvarel - Hækling - Tegning - Smykker - Bolig - Strik</p>
          </article>
          <ImageCollage />
        </section>
      </main>
    </>
  );
}

export default OmMig;
