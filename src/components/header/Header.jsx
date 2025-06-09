import Logo from "../../imgs/logo.svg";
import { links } from "../../Data";
import ScrollLink from "../links/ScrollLink";
import { RiTelegram2Fill ,RiMenu3Fill,RiCloseFill} from "react-icons/ri";

import "./header.css";

function Header() {
  return (
    <header className="header">
      <nav className="nav container">
        <a href="#" className="nav-logo">
          <img src={Logo} alt="" className="nav-logo-img" />
        </a>

        <div className="nav-menu">
          <ul className="nav-list">
            {links.map((link, index) => {
              return (
                <li className="nav-item" key={index}>
                  <ScrollLink to={link} name={link} className="nav-link" />
                </li>
              );
            })}
          </ul>
          <RiCloseFill className="nav-close" />
        </div>

        <div className="nav-buttons">
          <ScrollLink
            to="booking"
            name="Book Now"
            className="button nav-button"
          >
            <RiTelegram2Fill className="button-icon" /> 
          </ScrollLink>

          <RiMenu3Fill className="nav-toggle" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
