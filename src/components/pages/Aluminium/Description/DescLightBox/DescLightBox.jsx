import React, { Component } from 'react';
import DescLightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 
import pic_lightbox1 from '../../images/lightbox1.jpg'
import pic_lightbox2 from '../../images/lightbox2.jpg'
import pic_lightbox3 from '../../images/lightbox3.jpg'
import './DescLightBox.scss'

const images = [
    pic_lightbox1,
    pic_lightbox2,
    pic_lightbox3,
  
];

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
      <div className='aluminium__lightbox'>
        <div className="aluminium__lightbox_wrapper">
          <img className='aluminium__lightbox_picture' src={pic_lightbox1} alt="forge" onClick={() => this.setState({ isOpen: true })}/>
        </div>

        <div className="aluminium__lightbox_wrapper"> 
          <img className='aluminium__lightbox_picture' src={pic_lightbox2} alt="forge" onClick={() => this.setState({ isOpen: true })}/>
        </div>

        <div className="aluminium__lightbox_wrapper">
          <img className='aluminium__lightbox_picture' src={pic_lightbox3} alt="forge" onClick={() => this.setState({ isOpen: true })}/>
        </div>

        {isOpen && (
          <DescLightbox
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