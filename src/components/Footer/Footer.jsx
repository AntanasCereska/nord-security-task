import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  //your mistake in figma design, not mine ;)
  const footerLinks = ["Footer Pilicy", "Terms of Service"];

  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-content__left">
          <ul className="footer-content__list">
            <li className="footer-content__list-header">Engage</li>
            {footerLinks.map((link) => (
              <li key={link}>
                <Link to={link}>{link}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-content__right">
          <p>Copyright © 2020 NordPass.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
