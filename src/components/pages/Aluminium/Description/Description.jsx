import React from "react";
import "./Description.scss";
import DescriptionText from "./DescriptionText/DescriptionText";
import LightBox from ".//LightBox/LightBox";
import './Description.scss'

const Description = () => {
  return (
    <div className='aluminium__description'>
      <DescriptionText />
      <LightBox />
    </div>
  );
};

export default Description;
