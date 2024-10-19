import { Link, NavLink } from "react-router-dom";

//img imports

import wave from "../assets/waves/navbar.svg";
import logo from "../assets/img/logo.png";

//NAVIGATION

function Nav() {
  return (
    <nav className="grid_w_wave">
      <img className="wave" src={wave} alt="Wavy navigation" />
      <Link reloadDocument to="/" className="logo">
        <img src={logo} alt="im-press logo" />
        <h4>im-press</h4>
      </Link>
      <ul>
        <li>
          <NavLink reloadDocument to="/om-mig">
            om mig
          </NavLink>
        </li>
        <li>
          <NavLink reloadDocument to="/projekter">
            projekter
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
