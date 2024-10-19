/* eslint-disable react/prop-types */
import ContactForm from "../components/ContactForm";
import Nav from "../components/Nav";
import { useState } from "react";

//img imports

import portrait from "../assets/img/portrait.png";
import scrollArrow from "../assets/icons/scroll_arrow.svg";
import scrollArrowHover from "../assets/icons/scroll_arrow_hover.svg";
import wave from "../assets/waves/transition.svg";

//KONTAKT

function Kontakt() {
  //Mailto og callto funktionalitet er fra https://www.30secondsofcode.org/react/s/mailto-callto/

  const Mailto = ({ email, subject = "", body = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };

  const Callto = ({ phone, children }) => {
    return <a href={`tel:${phone}`}>{children}</a>;
  };

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
      <main className="kontakt">
        <section className="info txt_right main_grid">
          <img src={portrait} alt="Portrætfoto" />
          <article>
            <h2>Praktikant i foråret 2025</h2>
            <p>
              Som praktikant håber jeg på at bidrage ved at løse opgaver inden
              for frontend og multimediedesign. Jeg søger en mulighed for at
              være en aktiv del af jeres team, deltage i problemløsning og
              derigennem udvide mine færdigheder inden for faget. Jeg er klar
              til at bringe kreative indspark til bordet og ser frem til både
              udfordringer og læring.
              <br />
              Tag gerne kontakt, hvis du er interesseret i at samarbejde om
              spændende projekter.
            </p>
            <p className="cta_txt">
              Send en mail til imhp@hotmail.dk eller ring til 51953055.
              <br />
              Ellers kan du sende mig en besked ved at benytte kontaktformularen
              herunder.
            </p>
            <div className="buttons">
              <button className="cta_btn">
                <Mailto
                  email="imhp@hotmail.dk"
                  subject="Praktikmulighed hos *tilføj din virksomhed*"
                  body=""
                >
                  Send mail
                </Mailto>
              </button>
              <button className="cta_btn">
                <Callto phone="+4551953055">Ring til mig</Callto>
              </button>
              <button
                onMouseEnter={darkenArrow}
                onMouseLeave={lightenArrow}
                className="cta_btn scroll"
              >
                <a href="#contactform">Brug kontaktformular</a>
                <img
                  src={isHovered ? scrollArrowHover : scrollArrow}
                  alt="Pil nedad"
                />
              </button>
            </div>
          </article>
        </section>
        <section>
          <img className="wave" src={wave} alt="Wave overgang" />
        </section>
        <ContactForm />
      </main>
    </>
  );
}

export default Kontakt;
