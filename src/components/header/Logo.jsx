import React from "react";
import LogoSVG from "../../assets/logo.svg";

function Logo() {
  return (
    <a href="./index.html">
      <img className="h-9" src={LogoSVG} alt="Weather App" />
    </a>
  );
}

export default Logo;
