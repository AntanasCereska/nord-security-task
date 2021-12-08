import React from "react";
import "./button.scss";

const Button = ({ className, text, func }) => {
  return (
    <button className={className} onClick={func}>
      {text}
    </button>
  );
};

export default Button;