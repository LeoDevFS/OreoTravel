import Logo from "../../imgs/footer-logo2.svg";
import { links } from "../../Data";
import ScrollLink from "../links/ScrollLink";
import { RiTelegram2Fill, RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { Link } from "react-scroll";
import { animateScroll } from "react-scroll";

import "./header.css";
import { useState } from "react";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const scrollTop = () => {
    animateScroll.scrollToTop();
  };

  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="nav-logo" onClick={scrollTop}>
          <img src={Logo} alt="" className="nav-logo-img" />
        </Link>

        <div className={`${showMenu ? 'show-menu' : ''} nav-menu`}>
          <ul className="nav-list">
            {links.map((link, index) => {
              return (
                <li className="nav-item" key={index}>
                  <ScrollLink
                    to={link}
                    name={link}
                    className="nav-link"
                    extraPops={{ spy: true }}
                  />
                </li>
              );
            })}
            <li className="nav-item">
              <ScrollLink
                to="booking"
                name="Book Now"
                className="button nav-link-button"
              >
                <RiTelegram2Fill className="button-icon" />
              </ScrollLink>
            </li>
          </ul>
          <RiCloseFill className="nav-close" onClick={() => setShowMenu(!showMenu)}/>
        </div>

        <div className="nav-buttons">
          <ScrollLink
            to="booking"
            name="Book Now"
            className="button nav-button"
          >
            <RiTelegram2Fill className="button-icon" />
          </ScrollLink>

          <RiMenu3Fill
            className="nav-toggle"
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
      </nav>
    </header>
  );
}

export default Header;
