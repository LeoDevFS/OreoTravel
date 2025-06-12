import Logo from "../../imgs/footer-logo2.svg";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { links } from "../../Data";
import ScrollLink from "../links/ScrollLink";
import { footerGallery } from "../../Data";
import "./footer.css";
import {Link} from 'react-scroll'
import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container grid">
        <div>
          <Link to="/" className="footer-logo" onClick={scrollToTop}>
            <img src={Logo} alt="logo" className="'footer-logo-img" />
          </Link>
          <p className="footer-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum unde
            maxime optio et excepturi sapiente laborum sequi similique
            perferendis veritatis.
          </p>
          <div className="footer-socials">
            <a href="" target="_blank" className="footer-social-link">
              <FaFacebookF />
            </a>
            <a href="" target="_blank" className="footer-social-link">
              <FaInstagram />
            </a>
            <a href="" target="_blank" className="footer-social-link">
              <FaXTwitter />
            </a>
          </div>
        </div>
        <div>
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links grid">
            {links.map((link, index) => {
              return (
                <li className="footer-item" key={index}>
                  <ScrollLink to={link} name={link} className="footer-link" />
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h3 className="footer-title">Contact</h3>
          <div className="footer-contact grid">
            <div className="footer-item">
              <FaMapMarkerAlt className="footer-icon" />
              <p className="footer-info">2055 montresor,A113</p>
            </div>

            <div className="footer-item">
              <FaPhoneAlt className="footer-icon" />
              <p className="footer-info">+34 685 020 ***</p>
            </div>

            <div className="footer-item">
              <FaEnvelope className="footer-icon" />
              <p className="footer-info">Leosicarob@gmail.com</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="footer-title">Gallery</h3>

          <div className="footer-gallery grid">
            {footerGallery.map((footerGallery, index) => {
              return (
                <img
                  src={footerGallery}
                  alt=""
                  className="footer-img"
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
