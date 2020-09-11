import React from "react";
import SimpleSlider from "./carousel/carousel";
import Example from "./TitleDencrypt/TitleDencrypt";
import Al_menu from "./Al_menu/Al_menu";

import './Aluminium.scss'

const Aluminium = () => {
  return (
    <div className="container aluminium">
      <SimpleSlider />
      <Example />
      <Al_menu />
    </div>
  );
};

export default Aluminium;
