import React from "react";
import "./Description.scss";
import DescriptionText from "./DescriptionText/DescriptionText";
import DescLightBox from ".//DescLightBox/DescLightBox";
import './Description.scss'

const Description = () => {
  return (
    <div className='aluminium__description'>
      <DescriptionText />
      <DescLightBox />
    </div>
  );
};

export default Description;
