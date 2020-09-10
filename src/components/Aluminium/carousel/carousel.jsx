import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.scss";
import pic_slider1 from "../../Aluminium/images/slider1.jpg";
import pic_slider2 from "../../Aluminium/images/slider2.jpg";
import pic_slider3 from "../../Aluminium/images/slider3.jpg";
import pic_slider4 from "../../Aluminium/images/slider4.jpg";
import pic_slider5 from "../../Aluminium/images/slider5.jpg";
import pic_slider6 from "../../Aluminium/images/slider6.jpg";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 4000,
      cssEase: "linear",
      pauseOnHover: true,
      swipeToSlide: true,
      adaptiveHeight: true,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img className="slider" src={pic_slider1} alt="aluminium" />
          </div>
          <div>
            <img className="slider" src={pic_slider2} alt="aluminium" />
          </div>
          <div>
            <img className="slider" src={pic_slider3} alt="aluminium" />
          </div>
          <div>
            <img className="slider" src={pic_slider4} alt="aluminium" />
          </div>
          <div>
            <img className="slider" src={pic_slider5} alt="aluminium" />
          </div>
          <div>
            <img className="slider" src={pic_slider6} alt="aluminium" />
          </div>
        </Slider>
      </div>
    );
  }
}
