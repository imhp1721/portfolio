import { Link, NavLink } from "react-router-dom";

function Navigation() {
  return (
    <>
      <section className="hero">
        <img
          src="/img/hero.jpg"
          alt="På hængebro i 40 meters højde i Ghana"
        />
        <h1>Inger-Margrethe Holt Povlsen</h1>
      </section>
      <nav>
        <img
          className="wave"
          src="/img/waves/navbar.svg"
          alt="Wavy navigation"
        />
        <Link to="/home" className="logo">
          <img src="/img/logo.png" alt="im-press logo" />
          <h4>im-press</h4>
        </Link>
        <ul>
          <li>
            <NavLink to="/projekter">projekter</NavLink>
          </li>
          <li>
            <NavLink to="/om-mig">om mig</NavLink>
          </li>
          <li>
            <NavLink to="/kontakt">kontakt</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
