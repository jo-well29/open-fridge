import React, { Component } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import { images } from "./images"


export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: true
    };
    return (
      <div>
        <h2> Vegetables </h2>
        <Slider {...settings}>
          <div>
            <img src={images[0]}/>
          </div>
          <div>
            <img src={images[1]}/>
          </div>
          <div>
            <img src={images[2]}/>
          </div>
          <div>
            <img src={images[3]}/>
          </div>
          <div>
            <img src={images[4]}/>
          </div>
          <div>
            <img src={images[5]}/>
          </div>
          <div>
            <img src={images[6]}/>
          </div>
          <div>
            <img src={images[7]}/>
          </div>
          <div>
            <img src={images[8]}/>
          </div>
          <div>
            <img src={images[9]}/>
          </div>
          <div>
            <img src={images[10]}/>
          </div>
          <div>
            <img src={images[11]}/>
          </div>
          <div>
            <img src={images[12]}/>
          </div>
          <div>
            <img src={images[13]}/>
          </div>
          <div>
            <img src={images[14]}/>
          </div>
        </Slider>
      </div>
    );
  }
}

