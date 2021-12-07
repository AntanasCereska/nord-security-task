import React from "react";
import "./HeroWidget.scss";
import Button from "../../Button/Button";
import HeroImage from "../../../assets/np-hero-image.png";

const HeroWidget = () => {
  return (
    <div className="hero-widget">
      <div className="hero-widget__content">
        <h2>Get your passwords organized</h2>
        <Button className="button button--lg " text="Get started" />
      </div>
      <div className="hero-widget__image">
        <img src={HeroImage} alt="" />
      </div>
    </div>
  );
};

export default HeroWidget;
