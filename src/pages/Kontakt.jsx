/* eslint-disable react/prop-types */
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

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
      <main className="home contact">
        <section className="info">
          <article>
            <h2>Praktikant i foråret 2025</h2>
            <p>
              Jeg søger en praktikplads i nærheden af Aarhus med opgaver
              indenfor frontend og/eller multimediedesign generelt. Tag gerne
              kontakt, hvis ... noget med din virksomhed eller i den stil...
              dunno...
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
          <img src="src\assets\img\portrait.png" alt="Portrætfoto" />
        </section>
        <section>
          <img src="src\assets\waves\transition.svg" alt="Wave" />
        </section>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default Kontakt;
