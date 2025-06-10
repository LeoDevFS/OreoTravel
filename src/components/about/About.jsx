import React from "react";
import aboutImg from "../../imgs/about-img.png";
import SectionTitle from "../title/SectionTitle";
import ScrollLink from "../links/ScrollLink";
import { RiTelegram2Fill } from "react-icons/ri";
import "./about.css"

function About() {
  return (
    <section className="about section">
      <div className="about-container container grid">
        <img src={aboutImg} alt="" className="about-img" />
        <div className="about-content">
          <SectionTitle
            subtitle="We Are OreoTravel"
            title="Exploring the World, One Destination at a Time With Us"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
           Magnam laborum facilis mollitia reiciendis explicabo perferendis laudantium."
          />
          <div className="about-data">
            <div className="about-item">
              <p className="about-no">25+</p>
              <h3 className="about-title">Awards Wining</h3>
            </div>
            <div className="about-item">
              <p className="about-no">10K</p>
              <h3 className="about-title">Succes Journey</h3>
            </div>
            <div className="about-item">
              <p className="about-no">12+</p>
              <h3 className="about-title">Awards Wining</h3>
            </div>
          </div>
          <ScrollLink
            to="/"
            name="About More"
            className="button button-white"
          >
            <RiTelegram2Fill className="button-icon" />
          </ScrollLink>
        </div>
      </div>
    </section>
  );
}

export default About;
