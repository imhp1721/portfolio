/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function Footer() {
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
    <footer>
      <img
        className="wave"
        src="img/waves/footer.svg"
        alt="Wavy footer"
      />
      <Link to="/home" className="logo">
        <img src="/img/logo.png" alt="im-press logo" />
        <h4>im-press</h4>
      </Link>
      <section className="info">
        <h2>Inger-Margrethe Holt Povlsen</h2>
        <div className="so_me">
          <Link
            to={
              "https://www.linkedin.com/in/inger-margrethe-holt-povlsen-85170a28a/"
            }
            target="blank"
          >
            <img src="/img/icons/linkedin.png" alt="LinkedIn logo" />
          </Link>
          <Link to={"https://github.com/imhp1721"} target="blank">
            <img src="/img/icons/github.png" alt="GitHub logo" />
          </Link>
          <Link to={"https://www.instagram.com/im_holt/"} target="blank">
            <img src="/img/icons/ig.png" alt="Instagram logo" />
          </Link>
          <Link to={"https://www.facebook.com/imhp1721"} target="blank">
            <img src="/img/icons/fb.png" alt="Facebook logo" />
          </Link>
        </div>
        <div className="link">
          <Mailto
            email="imhp@hotmail.dk"
            subject="Praktikmulighed hos *tilføj din virksomhed*"
            body=""
          >
            imhp@hotmail.dk
          </Mailto>
        </div>
        <div className="link">
          <Callto phone="+4551953055">+4551953055</Callto>
        </div>
      </section>
      <section className="copy">
        <p>Copyright &copy; 2024 im-press | All rights reserved</p>
      </section>
    </footer>
  );
}

export default Footer;
