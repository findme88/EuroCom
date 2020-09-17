import React, { Component } from "react";
import QualityText from "./QualityText/QualityText";
import './Quality.scss'

class Quality extends Component {
  render() {
    return (
      <div className="aluminium__quality">
        <QualityText />
      </div>
    );
  }
}

export default Quality;
