import React, { useState } from "react";
import "./navigation.scss";
import { Link, NavLink } from "react-router-dom";
import Button from "../Button/Button";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import HamburgerMenuIcon from "../../assets/icons8-menu.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const Navigation = ({
  navigationData,
  toggleNavigationMobile,
  navigationMobile,
}) => {
  const [visible, setVisible] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 60) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className={`navigation ${visible ? "navigation--active" : ""}`}>
      <div className="navigation__content">
        <Link to="/" className="navigation-logo">
          <Logo />
        </Link>
        <div className="navigation__links">
          {navigationData.map((navlink) => (
            <NavLink
              className="navigation__link"
              activeClassName="active"
              to={navlink.link}
              key={navlink.link}
            >
              {navlink.title}
            </NavLink>
          ))}
          <Button className="button button--sm" text="Open Vault" />
        </div>
        <div className="navigation__icon">
          <ButtonIcon icon={HamburgerMenuIcon} func={toggleNavigationMobile} />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
