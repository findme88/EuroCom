import React, { Component } from "react";
import QaLightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import pic_certificate from "../../images/Certificate.jpg";
import pic_lightbox1 from "../../images/slider4.jpg";
import pic_lightbox2 from "../../images/slider5.jpg";
import pic_lightbox3 from "../../images/lightbox3.jpg";
import "./QaLightBox.scss";

const images = [pic_lightbox1, pic_lightbox2, pic_lightbox3, pic_certificate];

export default class Lightbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div className="quality__lightbox">
        <div className="quality__lightbox_wrapper">
          <img
            className="quality__lightbox_picture"
            src={pic_lightbox1}
            alt="certificate"
            onClick={() => this.setState({ isOpen: true })}
          />
        </div>

        <div className="quality__lightbox_wrapper">
          <img
            className="quality__lightbox_picture"
            src={pic_lightbox2}
            alt="certificate"
            onClick={() => this.setState({ isOpen: true })}
          />
        </div>

        <div className="quality__lightbox_wrapper">
          <img
            className="quality__lightbox_picture"
            src={pic_lightbox3}
            alt="certificate"
            onClick={() => this.setState({ isOpen: true })}
          />
        </div>

        {isOpen && (
          <QaLightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}
