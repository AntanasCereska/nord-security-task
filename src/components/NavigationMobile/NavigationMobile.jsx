import React from "react";
import "./navigation-mobile.scss";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import CloseIcon from "../../assets/icons8-close.svg";

const NavigationMobile = ({
  navigationData,
  toggleNavigationMobile,
  navigationMobile,
}) => {
  return (
    <div
      className={`navigation-mobile ${navigationMobile ? "navigation-mobile--open" : ""}`}
    >
      <div className="navigation-mobile__icon">
        <ButtonIcon func={toggleNavigationMobile} icon={CloseIcon} />
      </div>
      <div className="navigation-mobile__links">
        {navigationData.map((navlink) => (
          <NavLink
            key={navlink.title}
            className="navigation-mobile__link"
            activeClassName="active"
            to={navlink.link}
            onClick={toggleNavigationMobile}
          >
            {navlink.title}
          </NavLink>
        ))}
        <Button className="button button--md" text="Open Vault" />
      </div>
    </div>
  );
};

export default NavigationMobile;
