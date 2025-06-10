import React from "react";
import "./sectionTitle.css";
import { PiGlobeHemisphereWestFill } from "react-icons/pi";


function SectionTitle({ title, description, subtitle }) {
  return (
    <div className="section-header">
      {
        subtitle&&(
          <p className="section-subtitle">
            <PiGlobeHemisphereWestFill/>
           {subtitle}
          </p>
        )
      }
      <h2 className="section-title">{title}</h2>
      <p className="section-description">{description}</p>
    </div>
  );
}

export default SectionTitle;
