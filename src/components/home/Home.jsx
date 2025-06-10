import React from "react";
import { RiTelegram2Fill} from "react-icons/ri";
import { PiGlobeHemisphereWestFill } from "react-icons/pi";
import homeImg from "../../imgs/oreoVacations-png.png";
import Booking from "./Booking";
import "./home.css"
import ScrollLink from "../links/ScrollLink";

function Home() {
  return (
    <section className="home section">
      <div className="home-container container grid">
        <div className="home-data">
          <h3 className="home-subtitle">
            <PiGlobeHemisphereWestFill />
            Let's start Your Journey
          </h3>
          <h1 className="home-title">
            Your Journey Begins Here -Find, Book, Travel!
          </h1>

          <p className="home-description">
            Temporibus cumque maiores autem aspernatur molestiae possimus
            expedita rem facilis enim dolores. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit.
          </p>
          <ScrollLink
            to="about"
            name="About Us"
            className="button button-white"
          >
            <RiTelegram2Fill className="button-icon" />
          </ScrollLink>
        </div>

        <img src={homeImg} alt="" className="home-img" />
      </div>

      <Booking icon={<RiTelegram2Fill/>}></Booking>
    </section>
  );
}

export default Home;
