import React, { Component } from "react";
import QualityText from "./QualityText/QualityText";
import QaCertificate from './QaCertificate/QaCertificate'
import './Quality.scss'

class Quality extends Component {
  render() {
    return (
      <div className="aluminium__quality">
        <QualityText />
        <QaCertificate/>
      </div>
    );
  }
}

export default Quality;
