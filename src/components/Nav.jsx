import { Link, NavLink } from "react-router-dom";

//img imports

import wave from "../assets/waves/navbar.svg";
import logo from "../assets/img/logo.png";
import { useState } from "react";

//NAVIGATION

function Nav() {
  //burger menu inspired from https://www.youtube.com/watch?v=gAGcjlJyKk0 & https://www.youtube.com/watch?v=dAIVbLrAb_U&t=1029s

  // to change burger classes
  const [burgerClass, setBurgerClass] = useState("burger_bar unclicked");
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger_bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger_bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <nav className="grid_w_wave">
      <img className="wave" src={wave} alt="Wavy navigation" />
      <Link reloadDocument to="/" className="logo">
        <img src={logo} alt="im-press logo" />
        <h4>im-press</h4>
      </Link>
      <div className="burger_menu" onClick={updateMenu}>
        <div className={burgerClass}></div>
        <div className={burgerClass}></div>
        <div className={burgerClass}></div>
      </div>
      <ul className={menuClass}>
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
