import Logo from "../../imgs/footer-logo2.svg";
import { links } from "../../Data";
import ScrollLink from "../links/ScrollLink";
import { RiTelegram2Fill ,RiMenu3Fill,RiCloseFill} from "react-icons/ri";
import {Link}  from 'react-scroll'
import { animateScroll } from "react-scroll";

import "./header.css";

function Header() {
  const scrollTop=()=>{
    animateScroll.scrollToTop()
  }
  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="nav-logo" onClick={scrollTop}>
          <img src={Logo} alt="" className="nav-logo-img" />
        </Link>

        <div className="nav-menu">
          <ul className="nav-list">
            {links.map((link, index) => {
              return (
                <li className="nav-item" key={index}>
                  <ScrollLink to={link} name={link} className="nav-link"  extraPops={{spy:false}}/> 
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
