import React from "react";
import "./button-icon.scss";

const ButtonIcon = ({ icon, func }) => {
  return (
    <button className="button-icon" onClick={func}>
      <img src={icon} alt="" />
    </button>
  );
};

export default ButtonIcon;
