import React, { Component } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import { images } from "./images"
import { ingredients } from '../../config'


export default class MultipleItems extends Component {
  render() {

    const ingredientMapper = (category) => {
      const map = Object.keys(ingredients[category]).map((item, i) => {
        return (
          <div key={i} name={item}>
            <img src={ingredients[category][item]} />
          </div>
        )
      })
      return map;
    }

    const vegetables = ingredientMapper('vegetables');

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

