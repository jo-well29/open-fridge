import React, { Component } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import { images } from "./images"
import { ingredients } from '../../config'


export default class MultipleItems extends Component {
  render() {

    const vegetables = Object.keys(ingredients.vegetables).map((vegetable, i) => {
      return (
        <div name={vegetable}>
          <img src={ingredients.vegetables[vegetable]} />
        </div>
      )
    })

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
          {vegetables}
        </Slider>
      </div>
    );
  }
}

