import { Link, NavLink } from "react-router-dom";

//img imports

import logo from "../assets/img/logo.png";

//NAVIGATION

function Nav() {
  return (
    <nav>
      <img
        className="wave"
        src="src\assets\waves\navbar.svg"
        alt="Wavy navigation"
      />
      <Link reloadDocument to="/" className="logo">
        <img src={logo} alt="im-press logo" />
        <h4>im-press</h4>
      </Link>
      <ul>
        <li>
          <NavLink reloadDocument to="/projekter">
            projekter
          </NavLink>
        </li>
        <li>
          <NavLink reloadDocument to="/om-mig">
            om mig
          </NavLink>
        </li>
        <li>
          <NavLink reloadDocument to="/kontakt">
            kontakt
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
