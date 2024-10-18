/* eslint-disable react/prop-types */
import ContactForm from "../components/ContactForm";
import Nav from "../components/Nav";

//img imports

import portrait from "../assets/img/portrait.png";
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
            </p>
            <p>
              Tag gerne kontakt, hvis du er interesseret i at samarbejde om
              spændende projekter.
            </p>
            <p className="cta_txt">
              Send en mail til
              <Mailto
                email="imhp@hotmail.dk"
                subject="Praktikmulighed hos *tilføj din virksomhed*"
                body=""
              >
                &nbsp;imhp@hotmail.dk&nbsp;
              </Mailto>
              eller ring til <Callto phone="+4551953055">51953055</Callto>.
            </p>
            <p>
              Ellers kan du sende mig en besked ved at benytte kontaktformularen
              herunder.
            </p>
          </article>
        </section>
        <section>
          <img src={wave} alt="Wave overgang" />
        </section>
        <ContactForm />
      </main>
    </>
  );
}

export default Kontakt;
