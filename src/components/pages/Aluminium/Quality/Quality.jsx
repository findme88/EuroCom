import React, { Component } from "react";
import QualityTextTop from "./QualityText/QualityTextTop";
import QaCertificate from "./QaCertificate/QaCertificate";
import QualityTextBottom from "./QualityText/QualityTextBottom";
import QaLightBox from "./QaLightBox/QaLightBox";
import "./Quality.scss";

const Quality = () => {
  return (
    <div className="aluminium__quality">
      <div className="aluminium__quality_top">
        <QualityTextTop />
        <QaCertificate />
      </div>
      <QaLightBox />
      <QualityTextBottom />
    </div>
  );
};

export default Quality;
